import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';
import { MainPageComponent } from './main-page.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainSelectorComponent } from './main-selector/main-selector.component';

@NgModule({
    imports: [CommonModule, RouterModule, MdButtonModule],
    declarations: [MainPageComponent, MainSelectorComponent, MainCarouselComponent],
    exports: [MainPageComponent]
})
export class MainPageModule { }