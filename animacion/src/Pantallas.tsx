// Pantallas que los personajes miran dentro de la historia (celular, portátil,
// mapa del domicilio). Se dibujan en espacio de pantalla, junto al personaje.
import React from 'react';
import {staticFile} from 'remotion';
import {Personaje} from './Personaje';
import {Presa, Balde} from './Escenario';
import {kf, osc, prog} from './anim';

const FUENTE = "'Baloo 2', sans-serif";

// Marco de celular que entra con un pequeño rebote. entrada/salida en cuadros.
export const Panel: React.FC<{f: number; desde: number; hasta: number; x: number; y: number; w: number; h: number; tipo?: 'celular' | 'portatil'; children: React.ReactNode}> = ({f, desde, hasta, x, y, w, h, tipo = 'celular', children}) => {
  if (f < desde || f > hasta) return null;
  const e = kf(f, [[desde, 0], [desde + 12, 1], [hasta - 10, 1], [hasta, 0]]);
  const esc = 0.85 + 0.15 * e;
  const borde = tipo === 'celular' ? 26 : 18;
  return (
    <g opacity={e} transform={`translate(${x + w / 2} ${y + h / 2}) scale(${esc}) translate(${-w / 2} ${-h / 2})`}>
      <rect x={-borde} y={-borde} width={w + borde * 2} height={h + borde * 2} rx={tipo === 'celular' ? 56 : 18} fill="#16161A" />
      {tipo === 'portatil' && <rect x={-120} y={h + borde} width={w + 240} height={30} rx={12} fill="#9AA0A8" />}
      <clipPath id={`clip-${desde}`}>
        <rect x={0} y={0} width={w} height={h} rx={tipo === 'celular' ? 34 : 6} />
      </clipPath>
      <g clipPath={`url(#clip-${desde})`}>
        <rect x={0} y={0} width={w} height={h} fill="#FFF8EC" />
        {children}
      </g>
    </g>
  );
};

const BarraApp: React.FC<{w: number; titulo?: string; color?: string}> = ({w, titulo = '', color = '#C8102E'}) => (
  <g>
    <rect x={0} y={0} width={w} height={86} fill={color} />
    <text x={w / 2} y={60} textAnchor="middle" fontFamily={FUENTE} fontWeight={800} fontSize={34} fill="#FFFFFF">{titulo}</text>
  </g>
);

// Imagen real del menú de la marca (capturas que se entregaron), recortada.
export const Captura: React.FC<{src: string; x: number; y: number; w: number; h: number; fit?: 'slice' | 'meet'}> = ({src, x, y, w, h, fit = 'slice'}) => (
  <image href={staticFile(`img/${src}`)} x={x} y={y} width={w} height={h} preserveAspectRatio={`xMidYMid ${fit}`} />
);

const Corazon: React.FC<{x: number; y: number; s?: number; o?: number; color?: string}> = ({x, y, s = 1, o = 1, color = '#E6334A'}) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M0 10 C -18 -6 -14 -22 0 -14 C 14 -22 18 -6 0 10 Z" fill={color} opacity={o} />
);

// corazones que suben (reacciones)
export const Reacciones: React.FC<{f: number; desde: number; x: number; y: number; n?: number}> = ({f, desde, x, y, n = 7}) => (
  <g>
    {Array.from({length: n}).map((_, i) => {
      const t = (f - desde - i * 9) / 60;
      if (t < 0 || t > 1) return null;
      return <Corazon key={i} x={x + osc(i * 13, 7, 30) + osc(f, 40, 12, i * 9)} y={y - t * 260} s={1.6 + (i % 3) * 0.4} o={1 - t} />;
    })}
  </g>
);

export const Feed: React.FC<{f: number; desde: number; w: number; h: number}> = ({f, desde, w, h}) => {
  const fotos = ['menu_pollo_apanado.jpg', 'menu_hamburguesas.jpg', 'menu_combos.jpg', 'menu_frisdelicias.jpg', 'menu_bebidas.jpg'];
  const desplaza = Math.max(0, f - desde - 20) * 2.2;
  return (
    <g>
      <g transform={`translate(0 ${-desplaza})`}>
        {fotos.map((src, i) => (
          <g key={src} transform={`translate(0 ${110 + i * 330})`}>
            <circle cx={44} cy={24} r={18} fill="#F2C318" />
            <rect x={72} y={14} width={140} height={14} rx={7} fill="#D8CBB0" />
            <Captura src={src} x={16} y={52} w={w - 32} h={230} />
            <Corazon x={40} y={306} s={1.3} o={f - desde > 30 + i * 40 ? 1 : 0.25} />
            <rect x={66} y={298} width={90} height={12} rx={6} fill="#E4D9C3" />
          </g>
        ))}
      </g>
      <BarraApp w={w} titulo="Para ti" />
      <Reacciones f={f} desde={desde + 25} x={w - 70} y={h - 60} />
    </g>
  );
};

