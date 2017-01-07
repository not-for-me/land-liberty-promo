import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
    imports: [RouterModule, MdButtonModule],
    declarations: [HeaderNavComponent],
    exports: [HeaderNavComponent]
})
export class SharedModule { }