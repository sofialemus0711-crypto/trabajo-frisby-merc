import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {D} from './anim';
import {Muestras} from './Muestras';

export const Root: React.FC = () => (
  <>
    <Composition id="FrisbyAnimado" component={Video} durationInFrames={D.total} fps={D.fps} width={1920} height={1080} />
    <Composition id="Muestras" component={Muestras} durationInFrames={200} fps={D.fps} width={1920} height={1080} />
  </>
);
