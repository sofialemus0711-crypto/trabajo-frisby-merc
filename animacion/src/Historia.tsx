// La historia: tres amigas preparan su trabajo de mercadeo en el apartamento,
// se les antoja Frisby, analizan cómo se promociona y cómo les llega el pedido,
// proponen "Frisby nos une" y terminan compartiendo la mesa con un vecino.
import React from 'react';
import {D, at, fin, kf, prog, boca, hablante, osc, seg} from './anim';
import {Personaje, PersonajeProps} from './Personaje';
import {Fondo, Frente, PISO, Presa, Telefono, Laptop, Balde, Arepas, Vaso, Bolsa, Recibo, Afiche, Trazo, Escrito} from './Escenario';
import {Panel, Feed, Captura, PedidoListo, PaginaWeb, VideoCreador, Reto, Mapa, Reacciones} from './Pantallas';

const S = (n: number) => D.escenas[n - 1].inicio;
const E = (n: number) => D.escenas[n - 1].fin;

type Cam = {x: number; y: number; z: number};
type Ruta = [number, number, number][]; // [cuadro, x, y]

// posición sobre una ruta y si está caminando
function mov(f: number, r: Ruta) {
  const x = kf(f, r.map(([t, x]) => [t, x]), false);
  const y = kf(f, r.map(([t, , y]) => [t, y]), false);
  let caminando = false;
  for (let i = 1; i < r.length; i++)
    if (f > r[i - 1][0] && f < r[i][0] && (r[i][1] !== r[i - 1][1] || r[i][2] !== r[i - 1][2])) caminando = true;
  return {x, y, caminando};
}

function cam(f: number, k: [number, Cam][]): Cam {
  return {x: kf(f, k.map(([t, c]) => [t, c.x])), y: kf(f, k.map(([t, c]) => [t, c.y])), z: kf(f, k.map(([t, c]) => [t, c.z]))};
}

// la cara gira hacia quien está hablando
function giro(f: number, yo: string, pos: Record<string, number>): number {
  const h = hablante(f);
  if (!h || h === yo || h === 'TODAS' || pos[h] === undefined) return 0;
  return Math.sign(pos[h] - pos[yo]) * 0.8;
}

const gesto = (f: number, quien: string, base: [number, number], amp = 14, fase = 0): [number, number] =>
  boca(quien, f) > 0 ? [base[0] + osc(f, 34, amp, fase), base[1] + osc(f, 28, amp * 0.8, fase)] : base;

type Cuadro = {
  cam: Cam;
  noche: number;
  puerta?: number;
  tablero?: React.ReactNode;
  mesa?: React.ReactNode;
  mesita?: React.ReactNode;
  atras: React.ReactNode[];
  delante?: React.ReactNode[];
  mundo?: React.ReactNode; // efectos en el mundo (ondas, iconos)
  pantalla?: React.ReactNode; // paneles en espacio de pantalla
};

const P = (p: PersonajeProps) => <Personaje key={p.id + p.x} {...p} />;

// ------------------------------------------------------------------ escena 1
function escena1(f: number): Cuadro {
  const pos = {C2: 1020, C1: 1250, C3: 1480};
  const levanta = at(2);
  const vale = mov(f, [[levanta, 1250, PISO], [levanta + seg(1.6), 1580, PISO + 45]]);
  const valeSentada = f < levanta;
  const posV = {...pos, C1: vale.x};
  const ruge = f > seg(2.8) && f < at(1);
  const atenta = f >= at(1);
  const conteo = f >= at(6) ? (f >= at(7, 2.2) ? 3 : f >= at(7) ? 2 : 1) : 0;
  const brazoConteo: [number, number] = [150 + osc(f, 10, 4), conteo ? -10 : 10];
  return {
    cam: cam(f, [
      [0, {x: 1250, y: 330, z: 2.3}], [seg(3.2), {x: 1250, y: 600, z: 0.95}],
      [at(1), {x: 1130, y: 640, z: 1.35}], [at(2), {x: 1130, y: 640, z: 1.35}],
      [at(2, 1.6), {x: 1380, y: 640, z: 1.2}], [at(3), {x: 1430, y: 620, z: 1.35}],
      [at(5), {x: 1500, y: 580, z: 1.75}], [at(6), {x: 1560, y: 520, z: 2.2}],
      [at(6) + 1, {x: 1400, y: 610, z: 1.3}], [fin(7), {x: 1520, y: 560, z: 1.9}],
    ]),
    noche: 0.1,
    mesita: (
      <g>
        <g transform="translate(150 0)"><Laptop /></g>
        <rect x={-150} y={-14} width={120} height={12} rx={3} fill="#FFFFFF" transform="rotate(-6)" />
      </g>
    ),
    atras: [
      P({id: 'C2', f, x: pos.C2, y: PISO, s: 0.85, legs: 'sit', lean: atenta ? 0 : -6,
        tilt: atenta ? 0 : -8, look: ruge ? [0, 1] : [giro(f, 'C2', posV), 0], turn: giro(f, 'C2', posV),
        brow: ruge ? 1 : 0, smile: ruge ? -0.3 : boca('C2', f) ? 0.8 : 1, mouth: boca('C2', f),
        aL: ruge || (f >= at(1) && f < at(1, 1.4)) ? [18, -72] : f < at(1) ? [10, 4] : gesto(f, 'C2', [40, 60]),
        aR: ruge || (f >= at(1) && f < at(1, 1.4)) ? [18, -72] : gesto(f, 'C2', [70, 40], 18, 9)}),
      ...(valeSentada
        ? [P({id: 'C1', f, x: 1250, y: PISO, s: 0.85, legs: 'sit', turn: atenta ? -0.8 : 0, look: atenta ? [-1, 0] : [0, 1],
            smile: atenta ? 1 : 0.4, aR: [24, -96], aL: [12, 6], holdR: <rect x={-30} y={-46} width={60} height={70} fill="#FFFFFF" stroke="#DDD" strokeWidth={2} />})]
        : []),
      P({id: 'C3', f, x: pos.C3, y: PISO, s: 0.85, legs: 'sit',
        turn: f < at(1) ? 0.4 : giro(f, 'C3', posV), look: f < at(1) ? [0.6, 1] : [giro(f, 'C3', posV), 0],
        smile: f >= at(1) && f < at(2) ? 1 : 0.6, lean: f >= at(5) && f < at(6) ? 7 : 0,
        aL: f < at(1) ? [14, -58 + osc(f, 6, 6)] : [10, 6], aR: f < at(1) ? [14, -58 + osc(f, 6, 6, 3)] : [10, 6]}),
    ],
    delante: valeSentada
      ? []
      : [P({id: 'C1', f, x: vale.x, y: vale.y, s: 0.92, legs: vale.caminando ? 'walk' : 'stand',
          turn: vale.caminando ? 0.6 : f >= at(5) && f < at(6) ? -0.7 : 0, look: f >= at(5) && f < at(6) ? [-1, 0] : [0, 0],
          mouth: boca('C1', f), smile: 1, brow: f >= at(5) && f < at(6) ? 1 : 0, lean: f >= at(5) && f < at(6) ? -6 : 0,
          aL: f >= at(3) && f < at(5) ? [30, 40] : vale.caminando ? undefined : gesto(f, 'C1', [55, 30]),
          aR: f >= at(3) && f < at(5) ? [70, 85] : f >= at(5) && f < at(6) ? [25, -125] : conteo ? brazoConteo : vale.caminando ? undefined : gesto(f, 'C1', [55, 30], 14, 7),
          holdR: f >= at(3) && f < at(5) ? <Telefono pantalla="#F2C318" s={1.1} /> : conteo ? <DedosConteo n={conteo} /> : undefined})],
    mundo: ruge ? <Rugido f={f} x={pos.C2} y={PISO - 150} /> : null,
    pantalla: (
      <>
        {f < seg(4.5) && <Titulo f={f} />}
        <Panel f={f} desde={at(3)} hasta={at(4)} x={230} y={160} w={400} h={720}>
          <rect width={400} height={720} fill="#F2CB25" />
          <Captura src="logo_mascota.jpg" x={0} y={120} w={400} h={400} fit="meet" />
        </Panel>
        <Panel f={f} desde={at(4)} hasta={fin(4)} x={230} y={160} w={400} h={720}>
          <Captura src="menu_combos.jpg" x={-300} y={0} w={1000} h={720} />
        </Panel>
      </>
    ),
  };
}

