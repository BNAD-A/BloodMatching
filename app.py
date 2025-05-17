from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from config import Config
from extensions import db,login_manager, jwt
from models import Donneur, RendezVous, User


# Initialisation de l'application
app = Flask(__name__, template_folder='templates')
app.config.from_object(Config)


# Extensions
db.init_app(app)
jwt.init_app(app)
CORS(app)

login_manager = LoginManager()
login_manager.login_view = 'auth.login_html' 
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# Import des routes
from routes.auth import auth_bp
app.register_blueprint(auth_bp)
from routes.matching import matching_bp
app.register_blueprint(matching_bp)

from models.user import User  # adapte le chemin et la classe User



# Redirection de la racine vers login
@app.route('/')
def home():
    return redirect(url_for('auth.login_html'))

if __name__ == '__main__':
    app.run(debug=True)
