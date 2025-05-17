from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_login import current_user
from flask_login import LoginManager


db = SQLAlchemy()
jwt = JWTManager()
cors = CORS()
login_manager = LoginManager() 
