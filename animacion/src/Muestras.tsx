// Composición de revisión: cada cuadro muestra un instante distinto de la historia.
import React from 'react';
import {AbsoluteFill, useCurrentFrame, getInputProps} from 'remotion';
import {Historia} from './Historia';

export const Muestras: React.FC = () => {
  const i = useCurrentFrame();
  const lista: number[] = (getInputProps() as any).cuadros || [0];
  return (
    <AbsoluteFill style={{background: '#000'}}>
      <Historia f={lista[Math.min(i, lista.length - 1)]} />
    </AbsoluteFill>
  );
};
