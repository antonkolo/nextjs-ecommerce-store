'use client';

import dynamic from 'next/dynamic';
import React from 'react';

type Props = {
  soundcloudLink: string | null;
};

export default function Player(props: Props) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const DynamicPlayer = dynamic(() => import('react-player'), {
    ssr: false,
  });

  return (
    <DynamicPlayer
      style={{
        margin: 'auto 0',
      }}
      width="100%"
      height="auto"
      // if the soundcloud link is not provided, pass empty string
      url={props.soundcloudLink ? props.soundcloudLink : ''}
    />
  );
}
