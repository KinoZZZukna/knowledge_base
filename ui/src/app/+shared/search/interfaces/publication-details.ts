import { Publication } from '@shared/search/interfaces/publication';

export interface PublicationDetails extends Publication {
    publisher_name: string;
    country_name: string;
    city_name: string;
    publication_text: string;
    publication_type_name: string;
}
