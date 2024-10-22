import { Sql } from 'postgres';

const records = [
  {
    id: 1,
    title: 'What Reality? EP',
    artist: 'Velvet Velour',
    label: 'Sonido Chido',
    releaseYear: '2024',
    price: 14.5,
    description:
      'Liam Dadds AKA Velvet Velour took inspiration and encouragement from Josh Tweek and his MMSU podcast series when he was writing these tunes. The resulting mini-album has ended up precisely where it should be, as the 2nd release on Josh’s downtempo label Sonido Chido. What goes around comes around!',
    soundcloudLink:
      'https://soundcloud.com/liricadistribution/velvet-velour-what-reality-ep',
  },
  {
    id: 2,
    title: 'Lost & Found EP',
    artist: 'Solar Plexus',
    label: 'Opia Records',
    releaseYear: '2024',
    price: 15,
    description: 'fresh 4 tracker on Opia be fast',
    soundcloudLink:
      'https://soundcloud.com/torture-the-artist/exclusive-solar-plexus-beautifulyaknow-opia-records',
  },
  {
    id: 3,
    title: 'Nameless Salesmen',
    artist: 'Robin Ordell',
    label: 'No Time County',
    releaseYear: '2024',
    price: 14,
    description:
      'Robin Ordell returns to his own No Time County with Nameless Salesmen EP',
    soundcloudLink:
      'https://soundcloud.com/notimecounty/ntc003-robin-ordell-nameless-salesmen-ep',
  },
  {
    id: 4,
    title: 'Embrace the Unknown EP',
    artist: 'Various Artists',
    label: 'Time2Feel Records',
    releaseYear: '2024',
    price: 13,
    description:
      "Time2Feel is a friendship association of two enthusiasts thrilled by electronic music. The main purpose is the sensation triggered by electronic sounds and the letting go needed to maximise that feeling. As an adventure, getting out to your confort zone makes you grow. That's why we dig deeply in the unknown to find new records, new parties and new people to “feel” new emotions with 😍 Moreover it's a way to feel alive, and our aim is to persuade you that your lives are incredible, at least for a moment.",
    soundcloudLink:
      'https://soundcloud.com/liricadistribution/various-artists-embrace-the-unknown-ep',
  },
  {
    id: 5,
    title: 'Fantastic Planet',
    artist: 'DIN',
    label: 'Coming From... Returning To... & Coming From... Returning To...',
    releaseYear: '2024',
    price: 27,
    description:
      'Next on Coming from... Returning to... DIN - Fantastic Planet. Originally released on DOVe records in 1992 gets it’s long awaited reissue.',
    soundcloudLink:
      'https://soundcloud.com/outside-in-distribution/din-fantastic-planet-cfrt003',
  },
  {
    id: 6,
    title: 'Retrospective EP',
    artist: 'Ilija Rudman',
    label: 'Maze',
    releaseYear: '2024',
    price: 17,
    description:
      'In the first half of 2024, the first album on our new label will be released, serving as both the starting point and culmination of the Maze project. Maze initially began as a party and later evolved into a record label, once the musical style became more precisely defined.',
    soundcloudLink: null,
  },
  {
    id: 7,
    title: 'Mysterious Research For Freedom',
    artist: 'Joking Sphinx',
    label: 'Metallic States',
    releaseYear: '2024',
    price: 17,
    description:
      'For its first release, Metallic States proudly presents a 2 tracker from Goa Trance veteran Joking Sphinx. With 2 uncut dancefloor tracks from his archives (1996-1997), this new release from the producer proves that music can be relevant more than 25 years later, forged in the past but here to stay.',
    soundcloudLink:
      'https://soundcloud.com/metallicstates/sets/ms01-joking-sphinx-mysterious-research-for-freedom',
  },
  {
    id: 8,
    title: 'Foyer EP',
    artist: 'DJ Mastra',
    label: 'D.A.M.N',
    releaseYear: '2024',
    price: 15,
    description:
      "Some records you play so often that the sound will get worse and worse then when you actually want to grab a backup copy, it's frickin expensive... /nNot Anymore! Here we go, lucky number 3 we have Stefan Willenegger aka DJ Mastra with his Foyer EP, a nice blend between Tech House and Techno. /nGive it a listen, you surely heard it in a club near you!",
    soundcloudLink:
      'https://www.youtube.com/watch?v=dOq4ScFgu3Q&ab_channel=TheOblong',
  },
];

export async function up(sql: Sql) {
  for (const record of records) {
    await sql`
      INSERT INTO
        records (
          title,
          artist,
          label,
          release_year,
          price,
          description,
          soundcloud_link
        )
      VALUES
        (
          ${record.title},
          ${record.artist},
          ${record.label},
          ${record.releaseYear},
          ${record.price},
          ${record.description},
          ${record.soundcloudLink}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const record of records) {
    await sql`
      DELETE FROM records
      WHERE
        id = ${record.id}
    `;
  }
}
