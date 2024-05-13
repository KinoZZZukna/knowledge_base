from appconfig import db


class Author(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    fio = db.Column(db.String(60), nullable=False)


class AuthorOfPublication(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    publication_id = db.Column(db.Integer, db.ForeignKey('publication.id'), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'), nullable=False)


class City(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(60), nullable=False)


class Country(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(60), nullable=False)


class Language(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(30), nullable=False)


class Publication(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    title = db.Column(db.String(250), nullable=False)
    title_of_original = db.Column(db.String(250), nullable=False)
    main_theses = db.Column(db.String(500))
    publisher_id = db.Column(db.Integer, db.ForeignKey('publisher.id'), nullable=False)
    publishing_year = db.Column(db.SmallInteger)
    publication_type_id = db.Column(db.Integer, db.ForeignKey('publication_type.id'), nullable=False)
    language_id = db.Column(db.Integer, db.ForeignKey('language.id'), nullable=False)
    publication_text = db.Column(db.Text, nullable=False)
    photo_of_cover = db.Column(db.String(250))


class PublicationType(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(60), nullable=False)


class Publisher(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    country_id = db.Column(db.Integer, db.ForeignKey('country.id'), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
