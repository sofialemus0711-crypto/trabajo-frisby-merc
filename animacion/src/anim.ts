// Utilidades de tiempo y animación compartidas por todas las escenas.
import datos from './datos.json';

export const D: any = datos;
export const FPS = 30;
export const seg = (s: number) => Math.round(s * FPS);

export const B = (n: number) => D.bloques[n - 1];
// cuadro en que empieza / termina el bloque de diálogo n (+ desplazamiento en s)
export const at = (n: number, s = 0) => B(n).inicio + seg(s);
export const fin = (n: number, s = 0) => B(n).inicio + B(n).dur + seg(s);

const suave = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Interpolación por fotogramas clave [[cuadro, valor], ...] con suavizado.
export function kf(f: number, pts: [number, number][], ease = true): number {
  if (f <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) {
    const [f1, v1] = pts[i];
    const [f0, v0] = pts[i - 1];
    if (f <= f1) {
      const t = f1 === f0 ? 1 : (f - f0) / (f1 - f0);
      return v0 + (v1 - v0) * (ease ? suave(t) : t);
    }
  }
  return pts[pts.length - 1][1];
}

// 0→1 entre a y b
export const prog = (f: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (f - a) / Math.max(1, b - a)));

export function bloqueEn(f: number): any | null {
  for (const b of D.bloques) if (f >= b.inicio && f < b.inicio + b.dur) return b;
  return null;
}

// apertura de boca de un personaje en el cuadro f (0 si no está hablando)
export function boca(quien: string, f: number): number {
  const b = bloqueEn(f);
  if (!b) return 0;
  if (b.quien === quien || (b.quien === 'TODAS' && ['C1', 'C2', 'C3'].includes(quien))) {
    return b.boca[f - b.inicio] || 0;
  }
  return 0;
}

export const habla = (quien: string, f: number) => {
  const b = bloqueEn(f);
  return !!b && (b.quien === quien || (b.quien === 'TODAS' && ['C1', 'C2', 'C3'].includes(quien)));
};

export const hablante = (f: number): string | null => bloqueEn(f)?.quien ?? null;

// oscilación sencilla
export const osc = (f: number, periodo: number, amp = 1, fase = 0) =>
  Math.sin(((f + fase) / periodo) * Math.PI * 2) * amp;