export const PedidoListo: React.FC<{f: number; desde: number; w: number; h: number}> = ({f, desde, w, h}) => {
  const p = prog(f, desde, desde + 18);
  const pulso = 1 + osc(f, 20, 0.04);
  return (
    <g>
      <Captura src="menu_combos.jpg" x={0} y={86} w={w} h={h - 86} />
      <rect x={0} y={0} width={w} height={h} fill="#FFFFFF" opacity={0.75 * p} />
      <g transform={`translate(${w / 2} ${h / 2 - 30}) scale(${p * pulso})`}>
        <circle r={110} fill="#2FA84F" />
        <path d="M -50 0 L -14 36 L 56 -40" stroke="#FFFFFF" strokeWidth={22} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g opacity={p}>
        <rect x={w / 2 - 130} y={h / 2 + 110} width={260} height={56} rx={28} fill="#F36E00" />
        <g transform={`translate(${w / 2 - 92} ${h / 2 + 140})`}><Presa s={0.45} /></g>
        <g transform={`translate(${w / 2 + 20} ${h / 2 + 138})`}>
          <path d="M -40 -12 L 30 -12 L 40 10 L -40 10 Z M -30 10 a 9 9 0 1 0 1 0 M 22 10 a 9 9 0 1 0 1 0" fill="#FFFFFF" />
        </g>
      </g>
      <BarraApp w={w} titulo="Tu pedido" />
    </g>
  );
};

export const PaginaWeb: React.FC<{f: number; desde: number; w: number; h: number}> = ({f, desde, w, h}) => {
  const t = (f - desde) / 30;
  const sobre = prog(f, desde + 70, desde + 130);
  return (
    <g>
      <rect x={0} y={0} width={w} height={50} fill="#EFE6D6" />
      {[18, 42, 66].map((x, i) => <circle key={i} cx={x} cy={25} r={8} fill={['#E95B54', '#F2C318', '#4CB25A'][i]} />)}
      <rect x={100} y={13} width={w - 140} height={24} rx={12} fill="#FFFFFF" />
      <Captura src="menu_frisdelicias.jpg" x={20} y={70} w={w - 40} h={(w - 40) * 0.3} fit="meet" />
      <Captura src="menu_combos.jpg" x={20} y={90 + (w - 40) * 0.3} w={w - 40} h={(w - 40) * 0.3} fit="meet" />
      {/* correo promocional que sale volando */}
      <g transform={`translate(${w * 0.5 + sobre * 260} ${h - 90 - sobre * 160}) rotate(${-10 + sobre * 20}) scale(${1 + 0.2 * osc(t, 1)})`} opacity={sobre > 0 ? 1 - Math.max(0, sobre - 0.8) * 5 : 0}>
        <rect x={-70} y={-46} width={140} height={92} rx={10} fill="#FFFFFF" stroke="#C8102E" strokeWidth={6} />
        <path d="M -66 -40 L 0 10 L 66 -40" stroke="#C8102E" strokeWidth={6} fill="none" />
      </g>
    </g>
  );
};

// Video corto del creador de contenido: Cami probando el pollo, con reacciones.
export const VideoCreador: React.FC<{f: number; desde: number; w: number; h: number}> = ({f, desde, w, h}) => {
  const t = f - desde;
  const mordisco = (t % 90) > 40 && (t % 90) < 60;
  return (
    <g>
      <rect x={0} y={0} width={w} height={h} fill="#FFE3B0" />
      <rect x={0} y={h * 0.62} width={w} height={h} fill="#E9B97A" />
      <g transform={`translate(${w / 2} ${h + 120}) scale(1.1)`}>
        <Personaje id="C2" f={f} x={0} y={0} s={1} smile={1} mouth={mordisco ? 0.5 : 0} cap apron aR={mordisco ? [25, -138] : [40, -110]} holdR={<Presa s={1.4} />} aL={[95, 95]} />
      </g>
      <Reacciones f={f} desde={desde + 10} x={w - 70} y={h - 120} n={10} />
      <rect x={30} y={h - 46} width={w - 60} height={8} rx={4} fill="#FFFFFF66" />
      <rect x={30} y={h - 46} width={(w - 60) * ((t % 240) / 240)} height={8} rx={4} fill="#E6334A" />
      <circle cx={46} cy={46} r={14} fill="#E6334A" opacity={0.6 + osc(f, 30, 0.4)} />
    </g>
  );
};

