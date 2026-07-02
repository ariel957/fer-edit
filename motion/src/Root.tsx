import React from 'react';
import {Composition} from 'remotion';
import {BackgroundLoop} from './BackgroundLoop';

const FPS = 30;
const DURATION_IN_FRAMES = 180; // 6s, coincide con el período del loop seno

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BackgroundLoop"
        component={BackgroundLoop}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="BackgroundLoopVertical"
        component={BackgroundLoop}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
