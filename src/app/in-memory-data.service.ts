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
            name: "Verse",
            description: "Guitar only",
            notes: "Gtr 1 start the song, keep it mellow at first. Drums can do little swells or whatever.",
            num: 2
          },
          {
            name: "Pre-Chorus",
            description: "Ring out notes",
            notes: "We will really kick into gear for the next part, so make it count.",
            num: 4
          },
          {
            name: "Interlude",
            description: "Just hold note",
            notes: "",
            num: 2
          }
        ]
      },
      {
        id: 2,
        title: "Techniques",
        parts: [
          {
            name: "Intro",
            description: "Very energetic",
            notes: "",
            num: 1
          },
          {
            name: "Verse",
            description: "Toms on drums",
            notes: "",
            num: 2
          },
          {
            name: "Chorus",
            description: "Mellow chorus",
            notes: "",
            num: 4
          },
          {
            name: "Bridge",
            description: "Post-rock build",
            notes: "",
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
