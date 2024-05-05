import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Publication } from '@shared/search/interfaces/publication';

@Injectable({
    providedIn: 'root'
})
export class SearchApiService {
    private baseUrl = 'http://localhost:5000';

    constructor(private http: HttpClient) {}

    searchPublications(params: HttpParams): Observable<Publication[]> {
        return this.http.get<Publication[]>(`${this.baseUrl}/search`, {
            params
        });
    }
}