// Selfie del reto #FrisbyNosUne y luego la cuadrícula de publicaciones
export const Reto: React.FC<{f: number; desde: number; cuadricula: number; w: number; h: number}> = ({f, desde, cuadricula, w, h}) => {
  const ids: any[] = ['C2', 'C1', 'C3'];
  return (
    <g>
      <g opacity={1 - cuadricula}>
        <rect x={0} y={0} width={w} height={h} fill="#FFD27A" />
        {ids.map((id, i) => (
          <Personaje key={id} id={id} f={f} x={w / 2 + (i - 1) * 170} y={h + 330} s={1.05} smile={1} tilt={(i - 1) * 6} aL={i === 2 ? [150, -20] : undefined} />
        ))}
        <Reacciones f={f} desde={desde + 15} x={w - 60} y={h - 80} n={9} />
      </g>
      <g opacity={cuadricula}>
        <rect x={0} y={0} width={w} height={h} fill="#FFF8EC" />
        {Array.from({length: 6}).map((_, i) => {
          const cx = 20 + (i % 2) * ((w - 60) / 2 + 20);
          const cy = 110 + Math.floor(i / 2) * 230;
          const ww = (w - 60) / 2;
          const p = prog(f, desde + i * 8, desde + i * 8 + 12);
          return (
            <g key={i} opacity={p}>
              <rect x={cx} y={cy} width={ww} height={210} rx={14} fill={['#FFD27A', '#FFB4A2', '#BDE0C7', '#C9D7FF', '#FFE08A', '#F7C6E0'][i]} />
              <g transform={`translate(${cx + ww / 2} ${cy + 175}) scale(0.5)`}>
                <Balde />
              </g>
              <Corazon x={cx + ww - 24} y={cy + 24} s={1.2} />
            </g>
          );
        })}
      </g>
      <rect x={0} y={0} width={w} height={86} fill="#C8102E" />
      <text x={w / 2} y={60} textAnchor="middle" fontFamily={FUENTE} fontWeight={800} fontSize={36} fill="#FFFFFF">#FrisbyNosUne</text>
    </g>
  );
};

