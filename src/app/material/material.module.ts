import { NgModule } from '@angular/core';
import {MatButtonModule,MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents] 

})
export class MaterialModule { }
