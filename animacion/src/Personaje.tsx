// Personaje 2D articulado: piernas, torso, brazos con hombro y codo, cabeza con
// mirada, parpadeo, cejas y boca que se abre con la voz.
import React from 'react';
import {osc} from './anim';

type Brazo = [number, number]; // [ángulo del hombro, flexión del codo] en grados; 0 = colgando
export type Id = 'C1' | 'C2' | 'C3' | 'V' | 'R';

export type PersonajeProps = {
  id: Id;
  f: number;
  x: number;
  y: number;
  s?: number;
  flip?: boolean;
  aL?: Brazo;
  aR?: Brazo;
  legs?: 'stand' | 'sit' | 'walk';
  walk?: number; // fase de caminata (cuadros)
  tilt?: number;
  turn?: number; // -1..1 giro de la cara
  look?: [number, number];
  mouth?: number;
  smile?: number; // -1..1
  brow?: number; // -1 ceño, 0 normal, 1 sorpresa
  holdR?: React.ReactNode;
  holdL?: React.ReactNode;
  cap?: boolean;
  apron?: boolean;
  lean?: number; // inclinación del cuerpo en grados
  hop?: number; // salto (px hacia arriba)
};

const PIEL: Record<Id, string> = {C1: '#E8B48F', C2: '#C98E62', C3: '#A8704C', V: '#D9A07A', R: '#B87A55'};
const PELO: Record<Id, string> = {C1: '#3B2416', C2: '#8A5A2B', C3: '#141414', V: '#2B1D14', R: '#2B1D14'};
const ROPA: Record<Id, {torso: string; interior?: string; pantalon: string; manga: 'larga' | 'corta'}> = {
  C1: {torso: '#C8102E', interior: '#FFFFFF', pantalon: '#2F3E5C', manga: 'larga'},
  C2: {torso: '#E8A317', pantalon: '#7FA6D6', manga: 'corta'},
  C3: {torso: '#6E0F23', interior: '#FFFFFF', pantalon: '#1E1E24', manga: 'larga'},
  V: {torso: '#3E7D5A', pantalon: '#4A4A4A', manga: 'larga'},
  R: {torso: '#5A6270', pantalon: '#2E3138', manga: 'larga'},
};

const SEMILLA: Record<Id, number> = {C1: 0, C2: 41, C3: 77, V: 23, R: 59};

function Brazo({lado, a, piel, ropa, manga, hold}: {lado: 1 | -1; a: Brazo; piel: string; ropa: string; manga: string; hold?: React.ReactNode}) {
  const [h, c] = a;
  const rotH = lado === -1 ? h : -h;
  const rotC = lado === -1 ? c : -c;
  return (
    <g transform={`translate(${58 * lado} 0) rotate(${rotH})`}>
      <rect x={-14} y={-6} width={28} height={98} rx={14} fill={manga === 'corta' ? piel : ropa} />
      {manga === 'corta' && <rect x={-16} y={-8} width={32} height={42} rx={14} fill={ropa} />}
      <g transform={`translate(0 88) rotate(${rotC})`}>
        <rect x={-12} y={-6} width={24} height={90} rx={12} fill={manga === 'corta' ? piel : ropa} />
        <circle cx={0} cy={86} r={15} fill={piel} />
        {hold && <g transform={`translate(0 86) rotate(${-(rotH + rotC)})`}>{hold}</g>}
      </g>
    </g>
  );
}

function PeloAtras({id, H}: {id: Id; H: number}) {
  const c = PELO[id];
  if (id === 'C1')
    return <path d={`M -78 ${H - 260} Q -86 ${H - 120} -70 ${H - 135} L 70 ${H - 135} Q 86 ${H - 120} 78 ${H - 260} Z`} fill={c} />;
  if (id === 'C2')
    return (
      <g fill={c}>
        {[[-20, -345], [8, -360], [32, -342], [0, -330], [20, -322], [-12, -318]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={H + y + 10} r={26} />
        ))}
      </g>
    );
  if (id === 'C3') return <path d={`M -76 ${H - 270} Q -84 ${H - 200} -66 ${H - 196} L 66 ${H - 196} Q 84 ${H - 200} 76 ${H - 270} Z`} fill={c} />;
  return null;
}

