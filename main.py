from flask import request, jsonify
from appconfig import app, db
from models import Author, AuthorOfPublication, City, Country, Language, Publication, PublicationType, Publisher


@app.route('/search', methods=['GET'])
def search():
    query = db.session.query(
        Publication.id,
        Publication.title,
        Publication.title_of_original,
        Publication.main_theses,
        Publication.publishing_year,
        Publication.photo_of_cover,
        Author.fio,
        Language.name.label('language_name'),
    ).select_from(Publication).join(AuthorOfPublication).join(Author).join(Language)

    filters = {
        'author': Author.fio,
        'title': Publication.title,
        'language': Language.name.label('language_name'),
        'publishing_year': Publication.publishing_year
    }

    for key, value in filters.items():
        param = request.args.get(key)
        if param == 'null':
            param = ''
        query = query.filter(value.ilike(f'%{param}%'))

    smart_search = request.args.get('smart_search')
    if smart_search:
        print('Data for smart search:', smart_search)

    return jsonify([{
        'id': publication.id,
        'title': publication.title,
        'title_of_original': publication.title_of_original,
        'main_theses': publication.main_theses,
        'publishing_year': publication.publishing_year,
        'photo_of_cover': publication.photo_of_cover,
        'author': publication.fio,
        'language': publication.language_name
    } for publication in query.all()])


@app.route('/publication/<int:publication_id>', methods=['GET'])
def get_publication(publication_id):
    publication_details = db.session.query(
        Publication.id,
        Publication.title,
        Publication.title_of_original,
        Publication.main_theses,
        Publication.publishing_year,
        Publication.publication_text,
        Publication.photo_of_cover,
        Author.fio,
        City.name.label('city_name'),
        Country.name.label('country_name'),
        Language.name.label('language_name'),
        PublicationType.name.label('publication_type_name'),
        Publisher.name.label('publisher_name')
    ).filter(Publication.id == publication_id).\
        join(Language).\
        join(AuthorOfPublication).\
        join(Author).\
        join(Publisher).\
        join(Country).\
        join(City).\
        join(PublicationType).\
        first()

    if publication_details:
        return jsonify({
            'id': publication_details.id,
            'title': publication_details.title,
            'title_of_original': publication_details.title_of_original,
            'main_theses': publication_details.main_theses,
            'publisher_name': publication_details.publisher_name,
            'country_name': publication_details.country_name,
            'city_name': publication_details.city_name,
            'publishing_year': publication_details.publishing_year,
            'photo_of_cover': publication_details.photo_of_cover,
            'publication_text': publication_details.publication_text,
            'author': publication_details.fio,
            'language': publication_details.language_name,
            'publication_type_name': publication_details.publication_type_name
        })
    else:
        return jsonify({'message': 'Publication not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
