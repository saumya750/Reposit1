
import { NgModule } from '@angular/core';
import {MatCardModule,MatIconModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule} from '@angular/material';

const MaterialComponents = [
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule

]
@NgModule({
    imports:[MaterialComponents],
    exports:[MaterialComponents]
})
export class MaterialModule{}