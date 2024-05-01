from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dbconfig import DATABASE_URI
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
db = SQLAlchemy(app)
CORS(app)
