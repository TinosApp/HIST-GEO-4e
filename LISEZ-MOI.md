# Histoire-Géographie 4e – Bénin : mise en ligne sur GitHub

Contenu du dossier :

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète (fiches, sujets, quiz, repères, méthodes). |
| `manifest.json` | Permet d'installer l'application sur l'écran d'accueil du téléphone. |
| `sw.js` | Fait fonctionner l'application hors connexion après la première visite. |
| `icon-192.png`, `icon-512.png` | Icônes de l'application (HG 4e). |
| `Code_4E.txt` | Script Google qui gère les codes (un code = un téléphone). Facultatif : à ne pas envoyer sur GitHub. |

Ne mets **jamais** le fichier `Codes_4E.xlsx` sur GitHub : il contient les codes en clair.

## 1. Créer le dépôt GitHub

1. Connecte-toi sur github.com (sur téléphone : dans Chrome, menu ⋮ puis « Version pour ordinateur »).
2. Touche **+** puis **New repository**.
3. Nom du dépôt : `hg4e` (sans espace). Choisis **Public** (obligatoire pour GitHub Pages gratuit). Ne coche rien d'autre, puis **Create repository**.

## 2. Envoyer les fichiers

1. Télécharge les fichiers un par un : `index.html`, `manifest.json`, `sw.js`, `icon-192.png` et `icon-512.png`.
2. Dans le dépôt, touche **uploading an existing file** (ou **Add file > Upload files**).
3. Envoie ces cinq fichiers. Ils doivent rester à la **racine** du dépôt, sans sous-dossier, et garder exactement ces noms.
4. Descends en bas de la page et touche **Commit changes**.

## 3. Activer GitHub Pages

1. Dans le dépôt : **Settings > Pages**.
2. Sous **Build and deployment**, choisis **Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**, et touche **Save**.
3. Attends une à deux minutes, puis recharge la page : l'adresse de l'application apparaît en haut, sous la forme :
   `https://TON-NOM-GITHUB.github.io/hg4e/`

## 4. Vérifier l'application (5 minutes)

1. Ouvre l'adresse dans Chrome sur un téléphone.
2. La fiche de la SA1, ses sujets et son quiz doivent s'ouvrir sans code. Les SA2 à SA4 doivent demander un code.
3. Teste avec **un code de la dernière ligne** de `Codes_4E.xlsx` (écris « Test » dans sa colonne Statut pour ne pas le vendre). Si le script des codes est en service (étape 5), ce code sera lié à ce téléphone.
4. Menu ⋮ de Chrome puis **Installer l'application** (ou **Ajouter à l'écran d'accueil**) : l'icône « HG 4e » doit apparaître.

## 5. (Facultatif) Limiter chaque code à un seul téléphone

Sans cette étape, l'application fonctionne en **mode local** : un code valide marche sur tous les téléphones. Avec le script, un code est lié au premier téléphone qui l'active.

1. Importe `Codes_4E.xlsx` dans Google Sheets (**Fichier > Importer**) et garde la feuille nommée exactement **Codes 4E**.
2. Dans le tableur (sur téléphone : navigateur en « Version pour ordinateur »), ouvre **Extensions > Apps Script**.
3. Efface le contenu de `Code.gs`, colle le contenu du fichier `Code_4E.txt`, puis touche **Enregistrer**.
4. **Déployer > Nouveau déploiement > Type : Application Web**. Exécuter en tant que : **Moi**. Qui a accès : **Tout le monde**. Touche **Déployer** et accepte les autorisations.
5. Copie l'**URL de l'application Web** qui se termine par `/exec`.
6. Sur GitHub, ouvre `index.html`, touche le crayon (**Edit**) et cherche la ligne `window.HG4E_SERVER="";`. Colle l'URL entre les guillemets, puis **Commit changes**.
7. Teste à nouveau avec un code : le tableur doit afficher « Activé », la date, l'appareil et la date d'expiration (10 mois plus tard).

Si tu modifies le script plus tard, refais **Déployer > Gérer les déploiements > Modifier > Nouvelle version**, pour garder la même URL.

## 6. Mettre à jour l'application

Remplace `index.html` sur GitHub (**Add file > Upload files**, même nom, puis **Commit changes**). Les téléphones reçoivent la nouvelle version à la visite suivante, quand ils ont Internet. Si tu ajoutes un nouveau fichier à l'application, change aussi `hg4e-v1` en `hg4e-v2` dans `sw.js`.

## À savoir

- Un dépôt public rend le code de la page lisible par n'importe qui : le verrou par code est une barrière simple, pas une protection absolue. Le mode serveur (étape 5) est plus solide que le mode local.
- Les accès sont comptés à partir de la première activation, à raison de 10 mois de 30 jours.
- L'application de la 3e et celle de la 4e doivent rester dans **deux dépôts différents**.
