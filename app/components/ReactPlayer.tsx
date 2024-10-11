'use client';

import dynamic from 'next/dynamic';
import React from 'react';

export default function Player() {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const DynamicPlayer = dynamic(() => import('react-player'), {
    ssr: false,
  });

  return (
    <DynamicPlayer
      config={{
        soundcloud: {
          options: {},
          // options: {
          //   Player:
          //   color: '#ffffff',
          // },
        },
      }}
      style={{
        margin: 'auto 0',
      }}
      width="100%"
      height="auto"
      url="https://soundcloud.com/torture-the-artist/exclusive-solar-plexus-beautifulyaknow-opia-records&color=#0066CC"
    />
  );
}
