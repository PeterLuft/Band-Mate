import {Component, OnInit} from '@angular/core';
import {Song} from "../../song";
import {SongService} from "../song.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[];
  songCreate: boolean;


  getSongs(): void {
    this.songService.getSongs()
      .subscribe(data => {
        console.log(data);
        this.songs = data;
      })
  }

  add(title: string): void {
    if (!title) {
      return;
    }
    this.songService.addSong(
      {
        title: title,
        parts: []
      } as Song)
      .subscribe(song => {
        this.songs.push(song);
      });
  }

  delete(song: Song): void {
    this.songs = this.songs.filter(s => s !== song);
    this.songService.deleteSong(song).subscribe();

  }

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getSongs();
    this.songCreate = false;
  }

}
