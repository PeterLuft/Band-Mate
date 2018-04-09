import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {

  createDb(){

    const parts = [
      {
        id: 1,
        name: "Verse",
        description: ""
      },
      {
        id: 2,
        name: "Chorus",
        description: ""
      },
      {
        id: 3,
        name: "Bridge",
        description: ""
      }
    ];

    const songs = [
      {
        id: 1,
        title: "Pilot",
        parts: [
          {
            name: "Intro",
            description: "Ambient sound",
            notes: "No instruments, just echoing guitar swells etc",
            num: 1
          },
          {
            name: "Verse",
            description: "Guitar only",
            notes: "Gtr 1 start the song, keep it mellow at first",
            num: 4
          },
          {
            name: "Pre-Chorus",
            description: "Ring out notes",
            notes: "Just ring out the whole notes on the chords. Kicks in right at the end",
            num: 1
          },
          {
            name: "Chorus",
            description: "Energetic",
            notes: "This will be pretty big",
            num: 4
          },
          {
            name: "Verse",
            description: "No guitars",
            notes: "Bass groove should cut through here",
            num: 4
          },
          {
            name: "Pre-Chorus",
            description: "Ring out notes",
            notes: "Same as other one, maybe a little more lead gtr",
            num: 4
          },
          {
            name: "Chorus",
            description: "Energetic",
            notes: "Basically same as other chorus",
            num: 4
          }
        ]
      },
      {
        id: 2,
        title: "Techniques",
        parts: [
          {
            name: "Intro",
            description: "Very big",
            notes: "Starts right in with a big sound",
            num: 4
          },
          {
            name: "Verse",
            description: "Toms on drums",
            notes: "Maybe a little rhythm guitar but no leads",
            num: 4
          },
          {
            name: "Intro",
            description: "Back to full band",
            notes: "Same as first intro",
            num: 2
          },
          {
            name: "Veers",
            description: "",
            notes: "More leads this time",
            num: 2
          }
        ]
      },
      {
        id: 3,
        title: "Twenty Bucks",
        parts: [
          {
            name: "Verse",
            description: "Mellow",
            notes: "No extra arrangement",
            num: 8
          },
          {
            name: "Verse",
            description: "",
            notes: "",
            num: 2
          }
        ]
      },
      {
        id: 4,
        title: "On the Mend",
        parts: [
          {
            name: "Intro",
            description: "Energetic",
            notes: "Really kick it into action here",
            num: 1
          },
          {
            name: "Verse",
            description: "Active and fast",
            notes: "",
            num: 2
          },
          {
            name: "Chorus",
            description: "Very heavy",
            notes: "Lift on final note",
            num: 2
          }
        ]
      },
    ];
    return {songs, parts};
  }
}
