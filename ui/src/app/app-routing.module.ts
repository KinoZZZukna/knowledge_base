import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicationDetailsComponent } from '@shared/publication-details/publication-details.component';
import { SearchFieldsComponent } from '@shared/search/components/search-fields/search-fields.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'publication/:id', component: PublicationDetailsComponent },
    { path: 'search', component: SearchFieldsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