const DedosConteo: React.FC<{n: number}> = ({n}) => (
  <g>
    {Array.from({length: n}).map((_, i) => (
      <rect key={i} x={-14 + i * 10} y={-34} width={8} height={26} rx={4} fill="#E8B48F" />
    ))}
  </g>
);

const Rugido: React.FC<{f: number; x: number; y: number}> = ({f, x, y}) => (
  <g transform={`translate(${x + 70} ${y})`} opacity={0.6 + osc(f, 8, 0.4)}>
    {[0, 1, 2].map((i) => (
      <path key={i} d={`M ${i * 22} ${-20 + i * 4} q 8 -10 0 -20 q -8 -10 0 -20`} stroke="#8A5A2B" strokeWidth={5} fill="none" strokeLinecap="round" transform={`translate(${osc(f, 6, 3, i * 4)} 0)`} />
    ))}
  </g>
);

const Titulo: React.FC<{f: number}> = ({f}) => {
  const o = kf(f, [[seg(0.5), 0], [seg(1.2), 1], [seg(3.6), 1], [seg(4.4), 0]]);
  return (
    <g opacity={o}>
      <text x={960} y={980} textAnchor="middle" fontFamily="'Baloo 2', sans-serif" fontWeight={800} fontSize={70} fill="#FFFFFF" stroke="#7A1020" strokeWidth={10} paintOrder="stroke">Frisby: El sabor de compartir</text>
    </g>
  );
};

// ------------------------------------------------------------------ escena 2
function escena2(f: number): Cuadro {
  const pos = {C2: 1030, C1: 1250, C3: 1470};
  const s2 = S(2);
  const vale = mov(f, [[s2, 1580, PISO + 45], [s2 + seg(1.5), 1250, PISO + 20]]);
  const valeSentada = f >= s2 + seg(1.6);
  const camiTelefono = (f >= at(11) && f < at(14)) || f >= at(18);
  const valeTelefono = f >= at(8) && f < at(11);
  const tap = f >= at(18) && f < at(18, 3) ? osc(f, 10, 10) : 0;
  const fiesta = f >= at(19);
  const iconos = [at(16, 2.0), at(16, 3.6), at(17, 0.6), at(17, 2.6)];
  const telefono = <Telefono pantalla="#C8102E" s={1.1} />;
  return {
    cam: cam(f, [[s2, {x: 1400, y: 600, z: 1.2}], [s2 + seg(1.8), {x: 1430, y: 620, z: 1.3}], [at(16), {x: 1430, y: 620, z: 1.3}], [at(16) + 1, {x: 1250, y: 560, z: 1.45}], [at(18), {x: 1250, y: 560, z: 1.45}], [at(18) + 1, {x: 1430, y: 620, z: 1.3}]]),
    noche: 0.15,
    mesita: <g transform="translate(150 0)"><Laptop /></g>,
    atras: [
      P({id: 'C2', f, x: pos.C2, y: PISO, s: 0.85, legs: 'sit', mouth: boca('C2', f), turn: camiTelefono ? 0.5 : giro(f, 'C2', pos),
        look: camiTelefono && !boca('C2', f) ? [0.6, 1] : [giro(f, 'C2', pos), 0], smile: 1, hop: fiesta ? Math.abs(osc(f, 16, 18)) : 0,
        brow: f >= at(11) && f < at(11, 1.2) ? 1 : 0,
        aR: fiesta ? [150, 10 + osc(f, 8, 15)] : f >= at(12) && f < at(14) ? [16, -118] : camiTelefono ? [34, -78 + tap] : gesto(f, 'C2', [14, 6]),
        aL: fiesta ? [150, 10 - osc(f, 8, 15)] : f >= at(12) && f < at(14) ? [40, -70] : gesto(f, 'C2', [14, 6], 12, 5),
        holdR: camiTelefono && !(f >= at(12) && f < at(14)) && !fiesta ? telefono : undefined,
        holdL: f >= at(12) && f < at(14) ? telefono : undefined}),
      ...(valeSentada
        ? [P({id: 'C1', f, x: pos.C1, y: PISO, s: 0.85, legs: 'sit', mouth: boca('C1', f), smile: 1,
            turn: valeTelefono ? 0.3 : giro(f, 'C1', pos), look: valeTelefono ? [0.3, 1] : [giro(f, 'C1', pos), 0],
            aR: f >= at(16) && f < at(18) ? [150, 0] : valeTelefono ? [30, -80] : [12, 6],
            aL: f >= at(16) && f < at(18) ? gesto(f, 'C1', [40, 40]) : [12, 6],
            holdR: valeTelefono ? telefono : f >= at(16) && f < at(18) ? <DedosConteo n={Math.min(4, 1 + iconos.filter((t) => f >= t).length)} /> : undefined})]
        : []),
      P({id: 'C3', f, x: pos.C3, y: PISO, s: 0.85, legs: 'sit', mouth: boca('C3', f), smile: fiesta ? 1 : 0.7,
        turn: f >= at(14) && f < at(16) ? -0.6 : giro(f, 'C3', pos), look: [giro(f, 'C3', pos), 0],
        aL: f >= at(14) && f < at(16) ? gesto(f, 'C3', [70, 40]) : fiesta ? [120, 30] : [12, 6],
        aR: f >= at(14) && f < at(16) ? [40, -60] : fiesta ? [120, 30] : [12, 6]}),
    ],
    delante: valeSentada ? [] : [P({id: 'C1', f, x: vale.x, y: vale.y, s: 0.9, legs: 'walk', turn: -0.6, smile: 1})],
    mundo: (
      <g>
        {f >= at(16) && f < at(18) &&
          iconos.map((t, i) => f >= t && <IconoIdea key={i} tipo={i} f={f - t} x={1060 + i * 150} y={360} />)}
      </g>
    ),
    pantalla: (
      <>
        <Panel f={f} desde={at(9)} hasta={fin(10)} x={1300} y={130} w={440} h={780}>
          <Feed f={f} desde={at(9)} w={440} h={780} />
        </Panel>
        <Panel f={f} desde={at(11)} hasta={at(12)} x={1300} y={130} w={440} h={780}>
          <Captura src="menu_promociones.jpg" x={-420} y={86} w={1280} h={420} fit="meet" />
          <Captura src="menu_promociones.jpg" x={-1000} y={420} w={1700} h={360} fit="slice" />
          <rect x={0} y={0} width={440} height={86} fill="#F36E00" />
          <text x={220} y={60} textAnchor="middle" fontFamily="'Baloo 2', sans-serif" fontWeight={800} fontSize={34} fill="#FFF">Promociones</text>
        </Panel>
        <Panel f={f} desde={at(12)} hasta={fin(13)} x={1300} y={130} w={440} h={780}>
          <Captura src="menu_solidario.jpg" x={0} y={90} w={440} h={600} fit="meet" />
          <Reacciones f={f} desde={at(12, 0.8)} x={380} y={720} />
        </Panel>
        <Panel f={f} desde={at(14)} hasta={fin(15)} x={1180} y={220} w={640} h={420} tipo="portatil">
          <PaginaWeb f={f} desde={at(14)} w={640} h={420} />
        </Panel>
        <Panel f={f} desde={at(18)} hasta={fin(19)} x={1300} y={130} w={440} h={780}>
          {f < at(18, 2.8) ? (
            <g transform={`translate(0 ${-Math.max(0, f - at(18)) * 2})`}>
              <Captura src="menu_combos.jpg" x={-560} y={90} w={1560} h={440} fit="meet" />
              <Captura src="menu_pollo_apanado.jpg" x={-560} y={520} w={1560} h={440} fit="meet" />
            </g>
          ) : (
            <PedidoListo f={f} desde={at(18, 2.8)} w={440} h={780} />
          )}
        </Panel>
      </>
    ),
  };
}

