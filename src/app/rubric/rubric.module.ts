import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { RubricPage } from './rubric.page'
import { RubricComponent } from './rubric.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RubricPage
      }
    ])
  ],
  declarations: [RubricPage, RubricComponent]
})
export class RubricPageModule {}
