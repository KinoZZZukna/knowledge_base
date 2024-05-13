import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Publication } from '@shared/search/interfaces/publication';
import { PublicationDetails } from '@shared/search/interfaces/publication-details';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:5000';

    constructor(private http: HttpClient) {}

    searchPublications(params: HttpParams): Observable<Publication[]> {
        return this.http.get<Publication[]>(`${this.baseUrl}/search`, {
            params
        });
    }

    getPublicationDetails(publication_id: number): Observable<PublicationDetails> {
        return this.http.get<PublicationDetails>(`${this.baseUrl}/publication/${publication_id}`);
    }
}