// iconos de las funciones de la promoción: informar, interés, compra, relación
const IconoIdea: React.FC<{tipo: number; f: number; x: number; y: number}> = ({tipo, f, x, y}) => {
  const e = Math.min(1, f / 10);
  const flota = osc(f, 50, 8);
  return (
    <g transform={`translate(${x} ${y + flota}) scale(${0.6 + 0.4 * e})`} opacity={e}>
      <circle r={52} fill="#FFFFFF" stroke="#C8102E" strokeWidth={6} />
      {tipo === 0 && <text y={22} textAnchor="middle" fontFamily="Georgia" fontWeight={800} fontSize={64} fill="#C8102E">i</text>}
      {tipo === 1 && (
        <g>
          <ellipse rx={32} ry={20} fill="none" stroke="#C8102E" strokeWidth={7} />
          <circle r={10} fill="#C8102E" />
        </g>
      )}
      {tipo === 2 && <path d="M -30 -16 L 26 -16 L 18 12 L -22 12 Z M -22 24 a 6 6 0 1 0 1 0 M 14 24 a 6 6 0 1 0 1 0 M -38 -26 L -30 -16" stroke="#C8102E" strokeWidth={6} fill="none" strokeLinejoin="round" />}
      {tipo === 3 && <path d="M0 26 C -40 -2 -30 -36 0 -18 C 30 -36 40 -2 0 26 Z" fill="#C8102E" />}
    </g>
  );
};

