import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SongService} from "../song.service";
import {MessageService} from "../message.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from '@angular/router/testing'



import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [SongService, MessageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
