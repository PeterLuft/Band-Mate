import {Injectable} from '@angular/core';
import {Song} from "../song";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of"
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {BasePart} from "../base-part";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class SongService {

  private songsUrl = 'api/songs';
  private partsUrl = 'api/parts';

  getSongs(): Observable<Song[]> {
    this.messageService.add('SongService: fetched songs');
    return this.http.get<Song[]>(this.songsUrl)
      .pipe(
        tap(heroes => this.log('fetched songs')),
        catchError(this.handleError('getSongs', []))
      );
  }

  getBaseParts(): Observable<BasePart[]>{
    this.messageService.add('SongService: getting base parts');

    return this.http.get<BasePart[]>(this.partsUrl)
      .pipe(
        tap(parts => this.log('fetched parts')),
        catchError(this.handleError('getBaseParts', []))
      );
  }



  getSong(id: number): Observable<Song> {
    const url = `${this.songsUrl}/${id}`;
    return this.http.get<Song>(url)
      .pipe(
        tap(_ => this.log(`fetched song id=${id}`)),
        catchError(this.handleError<Song>(`getSong id=${id}`))
      );
  }

  updateSong(song: Song): Observable<any> {
    return this.http.put(this.songsUrl, song, httpOptions)
      .pipe(
        tap( _ => this.log(`updated song id=${song.id}`)),
        catchError(this.handleError<any>('updated song'))
      )
  }

  addSong(newSong: Song): Observable<Song> {
    return this.http.post<Song>(this.songsUrl, newSong, httpOptions).pipe(
      tap((song: Song) => this.log(`added song with id=${song.id}`)),
      catchError(this.handleError<Song>('addSong'))
    );
  }

  addBasePart(newPart: BasePart): Observable<BasePart>{
    return this.http.post<BasePart>(this.partsUrl, newPart, httpOptions)
      .pipe(
        tap( (part: BasePart) => this.log(`added base part with id=${part.id}`)),
        catchError(this.handleError<BasePart>('addBasePart'))
      )
  }

  deleteSong(song: Song | number): Observable<Song> {
    const id = typeof song === 'number' ? song : song.id;
    const url = `${this.songsUrl}/${id}`;

    return this.http.delete<Song>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted song id=${id}`)),
      catchError(this.handleError<Song>('deleteSong'))
    );
  }

  searchSongs(term: string): Observable<Song[]> {
    const url = `${this.songsUrl}/?title=${term}`;
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Song[]>(url)
      .pipe(
        tap(_ => this.log(`found songs matching ${term}`)),
        catchError(this.handleError('searchSongs', []))
      )
  }


  private log(message: string) {
    this.messageService.add('SongService: ' + message);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }

}
