import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import {SongService} from "../song.service";
import {MessageService} from "../message.service";
import {HttpClientModule} from "@angular/common/http";

import { SongListComponent } from './song-list.component';

describe('SongListComponent', () => {
  let component: SongListComponent;
  let fixture: ComponentFixture<SongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [SongService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
