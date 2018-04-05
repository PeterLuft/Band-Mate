import { Injectable } from '@angular/core';
import {Song} from "../song";
import {SONGS} from "./mock-songs";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of"
import {MessageService} from "./message.service";

@Injectable()
export class SongService {

  getSongs(): Observable<Song[]>{
    this.messageService.add('SongService: fetched songs');
    return of(SONGS);
  }

  getSong(id: number): Observable<Song>{
    this.messageService.add(`SongService: fetching song id=${id}`);
    return of(SONGS.find(song => song.id === id));
  }

  constructor(private messageService: MessageService) { }

}
