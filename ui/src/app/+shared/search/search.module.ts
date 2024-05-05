import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchFieldsComponent } from './components/search-fields/search-fields.component';

@NgModule({
    declarations: [SearchFieldsComponent],
    imports: [CommonModule, HttpClientModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    exports: [SearchFieldsComponent]
})
export class SearchModule {}