function PeloFrente({id, H, cap}: {id: Id; H: number; cap?: boolean}) {
  const c = PELO[id];
  const top = H - 255 - 72;
  let pelo: React.ReactNode = null;
  if (id === 'C1')
    pelo = <path d={`M -68 ${H - 250} Q -70 ${top - 10} 0 ${top - 6} Q 70 ${top - 6} 68 ${H - 250} Q 40 ${H - 300} -10 ${H - 292} Q -50 ${H - 285} -68 ${H - 250} Z`} fill={c} />;
  if (id === 'C2')
    pelo = (
      <g fill={c}>
        {[-54, -32, -10, 12, 34, 54].map((x, i) => (
          <circle key={i} cx={x} cy={top + 22 + Math.abs(x) * 0.25} r={20} />
        ))}
      </g>
    );
  if (id === 'C3')
    pelo = <path d={`M -70 ${H - 240} Q -72 ${top - 8} 0 ${top - 8} Q 72 ${top - 8} 70 ${H - 240} L 60 ${H - 286} L -60 ${H - 286} Z`} fill={c} />;
  if (id === 'V' || id === 'R')
    pelo = <path d={`M -64 ${H - 262} Q -66 ${top - 6} 0 ${top - 8} Q 66 ${top - 6} 64 ${H - 262} Q 30 ${H - 300} -64 ${H - 262} Z`} fill={c} />;
  return (
    <>
      {pelo}
      {cap && (
        <g>
          <path d={`M -68 ${H - 290} Q -66 ${top - 26} 0 ${top - 26} Q 66 ${top - 26} 68 ${H - 290} Z`} fill="#D7262E" />
          <path d={`M 10 ${H - 292} Q 70 ${H - 300} 104 ${H - 284} Q 70 ${H - 278} 10 ${H - 284} Z`} fill="#A3121C" />
          <rect x={-68} y={H - 296} width={136} height={10} rx={5} fill="#F2C318" />
        </g>
      )}
    </>
  );
}

function Cara({id, H, f, turn, look, mouth, smile, brow}: {id: Id; H: number; f: number; turn: number; look: [number, number]; mouth: number; smile: number; brow: number}) {
  const dx = turn * 14;
  const parpadeo = (f + SEMILLA[id] * 3) % 113 < 4;
  const ey = H - 262;
  const by = H - 290 - brow * 7;
  const my = H - 214;
  const w = 17 + mouth * 4;
  return (
    <g>
      <circle cx={-26 + dx} cy={H - 228} r={11} fill="#F06A6A" opacity={0.28} />
      <circle cx={26 + dx} cy={H - 228} r={11} fill="#F06A6A" opacity={0.28} />
      {[-24, 24].map((ex) => (
        <g key={ex}>
          {parpadeo ? (
            <path d={`M ${ex + dx - 11} ${ey} Q ${ex + dx} ${ey + 5} ${ex + dx + 11} ${ey}`} stroke="#2A1A12" strokeWidth={4} fill="none" strokeLinecap="round" />
          ) : (
            <>
              <ellipse cx={ex + dx} cy={ey} rx={12} ry={14} fill="#FFFFFF" />
              <circle cx={ex + dx + look[0] * 5} cy={ey + look[1] * 4 + 1} r={7.5} fill="#2A1A12" />
              <circle cx={ex + dx + look[0] * 5 + 2.5} cy={ey + look[1] * 4 - 2} r={2.4} fill="#FFFFFF" />
            </>
          )}
          <path
            d={`M ${ex + dx - 13} ${by + (ex < 0 ? brow < 0 ? -3 : 2 : brow < 0 ? 3 : 0)} Q ${ex + dx} ${by - 6} ${ex + dx + 13} ${by + (ex < 0 ? 0 : 2)}`}
            stroke={PELO[id]} strokeWidth={5} fill="none" strokeLinecap="round"
          />
        </g>
      ))}
      <path d={`M ${dx - 4} ${H - 244} Q ${dx + 4} ${H - 236} ${dx - 3} ${H - 232}`} stroke="#00000033" strokeWidth={3} fill="none" strokeLinecap="round" />
      {mouth > 0.04 ? (
        <path d={`M ${dx - w} ${my - 2} Q ${dx} ${my - 4 + smile * 2} ${dx + w} ${my - 2} Q ${dx} ${my + 6 + mouth * 22} ${dx - w} ${my - 2} Z`} fill="#7A1F2B" />
      ) : (
        <path d={`M ${dx - 16} ${my - 2} Q ${dx} ${my + 4 + smile * 12} ${dx + 16} ${my - 2}`} stroke="#7A1F2B" strokeWidth={4.5} fill="none" strokeLinecap="round" />
      )}
      {id === 'C3' && (
        <g stroke="#1A1A1A" strokeWidth={4} fill="none">
          <circle cx={-24 + dx} cy={ey} r={18} />
          <circle cx={24 + dx} cy={ey} r={18} />
          <path d={`M ${-6 + dx} ${ey - 2} L ${6 + dx} ${ey - 2}`} />
        </g>
      )}
    </g>
  );
}

