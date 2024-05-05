from flask import request, jsonify
from appconfig import app, db
from models import Author, AuthorOfPublication, Publication, Language


@app.route('/search', methods=['GET'])
def search():
    query = db.session.query(
        Publication.title,
        Publication.title_of_original,
        Publication.photo_of_cover,
        Publication.main_theses,
        Publication.publishing_year,
        Author.fio,
        Language.name
    ).select_from(Publication).join(AuthorOfPublication).join(Author).join(Language)

    filters = {
        'author': Author.fio,
        'title': Publication.title,
        'language': Language.name,
        'publishing_year': Publication.publishing_year
    }

    for key, value in filters.items():
        param = request.args.get(key)
        if param == 'null':
            param = ''
        query = query.filter(value.ilike(f'%{param}%'))

    return jsonify([{
        'title': publication.title,
        'title_of_original': publication.title_of_original,
        'photo_of_cover': publication.photo_of_cover,
        'main_theses': publication.main_theses,
        'publishing_year': publication.publishing_year,
        'author': publication.fio,
        'language': publication.name
    } for publication in query.all()])


if __name__ == '__main__':
    app.run(debug=True)
