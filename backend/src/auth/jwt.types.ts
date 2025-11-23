import { Request } from 'express';

export interface JwtUser {
  userId: number | string;
  email?: string;
  rol?: 'consumidor' | 'comercio' | 'admin';
}

export function extractUserId(req: Request & { user?: JwtUser }): number {
  const raw = req.user?.userId;

  if (!raw) {
    throw new Error('No se pudo obtener el userId del token');
  }

  return Number(raw);
}
