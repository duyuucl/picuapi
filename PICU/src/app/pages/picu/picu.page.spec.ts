import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PicuPage } from './picu.page';

describe('PicuPage', () => {
  let component: PicuPage;
  let fixture: ComponentFixture<PicuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PicuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
