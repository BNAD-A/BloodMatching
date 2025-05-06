/**
 * auth.js - Gestion de l'authentification (login/register)
 */

// Configuration des endpoints API
const API_BASE_URL = 'http://localhost:5000'; // À remplacer par l'URL réelle en production
const API_ENDPOINTS = {
    LOGIN: '/login',
    REGISTER: '/register'
};

/**
 * Affiche un message d'erreur sur la page
 * @param {string} message - Message d'erreur à afficher
 */
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    
    // Cacher le message après 5 secondes
    setTimeout(() => {
        errorElement.classList.add('hidden');
    }, 5000);
}

/**
 * Gestion du formulaire de connexion
 */
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                // Désactiver le bouton de connexion et afficher un indicateur de chargement
                const loginButton = document.getElementById('loginButton');
                loginButton.disabled = true;
                loginButton.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Connexion...';
                
                // Envoyer la requête au backend
                const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
                    email: email,
                    password: password
                });
                
                // Traiter la réponse
                if (response.data && response.data.token) {
                    // Stocker le token et les infos de l'utilisateur
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.user.id);
                    localStorage.setItem('userName', response.data.user.nom);
                    localStorage.setItem('role', response.data.user.role);
                    
                    // Rediriger vers le tableau de bord
                    window.location.href = 'dashboard.html';
                } else {
                    showError('Erreur lors de la connexion. Veuillez réessayer.');
                }
            } catch (error) {
                console.error('Erreur de connexion:', error);
                
                // Afficher un message d'erreur approprié
                if (error.response && error.response.data) {
                    showError(error.response.data.message || 'Identifiants incorrects.');
                } else {
                    showError('Erreur de connexion au serveur. Veuillez réessayer plus tard.');
                }
            } finally {
                // Réactiver le bouton de connexion
                const loginButton = document.getElementById('loginButton');
                loginButton.disabled = false;
                loginButton.textContent = 'Se connecter';
            }
        });
    }
}

/**
 * Gestion du formulaire d'inscription
 */
function setupRegisterForm() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validation du formulaire
            const password = document.getElementById('password').value;
            const passwordConfirm = document.getElementById('passwordConfirm').value;
            
            if (password !== passwordConfirm) {
                showError('Les mots de passe ne correspondent pas.');
                return;
            }
            
            // Collecter les données du formulaire
            const userData = {
                prenom: document.getElementById('prenom').value,
                nom: document.getElementById('nom').value,
                email: document.getElementById('email').value,
                password: password,
                groupe_sanguin: document.getElementById('groupe_sanguin').value,
                region: document.getElementById('region').value,
                role: 'donneur', // Le rôle est toujours "donneur" pour l'inscription
                latitude: document.getElementById('latitude').value || null,
                longitude: document.getElementById('longitude').value || null,
                consentement: document.getElementById('consentement').checked
            };
            
            // Vérifier le consentement
            if (!userData.consentement) {
                showError('Vous devez consentir au don de sang pour vous inscrire.');
                return;
            }
            
            try {
                // Désactiver le bouton d'inscription et afficher un indicateur de chargement
                const registerButton = document.getElementById('registerButton');
                registerButton.disabled = true;
                registerButton.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Inscription...';
                
                // Envoyer la requête au backend
                const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, userData);
                
                // Traiter la réponse
                if (response.data && response.data.token) {
                    // Stocker le token et les infos de l'utilisateur
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.user.id);
                    localStorage.setItem('userName', response.data.user.nom);
                    localStorage.setItem('role', 'donneur'); // Le rôle est toujours "donneur" pour l'inscription
                    
                    // Afficher un message de succès
                    alert('Inscription réussie ! Vous allez être redirigé vers votre tableau de bord.');
                    
                    // Rediriger vers le tableau de bord
                    window.location.href = 'dashboard.html';
                } else {
                    showError('Erreur lors de l\'inscription. Veuillez réessayer.');
                }
            } catch (error) {
                console.error('Erreur d\'inscription:', error);
                
                // Afficher un message d'erreur approprié
                if (error.response && error.response.data) {
                    showError(error.response.data.message || 'Erreur lors de l\'inscription.');
                } else {
                    showError('Erreur de connexion au serveur. Veuillez réessayer plus tard.');
                }
            } finally {
                // Réactiver le bouton d'inscription
                const registerButton = document.getElementById('registerButton');
                registerButton.disabled = false;
                registerButton.textContent = 'S\'inscrire';
            }
        });
    }
}

/**
 * Déconnexion de l'utilisateur
 */
function logout() {
    // Supprimer toutes les données de session
    localStorage.clear();
    
    // Rediriger vers la page de connexion
    window.location.href = 'login.html';
}

/**
 * Vérifier si l'utilisateur est connecté
 * @returns {boolean} - true si l'utilisateur est connecté, false sinon
 */
function isLoggedIn() {
    return !!localStorage.getItem('token');
}

/**
 * Obtenir le rôle de l'utilisateur connecté
 * @returns {string|null} - Le rôle de l'utilisateur ou null s'il n'est pas connecté
 */
function getUserRole() {
    return localStorage.getItem('role');
}

/**
 * Initialisation des formulaires d'authentification
 */
document.addEventListener('DOMContentLoaded', function() {
    setupLoginForm();
    setupRegisterForm();
    
    // Ajouter l'écouteur d'événement pour la déconnexion
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

// Exporter les fonctions utilitaires pour les autres scripts
window.authUtils = {
    isLoggedIn,
    getUserRole,
    logout
};