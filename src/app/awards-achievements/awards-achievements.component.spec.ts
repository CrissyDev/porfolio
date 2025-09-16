import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAchievementsComponent } from './awards-achievements.component';

describe('AwardsAchievementsComponent', () => {
  let component: AwardsAchievementsComponent;
  let fixture: ComponentFixture<AwardsAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsAchievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
