import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchApiService } from '@shared/search/services/search-api.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-search-fields',
    templateUrl: './search-fields.component.html',
    styleUrl: './search-fields.component.scss'
})
export class SearchFieldsComponent implements OnInit {
    searchForm: FormGroup;

    constructor(private apiService: SearchApiService) {}

    ngOnInit() {
        this.searchForm = new FormGroup({
            author: new FormControl('', Validators.minLength(3)),
            title: new FormControl('', Validators.minLength(3)),
            language: new FormControl('', Validators.minLength(3)),
            publishing_year: new FormControl('', Validators.minLength(3))
        });
        this.searchForm.markAllAsTouched();
    }

    onSearch() {
        if (this.searchForm.valid && this.searchForm.dirty) {
            this.apiService.searchPublications(this.searchForm.value).subscribe(console.log);
            this.searchForm.reset();
        }
    }
}
