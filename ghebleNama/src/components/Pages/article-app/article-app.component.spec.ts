import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAppComponent } from './article-app.component';

describe('ArticleAppComponent', () => {
  let component: ArticleAppComponent;
  let fixture: ComponentFixture<ArticleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
