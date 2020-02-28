import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QAPage } from './qa.page';

describe('QAPage', () => {
  let component: QAPage;
  let fixture: ComponentFixture<QAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
