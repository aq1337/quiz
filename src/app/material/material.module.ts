import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbar, MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDividerModule} from '@angular/material/divider'; 
import { MatListModule} from '@angular/material/list';


const material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatListModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
