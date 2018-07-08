import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FormsModule} from "@angular/forms";
import { PartDetailComponent } from './part-detail.component';
import {RouterTestingModule} from '@angular/router/testing'


describe('PartDetailComponent', () => {
  let component: PartDetailComponent;
  let fixture: ComponentFixture<PartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartDetailComponent],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