// ------------------------------------------------------------------ escena 3
function escena3(f: number): Cuadro {
  const s3 = S(3);
  const pos = {C2: 1030, C1: 1250, C3: 2330};
  const dani = mov(f, [[s3, 1470, PISO], [s3 + seg(0.6), 1470, PISO], [s3 + seg(2.4), 2330, PISO + 10]]);
  const daniSentada = f < s3 + seg(0.6);
  const dibuja = (a: number, b: number) => prog(f, a, b);
  const pizarra = f < at(24, 0.6);
  const borrado = 1 - prog(f, at(24), at(24, 0.6));
  const escribiendo =
    (f > at(20, 0.4) && f < at(21, 3)) || (f > at(22, 0.2) && f < at(23, 3)) || (f > at(24, 0.8) && f < fin(25, -0.5));
  const reaccion = (f >= at(22) && f < at(22, 1.6)) || (f >= at(25, 2) && f < at(25, 3.6));
  const tablero = (
    <g>
      {pizarra && (
        <g opacity={borrado}>
          <Escrito x={105} y={42} p={dibuja(at(20, 0.4), at(20, 1.6))}>ATRACCIÓN</Escrito>
          <Trazo d="M 60 90 L 60 150 Q 60 190 100 190 Q 140 190 140 150 L 140 90" p={dibuja(at(20, 1.6), at(20, 3.2))} color="#C8102E" w={16} largo={330} />
          <Trazo d="M 52 92 L 68 92 M 132 92 L 148 92" p={dibuja(at(20, 3.2), at(20, 3.6))} color="#555" w={16} largo={40} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <Trazo d={`M ${50 + i * 50} 280 m -10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0 M ${50 + i * 50} 290 L ${50 + i * 50} 300`} p={dibuja(at(21, i * 0.6), at(21, 0.6 + i * 0.6))} largo={120} />
              <Trazo d={`M ${50 + i * 50} 262 Q ${70 + i * 30} 230 100 205`} p={dibuja(at(21, 2 + i * 0.4), at(21, 2.6 + i * 0.4))} color="#C8102E" w={5} largo={120} />
            </g>
          ))}
          <Escrito x={310} y={42} p={dibuja(at(22, 0.2), at(22, 1.4))}>EMPUJE</Escrito>
          <Trazo d="M 260 150 L 360 150 L 360 230 L 260 230 Z M 250 150 L 310 105 L 370 150" p={dibuja(at(22, 1.2), at(23, 0.8))} largo={560} />
          <Trazo d="M 270 125 L 350 125" p={dibuja(at(23, 0.6), at(23, 1))} color="#C8102E" w={12} largo={90} />
          <Trazo d="M 222 290 L 300 250 M 300 250 L 280 248 M 300 250 L 292 268" p={dibuja(at(23, 1.2), at(23, 2.6))} color="#C8102E" w={8} largo={200} />
          <Trazo d="M 212 300 m -10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0" p={dibuja(at(23, 2.6), at(23, 3.2))} largo={70} />
        </g>
      )}
      {!pizarra && (
        <g>
          <Escrito x={208} y={44} p={dibuja(at(24, 0.8), at(24, 2.6))} size={34}>PRESUPUESTO</Escrito>
          {['Objetivos', 'Actividades', 'Costos'].map((t, i) => {
            const a = at(25, i * 2.1);
            return (
              <g key={t} transform={`translate(${20 + i * 132} 80)`}>
                <Trazo d="M 0 0 L 116 0 L 116 160 L 0 160 Z" p={dibuja(a, a + seg(0.8))} largo={560} />
                <Escrito x={58} y={46} p={dibuja(a, a + seg(0.5))} size={34} color="#C8102E">{String(i + 1)}</Escrito>
                {i === 0 && <Trazo d="M 58 90 m -26 0 a 26 26 0 1 0 52 0 a 26 26 0 1 0 -52 0 M 58 90 m -10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0" p={dibuja(a + seg(0.6), a + seg(1.4))} color="#C8102E" w={5} largo={260} />}
                {i === 1 && <Trazo d="M 30 70 L 40 80 L 56 62 M 30 100 L 40 110 L 56 92 M 66 72 L 92 72 M 66 102 L 92 102" p={dibuja(a + seg(0.6), a + seg(1.4))} color="#C8102E" w={5} largo={200} />}
                {i === 2 && <Trazo d="M 58 90 m -28 0 a 28 28 0 1 0 56 0 a 28 28 0 1 0 -56 0 M 58 74 L 58 106 M 48 82 Q 58 74 68 82" p={dibuja(a + seg(0.6), a + seg(1.4))} color="#C8102E" w={5} largo={260} />}
                <Escrito x={58} y={150} p={dibuja(a + seg(0.8), a + seg(1.6))} size={20}>{t}</Escrito>
              </g>
            );
          })}
        </g>
      )}
    </g>
  );
  const marcador = <rect x={-6} y={-34} width={12} height={40} rx={4} fill="#1F4FA3" />;
  return {
    cam: cam(f, [
      [s3, {x: 1430, y: 620, z: 1.3}], [s3 + seg(2.4), {x: 2080, y: 600, z: 1.38}],
      [at(22), {x: 2080, y: 600, z: 1.38}], [at(22) + 1, {x: 1140, y: 640, z: 1.6}],
      [at(22, 1.6), {x: 1140, y: 640, z: 1.6}], [at(22, 1.6) + 1, {x: 2080, y: 600, z: 1.38}],
      [at(25, 2), {x: 2080, y: 600, z: 1.38}], [at(25, 2) + 1, {x: 1140, y: 640, z: 1.6}],
      [at(25, 3.6), {x: 1140, y: 640, z: 1.6}], [at(25, 3.6) + 1, {x: 2080, y: 600, z: 1.38}],
      [E(3), {x: 2000, y: 600, z: 1.25}],
    ]),
    noche: 0.2,
    tablero,
    mesita: <g transform="translate(150 0)"><Laptop abierto={0.2} /></g>,
    atras: [
      P({id: 'C2', f, x: pos.C2, y: PISO, s: 0.85, legs: 'sit', turn: 0.8, look: [1, reaccion ? 0 : -0.3], smile: reaccion ? 1 : 0.6,
        tilt: reaccion ? osc(f, 14, 6) : 0, aR: [22, -88 + (escribiendo ? osc(f, 6, 6) : 0)], aL: [20, -70],
        holdR: <rect x={-4} y={-30} width={8} height={36} fill="#E8A317" />, holdL: <rect x={-34} y={-50} width={68} height={56} fill="#FFFFFF" />}),
      P({id: 'C1', f, x: pos.C1, y: PISO, s: 0.85, legs: 'sit', turn: 0.8, look: [1, 0], smile: reaccion ? 1 : 0.7, tilt: reaccion ? osc(f, 14, 6, 5) : 0, aL: [12, 6], aR: reaccion ? [60, 90] : [12, 6]}),
      ...(daniSentada ? [P({id: 'C3', f, x: 1470, y: PISO, s: 0.85, legs: 'sit', turn: 0.3})] : []),
    ],
    delante: daniSentada
      ? []
      : [P({id: 'C3', f, x: dani.x, y: dani.y, s: 0.9, legs: dani.caminando ? 'walk' : 'stand', mouth: boca('C3', f),
          turn: dani.caminando ? 0.6 : escribiendo ? -0.9 : -0.2, look: escribiendo ? [-1, -0.6] : [0, 0], smile: 0.8,
          aL: escribiendo ? [118 + osc(f, 9, 7), 18 + osc(f, 7, 9)] : dani.caminando ? undefined : gesto(f, 'C3', [40, 50]),
          aR: dani.caminando ? undefined : gesto(f, 'C3', [20, 30], 10, 6), holdL: !dani.caminando ? marcador : undefined})],
  };
}

// ------------------------------------------------------------------ escena 4
function escena4(f: number): Cuadro {
  const s4 = S(4);
  const pos = {C2: 400, C1: 760, C3: 1020};
  const gorra = f >= s4 + seg(1.3);
  const vale = mov(f, [[s4, 1250, PISO + 40], [s4 + seg(2.6), 760, PISO + 40]]);
  const dani = mov(f, [[at(28, -0.2), 1250, PISO + 60], [at(28, 1.6), 1020, PISO + 60]]);
  const filma = f >= at(28, 1.6);
  const prueba = f >= at(28, 2);
  const mordisco = prueba && (f - at(28, 2)) % 90 > 40 && (f - at(28, 2)) % 90 < 60;
  return {
    cam: cam(f, [[s4, {x: 620, y: 600, z: 1.1}], [at(26), {x: 560, y: 560, z: 1.4}], [at(28), {x: 560, y: 560, z: 1.4}], [at(28, 1.8), {x: 640, y: 600, z: 1.2}], [E(4), {x: 660, y: 600, z: 1.22}]]),
    noche: 0.25,
    atras: [
      P({id: 'C2', f, x: pos.C2, y: PISO - 40, s: 0.85, cap: gorra, apron: true, mouth: boca('C2', f), smile: 1,
        turn: f >= at(26) && f < at(28) ? (osc(f, 120, 1) > 0 ? -0.8 : 0.6) : filma ? 0.6 : 0.3,
        look: f >= at(26) && f < at(28) ? [osc(f, 120, 1) > 0 ? -1 : 1, -0.4] : [0.6, 0],
        aR: !gorra ? [kf(f, [[s4, 20], [s4 + seg(1), 160]]), 30] : f >= at(26) && f < at(28) ? gesto(f, 'C2', [120, 20], 8) : prueba ? (mordisco ? [25, -138] : [40, -110]) : [12, 6],
        aL: f >= at(26) && f < at(28) ? [150, -10] : prueba ? [95, 95] : [12, 6],
        holdR: !gorra ? <path d="M -30 0 Q -28 -36 0 -36 Q 28 -36 30 0 Z" fill="#D7262E" /> : prueba ? <Presa s={1.1} /> : undefined}),
    ],
    delante: [
      P({id: 'C1', f, x: vale.x, y: vale.y, s: 0.92, legs: vale.caminando ? 'walk' : 'stand', turn: -0.8, look: [-1, f >= at(26) && f < at(28) ? -0.4 : 0],
        smile: 0.9, aL: vale.caminando ? undefined : f >= at(26, 1) && f < at(27, 2) ? [110, 30] : [10, 6], aR: vale.caminando ? undefined : [10, 6]}),
      ...(f >= at(28, -0.2)
        ? [P({id: 'C3', f, x: dani.x, y: dani.y, s: 0.95, legs: dani.caminando ? 'walk' : 'stand', mouth: boca('C3', f), smile: 1,
            turn: filma && boca('C3', f) && osc(f, 160, 1) > 0.3 ? 0 : -0.8, look: [-1, 0],
            aL: filma ? [85, 70] : undefined, aR: filma ? [70, 80] : undefined,
            holdL: filma ? <g transform="rotate(90)"><Telefono pantalla="#2C2C34" /></g> : undefined})]
        : []),
    ],
    mundo: <Meson />,
    pantalla: (
      <Panel f={f} desde={at(28, 1.8)} hasta={fin(29)} x={1300} y={150} w={460} h={760}>
        <VideoCreador f={f} desde={at(28, 1.8)} w={460} h={760} />
      </Panel>
    ),
  };
}

