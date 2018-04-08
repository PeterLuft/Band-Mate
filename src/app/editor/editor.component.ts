import {Component, OnInit} from '@angular/core';
import {Part} from "../../part";
import {Song} from "../../song";
import {SongService} from "../song.service";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {BasePart} from "../../base-part";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  baseParts: BasePart[]
  selectedPart: Part;
  newPart: Part;
  song: Song;
  basePartCreate: boolean;
  detailMode: boolean;

  onSelect(part: Part): void {
    this.selectedPart = part;
  }

  toggleCreateBasePart(show): void {
    this.basePartCreate = show;
  }

  toggleDetails(): void{
    this.detailMode = !this.detailMode;
  }

  add(base: BasePart): void {

    this.newPart = {
      name: base.name,
      description: base.description,
      notes: "",
      num: 1
    }

    this.song.parts.push(this.newPart);
    this.selectedPart = this.newPart;
    this.toggleCreateBasePart(false);
  }

  delete(part: Part): void{
    this.selectedPart = null;
    let index = this.song.parts.indexOf(part);
    if(index >= 0){
      this.song.parts.splice(index, 1);
    }
  }

  save(): void {
    this.songService.updateSong(this.song)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  getSong(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSong(id)
      .subscribe(data => {
        this.song = data
      })
  }

  getBaseParts(): void {
    this.songService.getBaseParts().subscribe(data => {

      this.baseParts = data;
      console.log(this.baseParts);
    });
  }

  addBasePart(obj: any): void {

    if (!obj.name) {
      return;
    }

    this.songService.addBasePart(
      {
        name: obj.name,
        description: obj.desc
      } as BasePart)
      .subscribe(base => {
          this.baseParts.push(base);
        });
  }

  constructor(private songService: SongService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.getSong();
    this.getBaseParts();
    this.detailMode = true;
  }

}
