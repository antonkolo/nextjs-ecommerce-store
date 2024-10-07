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
    title: 'LOST & FOUND EP',
    artist: 'Solar Plexus',
    label: 'Opia Records',
    price: '15',
    description: 'fresh 4 tracker on Opia be fast',
    tracks: [
      { title: 'Full Tilt (Full On Mix)', snippet: 'mp3' },
      { title: 'Hush', snippet: 'mp3' },
      { title: 'Shanti', snippet: 'mp3' },
      { title: 'Angara Dub', snippet: 'mp3' },
    ],
  },
];

export function getRecord(recordId) {
  return records.find((record) => record.id === recordId);
}

export function getAllRecords() {
  return records;
}