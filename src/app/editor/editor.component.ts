import { Component, OnInit } from '@angular/core';
import {Part} from "../../part";
import {Song} from "../../song";
import {SongService} from "../song.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  selectedPart: Part;
  song: Song;

  onSelect(part: Part): void{
    this.selectedPart = part;
  }

  goBack(): void{
    this.location.back();
  }

  getSong(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSong(id)
      .subscribe(data => this.song = data)
  }

  constructor(
    private songService: SongService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSong();
  }

}
