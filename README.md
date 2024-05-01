# Knowledge Base Application
This is a simple Flask application that provides a knowledge base. It uses SQLAlchemy for database interactions and CORS for handling Cross-Origin Resource Sharing.  
### Project Structure
The project is structured into four main files:  
- `dbconfig.py`: This file contains the configuration for the database connection.
- `models.py`: This file defines the database models used in the application.
- `appconfig.py`: This file sets up the Flask application and the database.
- `main.py`: This is the main entry point of the application. It defines the routes and the logic of the application.
### Setup
To set up the application, follow these steps:  
1. Clone the repository.
2. Install the required dependencies.
3. Set up the environment variables for the database connection (`DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_NAME`).
4. Run the application with `python main.py`.
### API Endpoints
The application provides the following endpoint:  
- `GET /search`: This endpoint allows you to search the knowledge base. You can filter the results by author, title, language, and year.
### Technologies Used
- Python
- Flask
- SQLAlchemy
- CORS