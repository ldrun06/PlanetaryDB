import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClickDirective as MapClickDirective } from './map-click.directive';

describe('MapClickDirective', () => {
  let component: MapClickDirective;
  let fixture: ComponentFixture<MapClickDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapClickDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapClickDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
