from appconfig import db


class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fio = db.Column(db.String(60), nullable=False)


class AuthorOfPublication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    publication_id = db.Column(db.Integer, db.ForeignKey('publication.id'))
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'))


class Publication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), nullable=False)
    title_of_original = db.Column(db.String(250), nullable=False)
    main_theses = db.Column(db.String(500))
    publishing_year = db.Column(db.SmallInteger)
    language_id = db.Column(db.Integer, db.ForeignKey('language.id'))
    photo_of_cover = db.Column(db.String(250))


class Language(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
