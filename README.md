# Api Exercise

## Requisiti

- PHP ≥ 8.3
- Composer ≥ 2.5
- Node ≥ 22.0
- NPM ≥ 10.0

## Installazione

Eseguire i seguenti comandi bash per l’installazione dei vendor necessari all’esecuzione via composer, l’esecuzione di script automatici e l’installazione di pacchetti npm 

```bash
composer install
npm i
npm run build
```

## Esecuzione
Configurare il DB sul file `.env`:

```bash
DB_CONNECTION=mariadb
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=%DBNAME%
DB_USERNAME=%USER%
DB_PASSWORD=%PASSWORD%
```
Eseguire le migrations con:
```bash
php artisan migrate
```

A questo punto possiamo eseguire il progetto con il comando:

```bash
composer run dev
```

## Docker
Per la containerizzazione è stato utilizzato Laravel Sail.

Aggiungere alla config (`.env`) quanto segue:
```bash
APP_PORT=8080 # Se la porta 80 non è disponibile
FORWARD_DB_PORT=3307 # Se la porta 3306 non è disponibile
```

Di seguito i comandi per l'esecuzione:


```bash
npm run build
./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate
```

L'applicativo sarà disponibile all'indirizzo http://127.0.0.1:8080

