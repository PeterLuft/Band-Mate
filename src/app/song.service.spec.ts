import { TestBed, inject } from '@angular/core/testing';
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";

import { SongService } from './song.service';

describe('SongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongService, MessageService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));
});