// Mapa del domicilio: canal directo, canal indirecto y tipos de cobertura.
export const Mapa: React.FC<{f: number; w: number; h: number; t: {directo: number; web: number; indirecto: number; intensiva: number; selectiva: number; exclusiva: number; propuesta: number; llegada: number}}> = ({f, w, h, t}) => {
  const zoom = 1 - 0.42 * Math.max(t.intensiva, t.selectiva, t.propuesta) * (1 - t.llegada);
  const casa = {x: 520, y: 600};
  const rest = {x: 190, y: 230};
  // ruta de la moto (domiciliario de una plataforma)
  const ruta = [[rest.x, rest.y + 40], [rest.x, 420], [520, 420], [casa.x, casa.y - 50]];
  const pm = Math.min(1, t.indirecto * 0.55 + t.llegada * 0.45);
  const seg = pm * 3;
  const i = Math.min(2, Math.floor(seg));
  const u = seg - i;
  const mx = ruta[i][0] + (ruta[i + 1][0] - ruta[i][0]) * u;
  const my = ruta[i][1] + (ruta[i + 1][1] - ruta[i][1]) * u;
  const pines = Array.from({length: 26}).map((_, k) => ({x: -320 + ((k * 197) % 1340), y: -300 + ((k * 131) % 1360)}));
  const sinCobertura = (x: number, y: number) => x > 760 && y < 150;
  return (
    <g>
      <rect x={0} y={0} width={w} height={h} fill="#E9F0E1" />
      <g transform={`translate(${w / 2} ${h / 2}) scale(${zoom}) translate(${-w / 2} ${-h / 2})`}>
        {/* manzanas y calles */}
        <rect x={-600} y={-600} width={2000} height={2000} fill="#E9F0E1" />
        {Array.from({length: 9}).map((_, k) => (
          <g key={k}>
            <rect x={-600} y={-460 + k * 220} width={2000} height={40} fill="#FFFFFF" />
            <rect x={-480 + k * 220} y={-600} width={40} height={2000} fill="#FFFFFF" />
          </g>
        ))}
        <rect x={250} y={-230} width={170} height={170} rx={20} fill="#BFDDA8" />
        {/* zona sin disponibilidad (rayada) */}
        <g opacity={t.propuesta}>
          <rect x={760} y={-600} width={700} height={750} fill="#9AA0A8" opacity={0.35} />
          {Array.from({length: 14}).map((_, k) => (
            <line key={k} x1={760 + k * 50} y1={-600} x2={760 + k * 50 - 300} y2={150} stroke="#7E848C" strokeWidth={4} opacity={0.5} />
          ))}
        </g>
        {/* muchos restaurantes (cobertura) */}
        {pines.map((p, k) => {
          const visible = t.intensiva * (1 - t.selectiva) + t.selectiva * (k % 5 === 0 ? 1 : 0) * (1 - t.exclusiva) + t.exclusiva * (k === 10 ? 1 : 0);
          const op = Math.max(visible, t.propuesta * (sinCobertura(p.x, p.y) ? 0 : 1));
          return op > 0.01 ? <Pin key={k} x={p.x} y={p.y} o={op} s={k === 10 && t.exclusiva > 0.5 ? 1.6 : 1} /> : null;
        })}
        {/* restaurante principal */}
        <g transform={`translate(${rest.x} ${rest.y})`}>
          <rect x={-60} y={-40} width={120} height={80} rx={8} fill="#C8102E" />
          <path d="M -70 -40 L 70 -40 L 56 -70 L -56 -70 Z" fill="#F2C318" />
          <g transform="translate(0 6) scale(0.6)"><Presa /></g>
        </g>
        {/* la casa de las amigas */}
        <g transform={`translate(${casa.x} ${casa.y})`}>
          <rect x={-50} y={-40} width={100} height={80} fill="#F7F1E3" stroke="#6B3A1E" strokeWidth={5} />
          <path d="M -64 -40 L 0 -90 L 64 -40 Z" fill="#6B3A1E" />
          <rect x={-14} y={0} width={28} height={40} fill="#8C5A34" />
          {t.llegada > 0.95 && <circle r={70 + osc(f, 12, 8)} fill="none" stroke="#2FA84F" strokeWidth={8} />}
        </g>
        {/* canal directo: alguien entra al restaurante; pedido por web/app */}
        {t.directo > 0 && t.indirecto === 0 && (
          <g transform={`translate(${rest.x + 160 - t.directo * 150} ${rest.y + 70})`} opacity={1 - Math.max(0, t.directo - 0.9) * 10}>
            <circle cx={0} cy={-30} r={14} fill="#2F3E5C" />
            <rect x={-12} y={-16} width={24} height={36} rx={10} fill="#2F3E5C" />
          </g>
        )}
        {t.web > 0 && (
          <g opacity={t.web * (1 - t.indirecto)}>
            <path d={`M ${casa.x - 40} ${casa.y - 70} Q 360 300 ${rest.x + 60} ${rest.y + 10}`} stroke="#C8102E" strokeWidth={7} strokeDasharray="16 14" fill="none" strokeDashoffset={-f * 2} />
            <g transform={`translate(${casa.x + 80} ${casa.y - 110})`}>
              <rect x={-22} y={-38} width={44} height={76} rx={8} fill="#1D1D22" />
              <rect x={-17} y={-32} width={34} height={60} rx={4} fill="#C8102E" />
            </g>
          </g>
        )}
        {/* canal indirecto: plataforma de domicilios (genérica) */}
        {t.indirecto > 0 && (
          <g>
            <polyline points={ruta.map((p) => p.join(',')).join(' ')} stroke="#7B3FBF" strokeWidth={8} fill="none" strokeDasharray="4 16" strokeLinecap="round" opacity={0.6} />
            <g transform={`translate(${mx} ${my})`}>
              <circle r={42} fill="#7B3FBF" />
              <g fill="#FFFFFF">
                <circle cx={-18} cy={14} r={9} />
                <circle cx={18} cy={14} r={9} />
                <path d="M -20 10 L -4 -8 L 14 -8 L 20 10 Z" />
                <rect x={-4} y={-22} width={18} height={14} rx={3} fill="#F2C318" />
              </g>
            </g>
          </g>
        )}
      </g>
      <rect x={0} y={0} width={w} height={86} fill="#C8102E" />
      <text x={w / 2} y={60} textAnchor="middle" fontFamily={FUENTE} fontWeight={800} fontSize={34} fill="#FFFFFF">Tu pedido</text>
    </g>
  );
};

const Pin: React.FC<{x: number; y: number; o: number; s?: number}> = ({x, y, o, s = 1}) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} opacity={o}>
    <path d="M 0 0 C -26 -30 -26 -62 0 -62 C 26 -62 26 -30 0 0 Z" fill="#C8102E" />
    <circle cx={0} cy={-40} r={11} fill="#F2C318" />
  </g>
);
