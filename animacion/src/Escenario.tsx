// El apartamento donde ocurre la historia (un solo mundo de 3300 px de ancho,
// que la cámara recorre) y la utilería.
import React from 'react';
import {staticFile} from 'remotion';

export const PISO = 950;

const mezcla = (a: string, b: string, t: number) => {
  const pa = a.match(/\w\w/g)!.map((h) => parseInt(h, 16));
  const pb = b.match(/\w\w/g)!.map((h) => parseInt(h, 16));
  return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, '0')).join('');
};

// noche: 0 = atardecer, 1 = noche cerrada
export const Fondo: React.FC<{noche: number; puerta?: number; tablero?: React.ReactNode; menu?: boolean}> = ({noche, puerta = 0, tablero}) => {
  const pared = mezcla('F6E7CF', 'C9B79E', noche * 0.6);
  const cieloA = mezcla('FFB15C', '0E1A3A', noche);
  const cieloB = mezcla('FFDFA0', '27365E', noche);
  return (
    <g>
      <defs>
        <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={cieloA} />
          <stop offset="1" stopColor={cieloB} />
        </linearGradient>
        <radialGradient id="luzLampara" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#FFE7A8" stopOpacity={0.55 * noche} />
          <stop offset="1" stopColor="#FFE7A8" stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x={-400} y={-300} width={4200} height={1250} fill={pared} />
      <rect x={-400} y={700} width={4200} height={250} fill={mezcla('E9D2AE', 'B8A386', noche * 0.6)} />
      <rect x={-400} y={694} width={4200} height={10} fill="#C59A6A" />
      {/* piso de madera */}
      <rect x={-400} y={PISO - 50} width={4200} height={800} fill={mezcla('B9824F', '7E5838', noche * 0.5)} />
      {Array.from({length: 20}).map((_, i) => (
        <line key={i} x1={-400 + i * 230} y1={PISO - 50} x2={-500 + i * 230} y2={1500} stroke="#00000018" strokeWidth={4} />
      ))}

      {/* cocina con mesón */}
      <rect x={110} y={120} width={560} height={150} rx={8} fill="#A5452E" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={124 + i * 180} y={134} width={168} height={122} rx={6} fill="#B8553B" />
      ))}
      {/* menú dibujado a mano pegado en la pared */}
      <g transform="translate(250 300) rotate(-2)">
        <rect x={0} y={0} width={290} height={230} rx={6} fill="#FFFDF5" stroke="#D9C9A8" strokeWidth={3} />
        <text x={145} y={44} textAnchor="middle" fontFamily="'Patrick Hand', cursive" fontSize={36} fill="#C8102E" fontWeight={700}>MENÚ</text>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${50 + i * 95} 110)`}>
            <Presa s={0.7} />
          </g>
        ))}
        <g transform="translate(232 170) rotate(12)">
          <path d="M0 -34 L10 -10 L34 -10 L14 4 L22 30 L0 14 L-22 30 L-14 4 L-34 -10 L-10 -10 Z" fill="#F2C318" stroke="#E08A00" strokeWidth={3} />
          <text x={0} y={7} textAnchor="middle" fontFamily="Arial" fontWeight={800} fontSize={13} fill="#A3121C">PROMO</text>
        </g>
        <rect x={30} y={170} width={150} height={10} rx={5} fill="#E8DCC4" />
        <rect x={30} y={192} width={110} height={10} rx={5} fill="#E8DCC4" />
      </g>
      <rect x={100} y={640} width={580} height={28} rx={6} fill="#EAD7B5" />
      <rect x={116} y={668} width={548} height={PISO - 668} fill="#8C2F1E" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={132 + i * 178} y={690} width={160} height={PISO - 720} rx={6} fill="#9C3A26" />
      ))}

      {/* lámpara de pie */}
      <rect x={756} y={380} width={8} height={PISO - 380} fill="#3A3A3A" />
      <path d="M 710 380 L 810 380 L 790 310 L 730 310 Z" fill={noche > 0.5 ? '#FFE08A' : '#F1E3C2'} />
      <circle cx={760} cy={420} r={420} fill="url(#luzLampara)" />

      {/* ventana */}
      <rect x={890} y={150} width={720} height={420} rx={10} fill="#FFFFFF" />
      <rect x={905} y={165} width={690} height={390} fill="url(#cielo)" />
      {noche < 0.5 && <circle cx={1380} cy={430} r={70} fill="#FFE9A8" opacity={1 - noche * 2} />}
      {noche > 0.3 &&
        Array.from({length: 18}).map((_, i) => (
          <circle key={i} cx={920 + ((i * 137) % 660)} cy={180 + ((i * 71) % 180)} r={2.5} fill="#FFFFFF" opacity={(noche - 0.3) * 1.4} />
        ))}
      <path d="M 905 555 L 905 430 L 960 430 L 960 380 L 1030 380 L 1030 450 L 1090 450 L 1090 340 L 1170 340 L 1170 420 L 1240 420 L 1240 395 L 1300 395 L 1300 470 L 1400 470 L 1400 360 L 1470 360 L 1470 440 L 1530 440 L 1530 400 L 1595 400 L 1595 555 Z" fill={mezcla('C9773F', '141C33', noche)} />
      {noche > 0.4 &&
        Array.from({length: 26}).map((_, i) => (
          <rect key={i} x={915 + ((i * 53) % 660)} y={400 + ((i * 29) % 140)} width={8} height={10} fill="#FFD36B" opacity={noche} />
        ))}
      <rect x={1245} y={165} width={10} height={390} fill="#FFFFFF" />
      <path d="M 870 130 L 1000 130 Q 960 360 990 600 L 870 600 Z" fill="#C8102E" />
      <path d="M 1630 130 L 1500 130 Q 1540 360 1510 600 L 1630 600 Z" fill="#C8102E" />
      <rect x={860} y={120} width={780} height={16} rx={8} fill="#6B3A1E" />

      {/* sofá */}
      <rect x={860} y={600} width={780} height={180} rx={50} fill="#D9A23A" />
      <rect x={880} y={760} width={740} height={90} rx={30} fill="#C78F2C" />
      <rect x={830} y={680} width={90} height={190} rx={40} fill="#C78F2C" />
      <rect x={1580} y={680} width={90} height={190} rx={40} fill="#C78F2C" />
      <rect x={920} y={640} width={120} height={110} rx={30} fill="#C8102E" transform="rotate(-8 980 690)" />
      <rect x={1460} y={640} width={120} height={110} rx={30} fill="#F2C318" transform="rotate(8 1520 690)" />

      {/* planta */}
      <path d="M 1720 900 L 1700 820 L 1800 820 L 1780 900 Z" fill="#B5582E" />
      {[-30, -10, 10, 30].map((a, i) => (
        <ellipse key={i} cx={1750 + a} cy={760 - Math.abs(a)} rx={18} ry={60} fill="#3F8A4F" transform={`rotate(${a} 1750 820)`} />
      ))}

      {/* tablero */}
      <rect x={1830} y={220} width={440} height={330} rx={8} fill="#8A8A8A" />
      <rect x={1842} y={232} width={416} height={306} fill="#FFFFFF" />
      <rect x={1880} y={550} width={360} height={14} rx={6} fill="#8A8A8A" />
      <g transform="translate(1842 232)">{tablero}</g>

      {/* retrato de la mascota entre la ventana y el tablero */}
      <rect x={1680} y={230} width={110} height={140} rx={6} fill="#FFFFFF" stroke="#6B3A1E" strokeWidth={8} />
      <image href={staticFile('img/mascota.jpg')} x={1690} y={250} width={90} height={100} preserveAspectRatio="xMidYMid meet" />

      {/* lámpara colgante del comedor */}
      <line x1={2640} y1={-300} x2={2640} y2={470} stroke="#3A3A3A" strokeWidth={4} />
      <path d="M 2580 520 Q 2640 440 2700 520 Z" fill="#C8102E" />
      <circle cx={2640} cy={640} r={380} fill="url(#luzLampara)" />

      {/* puerta de entrada */}
      <rect x={2990} y={290} width={240} height={PISO - 290} fill="#5A3A22" />
      <rect x={3005} y={305} width={210} height={PISO - 305} fill="#2E2A33" />
      {puerta > 0 && <rect x={3005} y={305} width={210} height={PISO - 305} fill="#E9D7B8" opacity={0.9} />}
      <g transform={`translate(3005 0) scale(${1 - puerta * 0.85} 1)`}>
        <rect x={0} y={305} width={210} height={PISO - 305} fill="#8C5A34" />
        <rect x={24} y={330} width={162} height={220} rx={6} fill="#7A4D2C" />
        <rect x={24} y={580} width={162} height={300} rx={6} fill="#7A4D2C" />
        <circle cx={180} cy={640} r={10} fill="#E8C35A" />
      </g>
    </g>
  );
};

// Muebles en primer plano (tapan las piernas de quien está detrás)
export const Frente: React.FC<{noche: number; mesa?: React.ReactNode; mesita?: React.ReactNode}> = ({mesa, mesita}) => (
  <g>
    {/* mesa de centro frente al sofá */}
    <rect x={1030} y={870} width={440} height={26} rx={8} fill="#7A4D2C" />
    <rect x={1050} y={896} width={18} height={70} fill="#5A3A22" />
    <rect x={1432} y={896} width={18} height={70} fill="#5A3A22" />
    <g transform="translate(1250 870)">{mesita}</g>
    {/* mesa del comedor */}
    <g transform="translate(2640 0)">
      <g transform="translate(0 800)">{mesa}</g>
      <rect x={-300} y={800} width={600} height={30} rx={10} fill="#8C5A34" />
      <rect x={-290} y={830} width={580} height={40} fill="#C8102E" />
      <path d="M -290 830 L 290 830 L 290 870 L -290 870 Z" fill="url(#mantel)" />
      <rect x={-270} y={870} width={22} height={110} fill="#5A3A22" />
      <rect x={248} y={870} width={22} height={110} fill="#5A3A22" />
    </g>
    <defs>
      <pattern id="mantel" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="#FFFFFF" opacity={0.35} />
        <rect x="20" y="20" width="20" height="20" fill="#FFFFFF" opacity={0.35} />
      </pattern>
    </defs>
  </g>
);

// ---------------------------------------------------------------- utilería
export const Presa: React.FC<{s?: number; mordida?: boolean}> = ({s = 1, mordida}) => (
  <g transform={`scale(${s})`}>
    <rect x={-6} y={14} width={12} height={34} rx={6} fill="#F5EBDD" />
    <circle cx={-7} cy={50} r={8} fill="#F5EBDD" />
    <circle cx={7} cy={50} r={8} fill="#F5EBDD" />
    <path d="M -30 0 Q -34 -40 0 -46 Q 34 -40 30 0 Q 24 22 0 24 Q -24 22 -30 0 Z" fill="#C67A2B" />
    <path d="M -22 -6 Q -18 -30 4 -34" stroke="#E9A653" strokeWidth={7} fill="none" strokeLinecap="round" />
    {[[-14, -18], [10, -24], [16, -2], [-6, 6], [2, -38]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={4} fill="#A95F1C" />
    ))}
    {mordida && <circle cx={22} cy={-30} r={14} fill="#00000000" stroke="#00000000" />}
  </g>
);

export const Telefono: React.FC<{pantalla?: string; s?: number; brillo?: number}> = ({pantalla = '#3A7BD5', s = 1, brillo = 0}) => (
  <g transform={`scale(${s})`}>
    <rect x={-26} y={-48} width={52} height={96} rx={9} fill="#1D1D22" />
    <rect x={-21} y={-42} width={42} height={84} rx={5} fill={pantalla} />
    {brillo > 0 && <rect x={-21} y={-42} width={42} height={84} rx={5} fill="#FFFFFF" opacity={brillo} />}
  </g>
);

export const Laptop: React.FC<{abierto?: number}> = ({abierto = 1}) => (
  <g>
    <rect x={-90} y={-8} width={180} height={12} rx={4} fill="#9AA0A8" />
    <g transform={`scale(1 ${abierto})`}>
      <rect x={-80} y={-118} width={160} height={110} rx={6} fill="#5B6168" />
      <rect x={-72} y={-110} width={144} height={94} rx={3} fill="#F7F1E3" />
      <rect x={-60} y={-98} width={60} height={10} rx={4} fill="#C8102E" />
      <rect x={-60} y={-80} width={110} height={8} rx={4} fill="#E2D6BE" />
      <rect x={-60} y={-66} width={90} height={8} rx={4} fill="#E2D6BE" />
    </g>
  </g>
);

export const Balde: React.FC<{s?: number}> = ({s = 1}) => (
  <g transform={`scale(${s})`}>
    {[-40, -5, 30].map((x, i) => (
      <g key={i} transform={`translate(${x} ${-100 - (i % 2) * 14}) rotate(${(i - 1) * 25})`}>
        <Presa s={0.9} />
      </g>
    ))}
    <path d="M -80 -100 L 80 -100 L 64 0 L -64 0 Z" fill="#FFFFFF" />
    {[-60, -24, 12, 48].map((x, i) => (
      <path key={i} d={`M ${x} -100 L ${x + 20} -100 L ${x * 0.8 + 18} 0 L ${x * 0.8 + 2} 0 Z`} fill="#C8102E" />
    ))}
    <rect x={-84} y={-108} width={168} height={14} rx={5} fill="#F2C318" />
  </g>
);

export const Arepas: React.FC = () => (
  <g>
    <ellipse cx={0} cy={0} rx={80} ry={18} fill="#FFFFFF" />
    {[-30, 0, 30].map((x, i) => (
      <ellipse key={i} cx={x} cy={-10 - (i % 2) * 6} rx={34} ry={11} fill="#F3D9A0" stroke="#E2BE77" strokeWidth={3} />
    ))}
  </g>
);

export const Vaso: React.FC<{s?: number}> = ({s = 1}) => (
  <g transform={`scale(${s})`}>
    <path d="M -22 -70 L 22 -70 L 16 0 L -16 0 Z" fill="#F2C318" />
    <rect x={-22} y={-46} width={44} height={16} fill="#C8102E" />
    <rect x={-25} y={-78} width={50} height={10} rx={4} fill="#C8102E" />
    <rect x={4} y={-112} width={6} height={38} fill="#FFFFFF" transform="rotate(12 7 -78)" />
  </g>
);

export const Bolsa: React.FC<{vapor?: number; f?: number}> = ({vapor = 0, f = 0}) => (
  <g>
    {vapor > 0 &&
      [-20, 0, 20].map((x, i) => (
        <path key={i} d={`M ${x} -130 q 10 -20 0 -40 q -10 -20 0 -40`} stroke="#FFFFFF" strokeWidth={6} fill="none" opacity={vapor * (0.5 + 0.4 * Math.sin((f + i * 10) / 8))} strokeLinecap="round" />
      ))}
    <path d="M -50 -120 L 50 -120 L 56 0 L -56 0 Z" fill="#C89A63" />
    <rect x={-53} y={-80} width={106} height={22} fill="#C8102E" />
    <path d="M -24 -120 Q 0 -160 24 -120" stroke="#A97B47" strokeWidth={6} fill="none" />
  </g>
);

export const Recibo: React.FC = () => (
  <g>
    <rect x={-26} y={-40} width={52} height={80} fill="#FFFFFF" stroke="#DDD" strokeWidth={2} />
    {[-26, -14, -2, 10, 22].map((y, i) => (
      <rect key={i} x={-18} y={y} width={i === 4 ? 20 : 36} height={5} fill="#BBB" />
    ))}
  </g>
);

export const Afiche: React.FC<{children?: React.ReactNode; w?: number; h?: number}> = ({children, w = 300, h = 200}) => (
  <g>
    <rect x={-w / 2} y={-h} width={w} height={h} rx={8} fill="#FFFDF5" stroke="#E2D2B0" strokeWidth={4} />
    {children}
  </g>
);

// trazo que se dibuja progresivamente (0..1)
export const Trazo: React.FC<{d: string; p: number; color?: string; w?: number; largo?: number}> = ({d, p, color = '#1F4FA3', w = 7, largo = 1200}) =>
  p <= 0 ? null : (
    <path d={d} stroke={color} strokeWidth={w} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={largo} strokeDashoffset={largo * (1 - p)} />
  );

export const Escrito: React.FC<{x: number; y: number; p: number; size?: number; color?: string; children: string}> = ({x, y, p, size = 30, color = '#1F4FA3', children}) =>
  p <= 0 ? null : (
    <text x={x} y={y} fontFamily="'Patrick Hand', cursive" fontSize={size} fill={color} textAnchor="middle" fontWeight={700}>
      {children.slice(0, Math.ceil(children.length * Math.min(1, p)))}
    </text>
  );