export const Personaje: React.FC<PersonajeProps> = (p) => {
  const {id, f, s = 1, flip = false, legs = 'stand', look = [0, 0], mouth = 0, smile = 0.6, brow = 0, turn = 0} = p;
  const piel = PIEL[id];
  const ropa = ROPA[id];
  const sentado = legs === 'sit';
  const H = sentado ? -160 : -230;
  const fase = legs === 'walk' ? ((p.walk ?? f) / 16) * Math.PI : 0;
  const zancada = legs === 'walk' ? Math.sin(fase) * 24 : 0;
  const rebote = legs === 'walk' ? -Math.abs(Math.cos(fase)) * 8 : 0;
  const respira = osc(f, 90, 1.5, SEMILLA[id]);
  const cabeceo = (p.tilt ?? 0) + (mouth > 0 ? osc(f, 26, 2.5, SEMILLA[id]) : osc(f, 140, 1.2, SEMILLA[id]));
  const brazoBalanceo = legs === 'walk' ? Math.sin(fase) * 18 : 0;
  const aL: Brazo = p.aL ?? [8 + brazoBalanceo, 6];
  const aR: Brazo = p.aR ?? [8 - brazoBalanceo, 6];

  return (
    <g transform={`translate(${p.x} ${p.y - (p.hop ?? 0)}) scale(${(flip ? -1 : 1) * s} ${s})`}>
      <ellipse cx={0} cy={4} rx={70} ry={12} fill="#00000022" />
      <g transform={`translate(0 ${rebote}) rotate(${p.lean ?? 0} 0 ${H})`}>
        <PeloAtras id={id} H={H} />
        {/* piernas */}
        {sentado ? (
          <g fill={ropa.pantalon}>
            <rect x={-52} y={H - 6} width={48} height={40} rx={18} />
            <rect x={4} y={H - 6} width={48} height={40} rx={18} />
            <rect x={-46} y={H + 20} width={38} height={-H - 20} rx={16} />
            <rect x={8} y={H + 20} width={38} height={-H - 20} rx={16} />
            <ellipse cx={-28} cy={-4} rx={28} ry={11} fill="#2A2A2A" />
            <ellipse cx={28} cy={-4} rx={28} ry={11} fill="#2A2A2A" />
          </g>
        ) : (
          <g fill={ropa.pantalon}>
            <g transform={`rotate(${zancada} -22 ${H})`}>
              <rect x={-44} y={H - 4} width={42} height={-H - 4} rx={18} />
              <ellipse cx={-26} cy={-6} rx={28} ry={11} fill="#2A2A2A" />
            </g>
            <g transform={`rotate(${-zancada} 22 ${H})`}>
              <rect x={2} y={H - 4} width={42} height={-H - 4} rx={18} />
              <ellipse cx={26} cy={-6} rx={28} ry={11} fill="#2A2A2A" />
            </g>
          </g>
        )}
        {/* torso */}
        <g transform={`translate(0 ${respira})`}>
          <path d={`M -62 ${H - 165} Q 0 ${H - 182} 62 ${H - 165} L 54 ${H + 8} L -54 ${H + 8} Z`} fill={ropa.torso} />
          {ropa.interior && <path d={`M -20 ${H - 172} L 20 ${H - 172} L 8 ${H + 8} L -8 ${H + 8} Z`} fill={ropa.interior} />}
          {(id === 'C1' || id === 'C3') && (
            <g stroke="#00000030" strokeWidth={3} fill="none">
              <path d={`M -20 ${H - 172} L -6 ${H - 110}`} />
              <path d={`M 20 ${H - 172} L 6 ${H - 110}`} />
            </g>
          )}
          {id === 'V' && <rect x={-34} y={H - 60} width={68} height={40} rx={10} fill="#00000022" />}
          {id === 'R' && <rect x={-54} y={H - 90} width={108} height={12} fill="#E8E8E8" opacity={0.8} />}
          {p.apron && (
            <g>
              <path d={`M -40 ${H - 120} L 40 ${H - 120} L 46 ${H + 40} L -46 ${H + 40} Z`} fill="#C8102E" />
              <path d={`M -40 ${H - 120} L -26 ${H - 172} M 40 ${H - 120} L 26 ${H - 172}`} stroke="#C8102E" strokeWidth={8} />
              <rect x={-46} y={H - 30} width={92} height={10} fill="#F2C318" />
            </g>
          )}
          {/* cuello y cabeza */}
          <rect x={-17} y={H - 200} width={34} height={36} rx={10} fill={piel} />
          <g transform={`rotate(${cabeceo} 0 ${H - 190})`}>
            <circle cx={-64} cy={H - 252} r={13} fill={piel} />
            <circle cx={64} cy={H - 252} r={13} fill={piel} />
            <ellipse cx={0} cy={H - 255} rx={64} ry={72} fill={piel} />
            <PeloFrente id={id} H={H} cap={p.cap} />
            <Cara id={id} H={H} f={f} turn={turn} look={look} mouth={mouth} smile={smile} brow={brow} />
            {id === 'R' && (
              <g>
                <path d={`M -74 ${H - 230} Q -78 ${H - 345} 0 ${H - 345} Q 78 ${H - 345} 74 ${H - 230} L 60 ${H - 230} Q 58 ${H - 300} 0 ${H - 302} Q -58 ${H - 300} -60 ${H - 230} Z`} fill="#D7262E" />
              </g>
            )}
          </g>
          {/* brazos */}
          <g transform={`translate(0 ${H - 160})`}>
            <Brazo lado={-1} a={aL} piel={piel} ropa={ropa.torso} manga={ropa.manga} hold={p.holdL} />
            <Brazo lado={1} a={aR} piel={piel} ropa={ropa.torso} manga={ropa.manga} hold={p.holdR} />
          </g>
        </g>
      </g>
    </g>
  );
};
