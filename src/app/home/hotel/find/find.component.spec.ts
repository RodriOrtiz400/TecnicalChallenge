import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';

import { FindComponent } from './find.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';

fdescribe('FindComponent', () => {
  let component: FindComponent;
  let fixture: ComponentFixture<FindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      declarations: [FindComponent],
      providers: [Store, DatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testFunction', () => {
    component.testFunction();
    expect(component.testVar).toEqual('notEmpty');
  });

});
