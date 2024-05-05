import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '@shared/header/header.component';
import { SearchModule } from '@shared/search/search.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule, BrowserModule, HeaderComponent, SearchModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
