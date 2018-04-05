import { Component, OnInit } from '@angular/core';
import {Song} from "../../song";
import {SongService} from "../song.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[];

  getSongs():void{
    this.songService.getSongs()
      .subscribe(data => this.songs = data)
  }

  constructor(private songService: SongService) { }

  ngOnInit() {
    this.getSongs();
  }

}
