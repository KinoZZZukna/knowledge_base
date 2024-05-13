import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '@shared/services/api.service';
import { Publication } from '@shared/search/interfaces/publication';

@Component({
    selector: 'app-search-fields',
    templateUrl: './search-fields.component.html',
    styleUrl: './search-fields.component.scss'
})
export class SearchFieldsComponent implements OnInit {
    publications: Publication[];

    searchForm: FormGroup;

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.searchForm = new FormGroup({
            smart_search: new FormControl(''),
            author: new FormControl('', Validators.minLength(3)),
            title: new FormControl('', Validators.minLength(3)),
            language: new FormControl('', Validators.minLength(3)),
            publishing_year: new FormControl('', Validators.minLength(3))
        });
        this.searchForm.markAllAsTouched();
    }

    onSearch() {
        if (this.searchForm.valid && this.searchForm.dirty) {
            this.apiService.searchPublications(this.searchForm.value).subscribe(result => {
                this.publications = result;
            });
        }
    }

    onClear() {
        this.searchForm.reset();
    }
}
