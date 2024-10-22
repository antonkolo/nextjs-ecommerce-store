'use client';

// import { useState } from 'react';
// import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';

type Props = {
  soundcloudLink: string | null;
};

// export default function Player(props: Props) {
//   const DynamicPlayer = dynamic(() => import('react-player'), {
//     ssr: false,
//   });

export default function DynamicPlayer(props: Props) {
  // const [hasWindow, setHasWindow] = useState(false);
  return (
    <ReactPlayer
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
