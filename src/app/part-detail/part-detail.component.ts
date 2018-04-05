import { Component, OnInit, Input } from '@angular/core';
import {Part} from "../../part";

@Component({
  selector: 'app-part-detail',
  templateUrl: './part-detail.component.html',
  styleUrls: ['./part-detail.component.css']
})
export class PartDetailComponent implements OnInit {

  @Input() part: Part;

  constructor() { }

  ngOnInit() {
  }

}
