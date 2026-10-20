import React from 'react';
import {AbsoluteFill, Audio, Img, staticFile, useCurrentFrame} from 'remotion';
import '@fontsource/baloo-2/700.css';
import '@fontsource/baloo-2/800.css';
import '@fontsource/patrick-hand/400.css';
import {D, bloqueEn, kf, prog} from './anim';
import {Historia} from './Historia';

const COLOR: Record<string, string> = {C1: '#FF5A6E', C2: '#FFC233', C3: '#E58BA0', TODAS: '#FFFFFF'};

// subtítulos pequeños y discretos (el diálogo lo cuentan las voces y las acciones)
const Subtitulo: React.FC<{f: number}> = ({f}) => {
  const b = bloqueEn(f);
  if (!b) return null;
  const o = kf(f, [[b.inicio, 0], [b.inicio + 6, 1], [b.inicio + b.dur - 8, 1], [b.inicio + b.dur - 2, 0]]);
  return (
    <div style={{position: 'absolute', bottom: 34, left: 0, right: 0, display: 'flex', justifyContent: 'center', opacity: o}}>
      <div style={{maxWidth: 1300, background: 'rgba(20,12,10,0.55)', borderRadius: 14, padding: '8px 22px', fontFamily: "'Baloo 2', sans-serif", fontSize: 30, fontWeight: 700, color: '#FFFFFF', textAlign: 'center', lineHeight: 1.25}}>
        <span style={{display: 'inline-block', width: 12, height: 12, borderRadius: 6, background: COLOR[b.quien], marginRight: 12, verticalAlign: 'middle'}} />
        {b.texto}
      </div>
    </div>
  );
};

const CierreLogo: React.FC<{f: number}> = ({f}) => {
  const inicio = D.total - D.logo;
  if (f < inicio) return null;
  const e = prog(f, inicio, inicio + 20);
  const sale = prog(f, D.total - 36, D.total);
  return (
    <AbsoluteFill style={{background: '#F2CB25', opacity: e, alignItems: 'center', justifyContent: 'center'}}>
      <Img src={staticFile('img/logo_mascota.jpg')} style={{width: 900, height: 900, transform: `scale(${0.92 + 0.08 * e})`, maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)'}} />
      <AbsoluteFill style={{background: '#000', opacity: sale}} />
    </AbsoluteFill>
  );
};

export const Video: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Historia f={Math.min(f, D.total - D.logo - 1)} />
      <Subtitulo f={f} />
      <CierreLogo f={f} />
      <Audio src={staticFile('audio.wav')} />
    </AbsoluteFill>
  );
};
