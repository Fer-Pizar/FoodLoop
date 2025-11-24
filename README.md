# 📱 FoodLoop

Welcome! FoodLoop es una aplicación móvil que conecta usuarios con restaurantes, supermercados y panaderías para rescatar comida a precios reducidos antes de que se desperdicie.

# FoodLoop — Guía de instalación y desarrollo 

---

## Índice

1. [Arquitectura & Estructura](#arquitectura--estructura)
2. [Requisitos previos](#requisitos-previos)
3. [TL;DR — Arranque rápido](#tldr--arranque-rápido)
4. [Configuración del Backend (NestJS + Prisma)](#configuración-del-backend-nestjs--prisma)

   * 4.1 [Variables de entorno](#41-variables-de-entorno)
   * 4.2 [Instalación y migraciones](#42-instalación-y-migraciones)
   * 4.3 [Ejecución y verificación](#43-ejecución-y-verificación)
   * 4.4 [Prisma Studio](#44-prisma-studio)
5. [Configuración del Frontend (Expo + React Native + TS)](#configuración-del-frontend-expo--react-native--ts)

   * 5.1 [Variables de entorno](#51-variables-de-entorno)
   * 5.2 [Instalación](#52-instalación)
   * 5.3 [Ejecutar: Web, iOS/Android (simulador) y Expo Go (teléfono físico)](#53-ejecutar-web-iosandroid-simulador-y-expo-go-teléfono-físico)
   * 5.4 [Conectar el frontend con el backend](#54-conectar-el-frontend-con-el-backend)
6. [Convenciones de ramas y commits](#convenciones-de-ramas-y-commits)
7. [QA rápido (DTOs + ValidationPipe)](#qa-rápido-dtos--validationpipe)
8. [Scripts útiles](#scripts-útiles)
9. [Solución de problemas comunes](#solución-de-problemas-comunes)
10. [CI/CD (opcional)](#cicd-opcional)

---

## Arquitectura & Estructura

**Arquitectura:** MVVM + Clean-lite

* **Presentación:** App móvil en React Native (Expo, TypeScript)
* **Lógica/Servicios:** NestJS (DTOs + validación, CORS)
* **Datos:** Prisma ORM sobre PostgreSQL

**Estructura del repo:**

```
FoodLoop/
  frontend/              # Expo + React Native + TypeScript
    app/                 # pantallas/rutas
    src/                 # componentes, hooks, services
    package.json
    .env.example         # variables para Expo
  backend/               # NestJS + Prisma + PostgreSQL
    prisma/
      schema.prisma      # modelo de datos
      migrations/        # ya versionadas en el repo
      seed.ts (opcional) # si definimos seed
    src/
      main.ts            # habilita CORS
      app.controller.ts  # /health
      app.service.ts
    package.json
    .env.example         # variables de entorno del backend
  README.md
```

---

## Requisitos previos

* **Node.js** 18 o 20 (LTS) + **npm** (o **pnpm/yarn** si prefieres)
* **Git**
* **PostgreSQL** 14+ (ten a mano host/puerto/usuario/clave)
* **Expo Go** en tu teléfono (App Store / Play Store) si probarás en dispositivo físico
* (macOS) Xcode si usarás **iOS Simulator**; (Windows/Linux) Android Studio para **Android Emulator** (opcional)

> Nota: En desarrollo, solemos usar **puerto 3000** para backend. Si tu Postgres corre en otro puerto (ej. **5433**), ajusta tu `DATABASE_URL`.

---

## TL;DR — Arranque rápido

1. **Clona** y entra al proyecto

```bash
git clone <URL_DE_TU_REPO>
cd FoodLoop
```

2. **Backend**

```bash
cd backend
cp .env.example .env
# Edita .env con tu DATABASE_URL y PORT
npm i
npx prisma generate
npx prisma migrate deploy   # aplica migraciones que ya vienen en el repo
npm run start:dev           # http://localhost:3000/health
```

3. **Frontend**

```bash
cd ../frontend
cp .env.example .env
# Edita EXPO_PUBLIC_API_URL apuntando a tu backend (IP local si usas teléfono)
npm i
npm run start               # abre Metro; escanea QR con Expo Go para iOS/Android
```

> **Tip:** Para teléfono físico, usa la **IP local** de tu máquina (ej. `http://192.168.100.16:3000`) en `EXPO_PUBLIC_API_URL`. `localhost` **no** funciona desde el móvil.

---

## Configuración del Backend (NestJS + Prisma)

### 4.1 Variables de entorno

Copia el ejemplo y completa tus valores:

```
# backend/.env
# Ajusta usuario/password/host/puerto/base según tu entorno
DATABASE_URL="postgresql://postgres:<TU_PASSWORD>@127.0.0.1:5433/foodloop?schema=public"
PORT=3000
# Orígenes permitidos para CORS (separados por coma)
CORS_ORIGINS=http://localhost:19006,http://localhost:8081,exp://127.0.0.1:19000
```

**CORS en `main.ts`:**

```ts
// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS para Expo / Web
  const origins = (process.env.CORS_ORIGINS ?? '').split(',').filter(Boolean);
  app.enableCors({ origin: origins.length ? origins : true });

  // Validación global de DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

### 4.2 Instalación y migraciones

```bash
cd backend
npm i
npx prisma generate
npx prisma migrate deploy   # aplica migraciones ya versionadas
# (solo para desarrollo local de esquemas)
# npx prisma migrate dev --name <nombre>
```

### 4.3 Ejecución y verificación

```bash
npm run start:dev           # Nest en modo watch
# Prueba de salud
curl http://localhost:3000/health
```

**Endpoints de prueba iniciales**

* `GET /health` → `{ ok: true }`
* (opcional) `GET /test-db` → retorna un conteo simple desde Prisma para verificar DB

### 4.4 Prisma Studio

```bash
npx prisma studio --port 5555
# Abre: http://localhost:5555
```

---

## Configuración del Frontend (Expo + React Native + TS)

### 5.1 Variables de entorno

```
# frontend/.env
# Usa IP local si probarás en teléfono físico (no uses localhost)
EXPO_PUBLIC_API_URL=http://192.168.100.16:3000
```

> **Cómo obtener tu IP local (macOS):**
>
> * Preferido: `ipconfig getifaddr en0` (Wi‑Fi) o `ipconfig getifaddr en1` (Ethernet)
> * Alternativa: `ifconfig | grep inet`

En el código del frontend, usa `process.env.EXPO_PUBLIC_API_URL` para construir tus requests (ej. con `fetch` o `axios`).

### 5.2 Instalación

```bash
cd frontend
npm i
```

### 5.3 Ejecutar: Web, iOS/Android (simulador) y Expo Go (teléfono físico)

* **Web**: `npm run web` o `npm start` y elige `w`
* **iOS Simulator (macOS)**: `npm run ios` (requiere Xcode)
* **Android Emulator**: `npm run android` (requiere Android Studio)
* **Teléfono físico (Expo Go)**:

  1. Asegúrate que **computadora y teléfono** estén en la **misma red Wi‑Fi**.
  2. `npm start` en `frontend/` para abrir el **Metro Bundler**.
  3. Escanea el **QR** con **Expo Go**.
  4. Si LAN falla, cambia a **Tunnel** en la UI de Expo.

### 5.4 Conectar el frontend con el backend

* Confirma que el backend corre en `http://<TU_IP_LOCAL>:3000`.
* En `frontend/.env`, define `EXPO_PUBLIC_API_URL` con esa IP.
* Reinicia Expo tras cambiar `.env`.
* Prueba llamando `GET ${EXPO_PUBLIC_API_URL}/health` desde el frontend.

---

## Convenciones de ramas y commits

* **Ramas:**

  * `main`: estable
  * `develop`: integración
  * features: `feat/<módulo>-<resumen>` (ej. `feat/auth-registro`)
  * fixes: `fix/<área>-<resumen>`
* **Commits (sugerido)**: Conventional Commits — `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`

---

## QA rápido (DTOs + ValidationPipe)

* Usamos `class-validator` y `class-transformer` con `ValidationPipe` global (ver `main.ts`).
* Crea DTOs en `backend/src/dto/*.dto.ts` y típalos en controladores/servicios para validar payloads automáticamente.

---

## Scripts útiles

**Backend** (`/backend/package.json`):

* `start:dev` – Nest en modo watch
* `prisma:generate` – `npx prisma generate`
* `prisma:deploy` – `npx prisma migrate deploy`
* `prisma:studio` – `npx prisma studio --port 5555`

**Frontend** (`/frontend/package.json`):

* `start` – Abre Metro Bundler (elige web/iOS/Android)
* `web` – Ejecuta en navegador
* `ios` – Abre iOS Simulator (macOS)
* `android` – Abre Android Emulator

---

## Solución de problemas comunes

* **El móvil no llega al backend**: Asegúrate de **usar IP local**, no `localhost`. Verifica que ambos estén en la misma red y que no haya firewall bloqueando el puerto `3000`.
* **CORS**: Agrega/actualiza tu origen en `CORS_ORIGINS` (ej. `exp://`/`http://localhost:19006`). Reinicia el backend.
* **PostgreSQL “password authentication failed”**: Revisa `DATABASE_URL` (usuario/clave/host/puerto/base). Prueba conexión con `psql`.
* **Puerto ocupado (3000/5555)**: Cambia `PORT` en `.env` o cierra procesos que lo usen.
* **Cambios en `.env` no se reflejan**: Reinicia el proceso (backend/Expo) para recargar variables.

---

## CI/CD (opcional)

* GitHub Actions para lint/test/build (gratuito en repos públicos; minutos limitados en privados).
* Despliegue posterior (cuando definamos hosting/API público).

---

## Créditos

✨ Equipo FoodLoop ❤ 

👩‍💻 **Frontend** → Pantallas, UI/UX, integración API.
👩‍💻 **Backend** → APIs, base de datos, autenticación.
👩‍💻 **Fullstack/QA** → Integración, pruebas, documentación.
