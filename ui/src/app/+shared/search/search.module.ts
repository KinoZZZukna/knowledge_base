import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchFieldsComponent } from './components/search-fields/search-fields.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
    declarations: [SearchFieldsComponent, SearchResultsComponent],
    imports: [CommonModule, HttpClientModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    exports: [SearchFieldsComponent]
})
export class SearchModule {}
