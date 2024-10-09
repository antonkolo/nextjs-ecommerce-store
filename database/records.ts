// Record data model
// id : number
// title : string
// Artist : string
// Label : string
// Price : string
// Description : string
// Tracks : Array (Track (title : String; snippet: mp3))

const records = [
  {
    id: 1,
    title: 'Lost & Found EP',
    artist: 'Solar Plexus',
    label: 'Opia Records',
    year: '2024',
    price: '15',
    description: 'fresh 4 tracker on Opia be fast',
    genres: ['Progressive House', 'Trance'],
    soundcloudLink: 'soundcloud.com',
  },
  {
    id: 1,
    title: 'Lost & Found EP',
    artist: 'Solar Plexus',
    label: 'Opia Records',
    year: '2024',
    price: '15',
    description: 'fresh 4 tracker on Opia be fast',
    genres: ['Progressive House', 'Trance'],
    soundcloudLink: 'soundcloud.com',
  },
  {
    id: 1,
    title: 'Lost & Found EP',
    artist: 'Solar Plexus',
    label: 'Opia Records',
    year: '2024',
    price: '15',
    description: 'fresh 4 tracker on Opia be fast',
    genres: ['Progressive House', 'Trance'],
    soundcloudLink: 'soundcloud.com',
  },
];

export function getRecord(recordId: number) {
  return records.find((record) => record.id === recordId);
}

export function getAllRecords() {
  return records;
}
