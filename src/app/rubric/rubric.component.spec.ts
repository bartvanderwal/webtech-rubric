import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { IonicModule, NavController  } from '@ionic/angular'

import { RubricComponent } from './rubric.component'

describe('RubricComponent', () => {
  let component: RubricComponent
  let fixture: ComponentFixture<RubricComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricComponent ],
      providers: [  NavController /**  { provide: NavController, useClass: NavMock } */],
      imports: [FormsModule, IonicModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
