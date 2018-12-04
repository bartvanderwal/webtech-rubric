import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IonicModule } from '@ionic/angular'

import { RubricPage } from './rubric.page'

describe('RubricPage', () => {
  let component: RubricPage
  let fixture: ComponentFixture<RubricPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubricPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RubricPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