// frente del mesón de la cocina (tapa las piernas de Cami)
const Meson: React.FC = () => (
  <g>
    <rect x={100} y={640} width={580} height={28} rx={6} fill="#EAD7B5" />
    <rect x={116} y={668} width={548} height={PISO - 668} fill="#8C2F1E" />
    {[0, 1, 2].map((i) => <rect key={i} x={132 + i * 178} y={690} width={160} height={PISO - 720} rx={6} fill="#9C3A26" />)}
    <g transform="translate(560 640)"><Vaso s={0.8} /></g>
  </g>
);

// ------------------------------------------------------------------ escena 5
function escena5(f: number): Cuadro {
  const s5 = S(5);
  const pos = {C2: 980, C1: 1180, C3: 1380};
  const llega = (a: number, b: number) => prog(f, a, b);
  const t = {
    directo: llega(at(31, 0.3), at(31, 4)),
    web: llega(at(32), at(32, 1)),
    indirecto: llega(at(33), fin(33)),
    intensiva: llega(at(34, 1.2), at(34, 2.6)),
    selectiva: llega(at(35), at(35, 1.4)),
    exclusiva: llega(at(35, 3.8), at(35, 5)),
    propuesta: llega(at(36), at(36, 1.5)),
    llegada: llega(at(37), fin(37, -0.8)),
  };
  if (f >= at(36)) {
    t.selectiva = 0;
    t.exclusiva = 0;
    t.intensiva = 0;
  }
  const señala = boca('C1', f) > 0 || (f > at(30) && f < fin(37));
  return {
    cam: cam(f, [[s5, {x: 1180, y: 640, z: 1.2}], [at(30), {x: 1420, y: 640, z: 1.3}]]),
    noche: 0.35,
    mesita: <g transform="translate(150 0)"><Laptop abierto={0.2} /></g>,
    atras: [],
    delante: [
      P({id: 'C2', f, x: pos.C2, y: PISO + 90, s: 0.95, smile: 0.9, turn: 0.5, look: [1, 0.4], aR: [36, -86], holdR: <Telefono pantalla="#C8102E" s={1.1} />,
        tilt: t.llegada > 0.95 ? osc(f, 10, 6) : 0, hop: t.llegada > 0.97 ? Math.abs(osc(f, 14, 12)) : 0}),
      P({id: 'C3', f, x: pos.C3, y: PISO + 90, s: 0.95, smile: 0.8, turn: -0.3, look: [-0.5, 0.4], aL: [10, 6], aR: [24, -60]}),
      P({id: 'C1', f, x: pos.C1, y: PISO + 110, s: 0.97, mouth: boca('C1', f), smile: 1, turn: osc(f, 150, 1) > 0.2 ? 0.7 : 0, look: [0.8, 0],
        aR: señala ? [100 + osc(f, 30, 8), 20] : [10, 6], aL: gesto(f, 'C1', [30, 50], 10, 4)}),
    ],
    pantalla: (
      <Panel f={f} desde={at(30, 1)} hasta={E(5) + 5} x={1140} y={120} w={700} h={820}>
        <Mapa f={f} w={700} h={820} t={t} />
      </Panel>
    ),
  };
}

// ------------------------------------------------------------------ escena 6
function escena6(f: number): Cuadro {
  const s6 = S(6);
  const timbre = f >= s6 + seg(0.2) && f < s6 + seg(1.6);
  const dani = mov(f, [[s6 + seg(0.4), 2620, PISO + 40], [s6 + seg(2.0), 2900, PISO + 40]]);
  const puerta = kf(f, [[s6 + seg(1.9), 0], [s6 + seg(2.6), 1], [at(41, 2.4), 1], [at(41, 3.2), 0.0]]);
  const entrega = f >= at(38);
  const rider = mov(f, [[at(41, 0.6), 3110, PISO - 5], [at(41, 2.4), 3330, PISO - 5]]);
  const amigas = mov(f, [[at(41, 0.5), 2380, PISO + 50], [at(41, 2.6), 2640, PISO + 50]]);
  const pos = {C3: 2900, R: 3110};
  return {
    cam: cam(f, [[s6, {x: 2860, y: 600, z: 1.25}], [at(38), {x: 2950, y: 580, z: 1.45}], [at(40), {x: 2900, y: 580, z: 1.5}], [at(41), {x: 2800, y: 600, z: 1.25}]]),
    noche: 0.45,
    puerta,
    atras: [
      ...(f < at(41, 2.4) && puerta > 0.3
        ? [P({id: 'R', f, x: rider.x, y: rider.y, s: 0.88, legs: rider.caminando ? 'walk' : 'stand', smile: 0.9, turn: -0.6, look: [-1, 0],
            aR: !entrega ? [40, 60] : f >= at(39) && f < at(40) ? [30, 80] : f >= at(41) && f < at(41, 0.8) ? [150, 10 + osc(f, 6, 20)] : [10, 6],
            holdR: !entrega ? <Bolsa /> : f >= at(39) && f < at(40) ? <Telefono pantalla="#2FA84F" s={0.8} /> : undefined})]
        : []),
    ],
    delante: [
      P({id: 'C3', f, x: dani.x, y: dani.y, s: 0.95, legs: dani.caminando ? 'walk' : 'stand', mouth: boca('C3', f), smile: 0.9,
        turn: f >= at(41, 1.2) ? -0.3 : 0.7, look: f >= at(40) && f < at(40, 3) ? [0.3, 1] : [0.8, 0],
        aR: entrega ? (f >= at(40) && f < at(40, 3) ? [40, 70] : [30, 60]) : timbre ? [10, 6] : undefined,
        aL: f >= at(38, 2) && f < at(39) ? [40, 92] : f >= at(39) && f < at(40) ? [45, 85] : f >= at(41, 1.2) ? [150, 30] : entrega ? gesto(f, 'C3', [30, 40]) : undefined,
        holdR: entrega ? <Bolsa vapor={f >= at(40) ? 1 : 0} f={f} /> : undefined,
        holdL: f >= at(38, 2) && f < at(39) ? <Recibo /> : f >= at(39) && f < at(40) ? <Telefono pantalla="#2FA84F" s={0.8} /> : undefined}),
      ...(f >= at(41, 0.5)
        ? [P({id: 'C1', f, x: amigas.x, y: amigas.y, s: 0.95, legs: amigas.caminando ? 'walk' : 'stand', smile: 1, turn: 0.7}),
            P({id: 'C2', f, x: amigas.x - 170, y: amigas.y + 10, s: 0.95, legs: amigas.caminando ? 'walk' : 'stand', smile: 1, turn: 0.7, hop: amigas.caminando ? 0 : Math.abs(osc(f, 16, 10))})]
        : []),
    ],
    mundo: (
      <g>
        {timbre && <Ondas f={f} x={2980} y={560} />}
        {f >= at(40, 1) && f < at(40, 4) && <Reloj f={f - at(40, 1)} x={dani.x + 30} y={dani.y - 560} />}
        {f >= at(41, 1.2) && <Visto f={f - at(41, 1.2)} x={dani.x - 150} y={dani.y - 590} />}
      </g>
    ),
  };
}

