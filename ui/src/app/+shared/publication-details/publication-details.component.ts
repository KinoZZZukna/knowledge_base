import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { ApiService } from '@shared/services/api.service';
import { PublicationDetails } from '@shared/search/interfaces/publication-details';

@Component({
    selector: 'app-publication-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './publication-details.component.html',
    styleUrl: './publication-details.component.scss'
})
export class PublicationDetailsComponent implements OnInit {
    publicationDetails: PublicationDetails;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) {}

    ngOnInit(): void {
        this.route.paramMap.pipe(take(1)).subscribe(params => {
            this.apiService.getPublicationDetails(+params.get('id')).subscribe(result => {
                this.publicationDetails = result;
            });
        });
    }
}
