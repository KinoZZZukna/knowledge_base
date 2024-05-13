import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '@shared/header/header.component';
import { PublicationDetailsComponent } from '@shared/publication-details/publication-details.component';
import { SearchModule } from '@shared/search/search.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, HeaderComponent, PublicationDetailsComponent, SearchModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