const Ondas: React.FC<{f: number; x: number; y: number}> = ({f, x, y}) => (
  <g transform={`translate(${x} ${y})`}>
    {[0, 1, 2].map((i) => (
      <path key={i} d={`M ${-30 - i * 22} -30 q -14 30 0 60`} stroke="#F2C318" strokeWidth={7} fill="none" strokeLinecap="round" opacity={0.4 + osc(f, 10, 0.6, i * 3)} />
    ))}
  </g>
);

const Reloj: React.FC<{f: number; x: number; y: number}> = ({f, x, y}) => (
  <g transform={`translate(${x} ${y}) scale(${Math.min(1, f / 8)})`}>
    <circle r={40} fill="#FFFFFF" stroke="#2FA84F" strokeWidth={7} />
    <line x1={0} y1={0} x2={0} y2={-26} stroke="#333" strokeWidth={6} strokeLinecap="round" />
    <line x1={0} y1={0} x2={18 * Math.cos(f / 6)} y2={18 * Math.sin(f / 6)} stroke="#333" strokeWidth={5} strokeLinecap="round" />
  </g>
);

const Visto: React.FC<{f: number; x: number; y: number}> = ({f, x, y}) => (
  <g transform={`translate(${x} ${y}) scale(${Math.min(1, f / 8)})`}>
    <circle r={42} fill="#2FA84F" />
    <path d="M -18 0 L -4 14 L 20 -14" stroke="#FFFFFF" strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

// ------------------------------------------------------------------ escena 7
function escena7(f: number): Cuadro {
  const s7 = S(7);
  const pos: Record<string, number> = {C2: 2460, C1: 2640, C3: 2820, V: 3010};
  const yb = PISO - 45;
  const k52 = at(52, -9);
  const t52 = (s: number) => k52 + seg(s);
  const balde = f >= s7 + seg(1.3);
  const arepas = f >= s7 + seg(1.6);
  // Cami va a la puerta, invita al vecino y vuelven a la mesa
  const cami = mov(f, [[t52(2.5), 2460, yb], [t52(3.2), 2960, yb + 80], [t52(4.4), 2960, yb + 80], [t52(5.6), 2960, yb + 80], [t52(7.4), 2460, yb]]);
  const vecino = mov(f, [[t52(5.6), 3110, PISO - 5], [t52(7.6), 3010, PISO + 20]]);
  const puerta = kf(f, [[t52(0.6), 0], [t52(1.4), 0.7], [t52(7), 0.7], [t52(8), 0]]);
  const vecinoVisible = f >= t52(1.2);
  const vecinoDentro = f >= t52(5.6);
  const brindis = f >= at(52);
  const selfie = f >= at(45) && f < at(47);
  const flash = f >= at(45, 2.4) && f < at(45, 2.8) ? 1 - prog(f, at(45, 2.4), at(45, 2.8)) : 0;
  const banner = prog(f, at(43, 0.2), at(43, 1.6));
  const vaso = <Vaso s={0.9} />;
  const camiProps: PersonajeProps = {
    id: 'C2', f, x: cami.x, y: cami.y, s: 0.85, legs: cami.caminando ? 'walk' : 'stand', mouth: boca('C2', f), smile: 1,
    turn: f >= t52(1.4) && f < t52(7.4) ? (cami.caminando && f > t52(5.6) ? -0.7 : 0.8) : giro(f, 'C2', pos), look: [f >= t52(1.4) && f < t52(5.6) ? 1 : giro(f, 'C2', pos), 0],
    brow: f >= t52(1.4) && f < t52(2.5) ? 1 : 0,
    aR: brindis ? [150, 20] : selfie ? [150, 0] : f >= at(47) && f < at(48) ? [70, 70] : f >= t52(4.4) && f < t52(5.4) ? [80, 20] : f < s7 + seg(1.3) ? [40, 60] : cami.caminando ? undefined : gesto(f, 'C2', [14, 6]),
    aL: brindis ? [12, 6] : cami.caminando ? undefined : gesto(f, 'C2', [14, 6], 10, 5),
    holdR: brindis ? vaso : selfie ? <Telefono pantalla="#C8102E" s={1.1} /> : f >= at(47) && f < at(48) ? <g><Balde s={0.55} /><Estrella x={50} y={-70} /></g> : f >= t52(2.5) && f < t52(5.4) ? <Presa s={0.9} /> : f < s7 + seg(1.3) ? <Balde s={0.55} /> : undefined,
  };
  const enMesa = (x: number) => !(f >= t52(2.5) && f < t52(7.4)) || x !== cami.x;
  return {
    cam: cam(f, [
      [s7, {x: 2640, y: 600, z: 1.3}], [at(45), {x: 2640, y: 600, z: 1.3}], [at(45) + 1, {x: 2860, y: 600, z: 1.3}],
      [fin(51), {x: 2860, y: 600, z: 1.3}], [fin(51) + 1, {x: 2800, y: 600, z: 1.15}], [at(52), {x: 2760, y: 600, z: 1.2}], [E(7), {x: 2720, y: 590, z: 1.35}],
    ]),
    noche: 0.55,
    puerta,
    mesa: (
      <g>
        {balde && <g transform="translate(-60 0)"><Balde s={0.85} /></g>}
        {arepas && <g transform="translate(130 -6)"><Arepas /></g>}
        {[-230, 240].map((x) => <g key={x} transform={`translate(${x} 0)`}><Vaso /></g>)}
        {f >= at(49) && f < fin(51) && <g transform="translate(-200 -10)"><Telefono pantalla="#C8102E" s={0.9} /></g>}
      </g>
    ),
    atras: [
      ...(enMesa(cami.x) && !(cami.caminando || (f >= t52(3.2) && f < t52(5.6))) ? [P(camiProps)] : []),
      P({id: 'C1', f, x: pos.C1, y: yb, s: 0.85, mouth: boca('C1', f), smile: 1, turn: giro(f, 'C1', pos), look: [giro(f, 'C1', pos), 0],
        hop: f >= at(42) && f < at(42, 0.8) ? Math.abs(osc(f, 12, 16)) : 0,
        aL: brindis ? [12, 6] : f >= at(44) && f < at(45) ? [80, 10] : f >= at(42) && f < at(43) ? [120, 20] : f >= at(43) && f < at(44) ? [150, -20] : selfie ? [60, 40] : gesto(f, 'C1', [12, 6]),
        aR: brindis ? [150, 20] : f >= at(44) && f < at(45) ? [80, 10] : f >= at(42) && f < at(43) ? [120, 20] : selfie ? [60, 40] : gesto(f, 'C1', [30, 40], 14, 6),
        holdR: brindis ? vaso : undefined}),
      P({id: 'C3', f, x: pos.C3, y: yb, s: 0.85, mouth: boca('C3', f), smile: 1, turn: giro(f, 'C3', pos), look: [giro(f, 'C3', pos), 0],
        aL: selfie ? [150, -20] : f >= at(48) && f < at(49) ? [150, 10] : f < s7 + seg(1.6) ? [40, 60] : f >= t52(7.6) && f < at(52) ? [70, 40] : brindis ? [12, 6] : gesto(f, 'C3', [12, 6]),
        aR: brindis ? [150, 20] : f >= at(48) && f < at(49) ? [100, 30] : f >= at(51) && f < fin(51) ? [90, 100] : gesto(f, 'C3', [30, 40], 12, 3),
        holdL: f < s7 + seg(1.6) ? <g transform="scale(0.5)"><Arepas /></g> : undefined,
        holdR: brindis ? vaso : undefined}),
      ...(vecinoVisible && !vecinoDentro
        ? [P({id: 'V', f, x: 3110, y: PISO - 5, s: 0.85, smile: f >= t52(4.6) ? 1 : -0.5, turn: -0.5, look: [-1, f < t52(4.4) ? 0.8 : 0], tilt: f < t52(4.4) ? 6 : 0,
            aL: [30, -70], holdL: <g><rect x={-40} y={-60} width={80} height={18} fill="#3E6FB0" /><rect x={-36} y={-42} width={72} height={16} fill="#E8A317" /></g>,
            aR: f >= t52(4.6) ? [70, 60] : [10, 6], holdR: f >= t52(5.0) ? <Presa s={0.9} /> : undefined})]
        : []),
    ],
    delante: [
      ...(!enMesa(cami.x) || cami.caminando || (f >= t52(3.2) && f < t52(5.6)) ? [P({...camiProps, s: 0.9})] : []),
      ...(vecinoDentro
        ? [P({id: 'V', f, x: vecino.x, y: vecino.y, s: 0.9, legs: vecino.caminando ? 'walk' : 'stand', smile: 1, turn: -0.4, look: [-1, 0],
            aR: brindis ? [150, 20] : f >= t52(7.6) ? [70, 40] : [40, 50], holdR: brindis || f >= t52(7.8) ? vaso : <Presa s={0.9} />})]
        : []),
    ],
    mundo: (
      <g>
        <Banner p={banner} f={f} />
        {f >= at(48) && f < at(49) && (
          <g transform={`translate(3110 ${640 + osc(f, 40, 4)}) scale(${Math.min(1, (f - at(48)) / 10) * 1.25})`}>
            <AficheInversion />
          </g>
        )}
        {f >= t52(0) && f < t52(1.2) && <Ondas f={f} x={2980} y={560} />}
        {f >= at(49) && f < fin(51) &&
          [0, 1, 2, 3].map((i) => {
            const a = at(49, 0.6 + i * 1.3);
            return f >= a && <Medicion key={i} tipo={i} f={f - a} x={2460 + i * 125} y={430} />;
          })}
      </g>
    ),
    pantalla: (
      <>
        <rect x={0} y={0} width={1920} height={1080} fill="#FFFFFF" opacity={flash} />
        <Panel f={f} desde={at(45, 2.8)} hasta={fin(46)} x={1330} y={130} w={440} h={780}>
          <Reto f={f} desde={at(45, 2.8)} cuadricula={prog(f, at(46, 1.5), at(46, 2.3))} w={440} h={780} />
        </Panel>
      </>
    ),
  };
}

const Estrella: React.FC<{x: number; y: number}> = ({x, y}) => (
  <path transform={`translate(${x} ${y})`} d="M0 -34 L10 -10 L34 -10 L14 4 L22 30 L0 14 L-22 30 L-14 4 L-34 -10 L-10 -10 Z" fill="#F2C318" stroke="#E08A00" strokeWidth={3} />
);

const Banner: React.FC<{p: number; f: number}> = ({p, f}) =>
  p <= 0 ? null : (
    <g transform={`translate(2640 215) scale(${p * 0.85} 0.85)`}>
      <path d="M -300 0 L 300 0 L 280 60 L 300 120 L -300 120 L -280 60 Z" fill="#C8102E" />
      <text x={0} y={84} textAnchor="middle" fontFamily="'Patrick Hand', cursive" fontSize={74} fill="#FFFFFF">Frisby nos une</text>
      <path d="M 0 0" />
      {[-250, 250].map((x) => (
        <path key={x} transform={`translate(${x} 60) scale(${1 + osc(f, 30, 0.1)})`} d="M0 12 C -22 -6 -16 -26 0 -16 C 16 -26 22 -6 0 12 Z" fill="#F2C318" />
      ))}
    </g>
  );

const AficheInversion: React.FC = () => (
  <g transform="translate(0 40)">
    <Afiche w={300} h={170}>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${-100 + i * 100} -110)`}>
          <circle r={34} fill={['#FFE08A', '#FFC9C0', '#CFE6D2'][i]} />
          {i === 0 && <g><rect x={-20} y={-12} width={40} height={28} rx={5} fill="#333" /><circle r={9} cy={2} fill="#FFF" /></g>}
          {i === 1 && <path d="M -18 -8 L 4 -8 L 20 -20 L 20 20 L 4 8 L -18 8 Z" fill="#C8102E" />}
          {i === 2 && <g><rect x={-16} y={-20} width={32} height={40} fill="#FFFFFF" stroke="#C8102E" strokeWidth={4} /><rect x={-10} y={-10} width={20} height={6} fill="#C8102E" /></g>}
          <text y={62} textAnchor="middle" fontFamily="'Patrick Hand', cursive" fontSize={22} fill="#333">{['Contenido', 'Redes', 'Material'][i]}</text>
        </g>
      ))}
    </Afiche>
  </g>
);

const Medicion: React.FC<{tipo: number; f: number; x: number; y: number}> = ({tipo, f, x, y}) => {
  const e = Math.min(1, f / 12);
  const sube = Math.min(1, f / 40) * 60;
  return (
    <g transform={`translate(${x} ${y - sube + osc(f, 50, 6)}) scale(${0.5 + 0.5 * e})`} opacity={e}>
      <circle r={50} fill="#FFFFFF" stroke="#F36E00" strokeWidth={6} />
      {tipo === 0 && <g><ellipse rx={30} ry={18} fill="none" stroke="#F36E00" strokeWidth={6} /><circle r={9} fill="#F36E00" /></g>}
      {tipo === 1 && <path d="M -20 14 L 14 -20 M 0 -20 L 14 -20 L 14 -6 M -20 -6 L -20 20 L 6 20" stroke="#F36E00" strokeWidth={6} fill="none" strokeLinecap="round" />}
      {tipo === 2 && <path d="M -22 -14 L 22 -14 L 26 22 L -26 22 Z M -10 -14 Q 0 -34 10 -14" stroke="#F36E00" strokeWidth={6} fill="none" strokeLinejoin="round" />}
      {tipo === 3 && <g fill="#F36E00"><circle cx={-16} cy={-10} r={9} /><circle cx={16} cy={-10} r={9} /><rect x={-28} y={2} width={24} height={20} rx={8} /><rect x={4} y={2} width={24} height={20} rx={8} /></g>}
    </g>
  );
};

// ------------------------------------------------------------------ escena 8
function escena8(f: number): Cuadro {
  const s8 = S(8);
  const pos: Record<string, number> = {C1: 2470, C2: 2620, C3: 2770, V: 2905};
  const yb = PISO - 45;
  const final = f >= at(56);
  const ronda = (id: string, base: [number, number]): [number, number] => (final ? [150, 20] : gesto(f, id, base));
  const presa = <Presa s={0.9} />;
  const risa = (id: string) => (!boca(id, f) && hablante(f) && hablante(f) !== id ? Math.abs(osc(f, 20, 3)) : 0);
  return {
    cam: cam(f, [
      [s8, {x: 1250, y: 360, z: 2.1}], [s8 + seg(1.0), {x: 1250, y: 360, z: 2.0}], [s8 + seg(1.0) + 1, {x: 2680, y: 620, z: 1.25}],
      [at(53), {x: 2470, y: 600, z: 2.0}], [at(54), {x: 2470, y: 600, z: 2.0}], [at(54) + 1, {x: 2620, y: 600, z: 2.0}],
      [at(55), {x: 2620, y: 600, z: 2.0}], [at(55) + 1, {x: 2770, y: 600, z: 2.0}], [at(56), {x: 2770, y: 600, z: 2.0}],
      [at(56) + 1, {x: 2690, y: 610, z: 1.3}], [fin(56), {x: 2690, y: 610, z: 1.35}], [E(8), {x: 2100, y: 500, z: 0.8}],
    ]),
    noche: 1,
    mesa: (
      <g>
        <g transform="translate(-40 0)"><Balde s={0.85} /></g>
        <g transform="translate(150 -6)"><Arepas /></g>
        {[-240, 250].map((x) => <g key={x} transform={`translate(${x} 0)`}><Vaso /></g>)}
      </g>
    ),
    atras: [
      P({id: 'C1', f, x: pos.C1, y: yb, s: 0.85, legs: 'sit', mouth: boca('C1', f), smile: 1, turn: boca('C1', f) ? 0 : giro(f, 'C1', pos), look: [giro(f, 'C1', pos), 0], hop: risa('C1'), aR: ronda('C1', [40, 70]), aL: [30, 50], holdR: final ? presa : undefined}),
      P({id: 'C2', f, x: pos.C2, y: yb, s: 0.85, legs: 'sit', mouth: boca('C2', f), smile: 1, turn: boca('C2', f) ? 0 : giro(f, 'C2', pos), look: [giro(f, 'C2', pos), 0], hop: risa('C2'), aR: ronda('C2', [60, 40]), aL: boca('C2', f) ? [100, 20] : [30, 50], holdR: final ? presa : undefined}),
      P({id: 'C3', f, x: pos.C3, y: yb, s: 0.85, legs: 'sit', mouth: boca('C3', f), smile: 1, turn: boca('C3', f) ? 0 : giro(f, 'C3', pos), look: [giro(f, 'C3', pos), 0], hop: risa('C3'), aR: ronda('C3', [30, 60]), aL: [30, 50], holdR: final ? presa : undefined}),
      P({id: 'V', f, x: pos.V, y: yb, s: 0.85, legs: 'sit', smile: 1, turn: giro(f, 'V', pos), look: [giro(f, 'V', pos), 0], hop: risa('V'), aR: final ? [150, 20] : [40, 70], holdR: presa}),
    ],
  };
}

const ESCENAS = [escena1, escena2, escena3, escena4, escena5, escena6, escena7, escena8];
// escenas que cambian de lugar entran con un fundido a negro
const FUNDIDO = [false, false, false, true, true, true, true, true];

export const Historia: React.FC<{f: number}> = ({f}) => {
  const i = Math.max(0, D.escenas.findIndex((e: any) => f >= e.inicio && f < e.fin));
  const c = ESCENAS[i](f);
  const z = c.cam.z;
  const dentro = FUNDIDO[i] ? 1 - prog(f, D.escenas[i].inicio, D.escenas[i].inicio + 12) : 0;
  const sale = i + 1 < FUNDIDO.length && FUNDIDO[i + 1] ? prog(f, D.escenas[i].fin - 12, D.escenas[i].fin) : 0;
  const finHistoria = i === 7 ? prog(f, D.escenas[7].fin - 20, D.escenas[7].fin) : 0;
  return (
    <svg viewBox="0 0 1920 1080" width={1920} height={1080}>
      <g transform={`translate(960 540) scale(${z}) translate(${-c.cam.x} ${-c.cam.y})`}>
        <Fondo noche={c.noche} puerta={c.puerta} tablero={c.tablero} />
        {c.atras}
        <Frente noche={c.noche} mesa={c.mesa} mesita={c.mesita} />
        {c.mundo}
        {c.delante}
        {c.noche > 0.3 && <rect x={-400} y={-300} width={4200} height={1900} fill="#1A1440" opacity={(c.noche - 0.3) * 0.18} />}
      </g>
      {c.pantalla}
      <rect x={0} y={0} width={1920} height={1080} fill="#000" opacity={Math.max(dentro, sale, finHistoria)} />
    </svg>
  );
};
