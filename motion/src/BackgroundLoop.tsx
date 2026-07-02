import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';

// Onda seno que completa exactamente un ciclo en `totalFrames`,
// para que el loop no tenga salto al reiniciar.
const loopedSine = (frame: number, totalFrames: number, phase = 0) =>
  Math.sin((frame / totalFrames) * Math.PI * 2 + phase);

export const BackgroundLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const greenX = 50 + loopedSine(frame, durationInFrames, 0) * 15;
  const greenY = 55 + loopedSine(frame, durationInFrames, Math.PI / 2) * 15;

  const pinkX = 80 + loopedSine(frame, durationInFrames, Math.PI) * 10;
  const pinkY = 20 + loopedSine(frame, durationInFrames, Math.PI * 1.5) * 10;

  const cyanX = 20 + loopedSine(frame, durationInFrames, Math.PI / 3) * 12;
  const cyanY = 80 + loopedSine(frame, durationInFrames, Math.PI * 1.2) * 12;

  return (
    <AbsoluteFill style={{backgroundColor: '#080808'}}>
      <AbsoluteFill
        style={{
          background: [
            `radial-gradient(ellipse 55% 50% at ${pinkX}% ${pinkY}%, rgba(255,45,120,0.22) 0%, transparent 70%)`,
            `radial-gradient(ellipse 50% 45% at ${cyanX}% ${cyanY}%, rgba(0,240,255,0.16) 0%, transparent 65%)`,
            `radial-gradient(ellipse 45% 45% at ${greenX}% ${greenY}%, rgba(168,239,46,0.14) 0%, transparent 60%)`,
          ].join(', '),
        }}
      />
    </AbsoluteFill>
  );
};
