import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedStudentsComponent } from './paged-students.component';

describe('PagedStudentsComponent', () => {
  let component: PagedStudentsComponent;
  let fixture: ComponentFixture<PagedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagedStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
