import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourchildPage } from './yourchild.page';

describe('YourchildPage', () => {
  let component: YourchildPage;
  let fixture: ComponentFixture<YourchildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourchildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourchildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
