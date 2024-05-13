import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchFieldsComponent } from './components/search-fields/search-fields.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [SearchFieldsComponent, SearchResultsComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [SearchFieldsComponent]
})
export class SearchModule {}
