import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMouseMoveDirective as MapMouseMoveDirective } from './map-mouse-move.directive';

describe('MapMouseMoveDirective', () => {
  let component: MapMouseMoveDirective;
  let fixture: ComponentFixture<MapMouseMoveDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapMouseMoveDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapMouseMoveDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
