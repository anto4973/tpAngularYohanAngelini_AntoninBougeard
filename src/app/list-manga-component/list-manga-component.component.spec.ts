import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMangaComponentComponent } from './list-manga-component.component';

describe('ListMangaComponentComponent', () => {
  let component: ListMangaComponentComponent;
  let fixture: ComponentFixture<ListMangaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMangaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMangaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
