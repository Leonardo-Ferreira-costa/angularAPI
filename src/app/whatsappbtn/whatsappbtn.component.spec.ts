import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappbtnComponent } from './whatsappbtn.component';

describe('WhatsappbtnComponent', () => {
  let component: WhatsappbtnComponent;
  let fixture: ComponentFixture<WhatsappbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
