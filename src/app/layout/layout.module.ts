import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent
    ],
    exports: [
        FooterComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,

    ]
})
export class LayoutModule { }
