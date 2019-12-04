import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormReactiveComponent } from './user-form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserFormReactiveComponent', () => {
  let component: UserFormReactiveComponent;
  let fixture: ComponentFixture<UserFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormReactiveComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
