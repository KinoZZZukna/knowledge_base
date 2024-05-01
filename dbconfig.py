import os

DATABASE_URI = (f"mysql+mysqlconnector://"
                f"{os.environ.get('DB_USER')}:"
                f"{os.environ.get('DB_PASSWORD')}@"
                f"{os.environ.get('DB_HOST')}/"
                f"{os.environ.get('DB_NAME')}")
