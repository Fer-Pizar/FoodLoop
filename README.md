# 📱 FoodLoop

FoodLoop es una aplicación móvil que conecta usuarios con restaurantes, supermercados y panaderías para rescatar comida a precios reducidos antes de que se desperdicie.

## 🚀 Tecnologías principales

* **Frontend**: React Native + Expo + TypeScript
* **Backend**: Node.js + Express/NestJS + Prisma
* **Base de datos**: PostgreSQL (Supabase para hosting inicial)
* **CI/CD**: GitHub Actions (lint, typecheck, tests + Postgres en contenedor)

## ⚙️ Requisitos previos

* [Node.js](https://nodejs.org/) **v18.x o v20.x**
* [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
* Cuenta en [GitHub](https://github.com) (con SSH key o PAT configurado)
* Cuenta en [Supabase](https://supabase.com) para la base de datos
* **Expo Go** en tu dispositivo móvil:

  * [iOS (App Store)](https://apps.apple.com/app/expo-go/id982107779)
  * [Android (Google Play)](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## 📲 Configuración del **Frontend (React Native + Expo + TypeScript)**

1. Entra a la carpeta `frontend` y crea la app con Expo:

   ```bash
   npx create-expo-app@latest frontend -t expo-template-blank-typescript
   cd frontend
   ```
2. Instala dependencias:

   ```bash
   npm install
   ```
3. Levanta el servidor de desarrollo:

   ```bash
   npm run start
   ```
4. Escanea el QR con la app **Expo Go** en tu móvil.

👉 **Para iOS:**

* Usa la cámara para escanear el QR que aparece en la terminal o en la página web de Expo.

👉 **Para Android:**

* Abre la app **Expo Go** y escanea el QR desde ahí.

---

## 🖥️ Configuración del **Backend (Node.js + TypeScript + Express/NestJS)**

1. Entra a la carpeta `backend` y crea el proyecto:

### Opción A: NestJS

```bash
npx @nestjs/cli new backend
cd backend
npm install
npm run start:dev
```

### Opción B: Express + TypeScript

```bash
mkdir backend && cd backend
npm init -y
npm i express cors dotenv
npm i -D typescript ts-node @types/node @types/express nodemon
npx tsc --init
```

Crea `src/server.ts` con un “Hello World” básico.

2. Arranca el backend:

   ```bash
   npm run dev
   ```

---

## 🗄️ Configuración de la **Base de Datos (PostgreSQL con Supabase)**

1. Crea un proyecto en [Supabase](https://supabase.com).
2. Copia el **connection string** de Postgres.
3. En `backend/.env` agrega:

   ```
   DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DBNAME
   PORT=3000
   JWT_SECRET=super-seguro
   ```
4. Instala Prisma:

   ```bash
   npm i prisma @prisma/client
   npx prisma init
   ```
5. Ejecuta migración inicial:

   ```bash
   npx prisma migrate dev --name init
   ```

---

## 🔄 Flujo de trabajo con Git

1. **Clona el repo**:

   ```bash
   git clone git@github.com:TU-USUARIO/foodloop.git
   ```
2. **Crea tu rama**:

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nombre-de-feature
   ```
3. **Sube tu trabajo**:

   ```bash
   git add .
   git commit -m "feat: descripción de cambio"
   git push -u origin feature/nombre-de-feature
   ```
4. Abre un **Pull Request** hacia `develop`.

---

## 🤖 CI/CD con GitHub Actions

* Validación automática con **GitHub Actions** al hacer PR a `develop` o `main`.
* Jobs definidos:

  * **Frontend** → lint, typecheck, tests.
  * **Backend** → build, lint, tests con Postgres en contenedor.

---

## 📌 Dependencias principales

### Frontend

* `expo` (SDK 51+)
* `react` (18.x)
* `react-native` (0.74+)
* `typescript` (5.x)

### Backend

* `express` (5.x) o `@nestjs/core` (10.x)
* `typescript` (5.x)
* `prisma` (5.x)
* `pg` (8.x)

### Dev

* `nodemon` (para hot reload en backend)
* `eslint` + `prettier` (linting y formato)

---

## 📅 Organización de ramas y sprints

* `main` → Producción (entregas finales).
* `develop` → Integración de features.
* `feature/*` → Ramas por tarea (ej. `feature/auth-login`).

## 📖 Notas importantes

* No subas `.env` → usa `.env.example` y configúralo localmente.
* En `frontend/.env` usa variables con `EXPO_PUBLIC_` para que Expo las reconozca.
* Usa **Expo Go** para pruebas rápidas en móviles.
* Para builds reales (App Store / Google Play) usaremos **Expo Application Services (EAS)**.

---

## ✨ Equipo

👩‍💻 **Frontend** → Pantallas, UI/UX, integración API.
👩‍💻 **Backend** → APIs, base de datos, autenticación.
👩‍💻 **Fullstack/QA** → Integración, pruebas, documentación.
