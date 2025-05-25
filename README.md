# 🩸 DonSang — Une goutte, un match, une vie qu’on rattrape 🌟

## Imaginez un Maroc où chaque don compte... ✨

DonSang, c’est plus qu’une simple application : c'est une **communauté de cœurs connectés par la volonté de sauver des vies**. 🇲🇦

Notre plateforme digitale intuitive a pour mission de révolutionner le don de sang au Maroc, en rapprochant les donneurs généreux de ceux qui en ont besoin,
au moment et à l'endroit où cela compte le plus. Parce qu'ensemble, chaque goutte fait la différence.

---

## Ce que DonSang vous offre 🎯

* **Inscription éclair 🚀** : Rejoignez la chaîne de solidarité en quelques clics. Votre premier pas vers un impact vital.
* **Matching intelligent 🧠** : Notre algorithme veille à connecter efficacement les besoins et les disponibilités, optimisant chaque don.
* **Agenda 🗓️** : Planifiez vos dons en toute sérénité grâce à un système de rendez-vous simple et flexible.
* **Alertes qui comptent 🔔** : Soyez informé des urgences et devenez le héros ou l'héroïne du moment.
* **Confiance garantie 🔒** : La sécurité de vos données est notre priorité absolue. Donnez en toute tranquillité d'esprit.

---

## Prêt à faire partie de l'aventure ? 🤝

### Installation Locale (Développeurs) 🛠️

Si vous souhaitez contribuer au développement de DonSang, suivez ces étapes pour configurer votre environnement :

1.  **Clonez le dépôt :**
    ```bash
    git clone [https://github.com/BNAD-A/BloodMatching.git]
    cd donsang
    ```

2.  **Configuration du Backend :**
    ```bash
    cd backend_f

    # Créez la base de données MySQL
    mysql -u root -p
    CREATE DATABASE donsangdb;
    USE donsangdb;
    SOURCE sql/init_db.sql;
    SOURCE sql/insert_data.sql;

    # Activez l'environnement virtuel (si vous en avez un)
    
    # Installez les dépendances Python
    pip install -r requirements.txt

    # Démarrez l'application backend
    python app.py
    ```

### Explorez nos comptes de démonstration 🕵️‍♀️

Pour découvrir l'application :

* **Professionnel (Admin) :**
    * Email: `nada.pro@donsang.ma`
    * Mot de passe: `admin123`
* **Donneur :**
    * Email: `omar.don@example.com`
    * Mot de passe: `123`

*(Note : Ces comptes sont à des fins de démonstration uniquement. Ne pas utiliser d'informations personnelles réelles.)*

---

## Genèse Universitaire, Ambition Nationale 🎓🇲🇦

DonSang a pris racine au sein des murs de l'université, comme un projet étudiant animé par une vision : celle de moderniser et de dynamiser le don de sang au Maroc. Cette initiative est le fruit de la collaboration entre deux parcours académiques :

* **BNAD-A** ([https://github.com/BNAD-A](https://github.com/BNAD-A))
* **zaydld** ([https://github.com/zaydld](https://github.com/zaydld))

Ce qui a commencé comme un projet universitaire porte en lui l'ambition de s'étendre à l'échelle nationale, en connectant les cœurs et en sauvant des vies à travers tout le Maroc 🇲🇦.

---

## Pourquoi votre contribution est vitale ❤️

* **Sauver des vies, une ligne de code à la fois 🚑** : Participez à une initiative qui a un impact direct et positif sur la société marocaine.
* **Apprendre et grandir ensemble 🌱** : Collaborez avec une communauté passionnée, échangez des connaissances et développez vos compétences.
* **Innover pour le bien commun 💡** : Votre créativité et vos idées sont précieuses pour faire évoluer DonSang.

## Contribuer, c'est aussi un don ! 🙏

Nous sommes ravis de vous accueillir dans la communauté DonSang. Chaque contribution, qu'elle soit technique, créative ou simplement un encouragement, est précieuse.

**Merci de faire battre le cœur du Maroc avec nous !** 🩸🇲🇦
