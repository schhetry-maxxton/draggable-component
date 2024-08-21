import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableResizableBarComponent } from './draggable-resizable-bar.component';

describe('DraggableResizableBarComponent', () => {
  let component: DraggableResizableBarComponent;
  let fixture: ComponentFixture<DraggableResizableBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggableResizableBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableResizableBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
