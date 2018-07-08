import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {SongService} from "../song.service";
import {MessageService} from "../message.service";
import {HttpClientModule} from "@angular/common/http";

import { SongSearchComponent } from './song-search.component';

describe('SongSearchComponent', () => {
  let component: SongSearchComponent;
  let fixture: ComponentFixture<SongSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongSearchComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [SongService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
