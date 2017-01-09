import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MdButtonModule } from '@angular/material';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [RouterModule, FlexLayoutModule, MdButtonModule],
    declarations: [HeaderNavComponent, FooterComponent],
    exports: [HeaderNavComponent, FooterComponent]
})
export class SharedModule { }