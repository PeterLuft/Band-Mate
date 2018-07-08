import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PartDetailComponent} from "../part-detail/part-detail.component";
import {FormsModule} from "@angular/forms";
import {SongService} from "../song.service";
import {MessageService} from "../message.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from '@angular/router/testing'

import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent, PartDetailComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      providers: [SongService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
