import { Component, Input } from '@angular/core';
import { Publication } from '@shared/search/interfaces/publication';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
    @Input() publications: Publication[];
}
