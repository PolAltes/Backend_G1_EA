# API Projecte EA

## Requisits previs
Abans d'executar el projecte, assegura't de tenir instal·lat:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Organització carpetes del projecte
- Config: arxius de configuració tant de MonogDB, Swagger, CORS, etc.
- Controllers: es defineixen les respostes del servidor
- Middleware: anirà definit elements com JWT i OAuth 2.0
- Models: definició dels models amb interfaces i schema.
- Routes: es gestiona les peticions a la base de dades
- Services: peticions a la base de dades

## Instal·lació
Clona el repositori i executa la següent comanda per instal·lar les dependències:

```sh
npm install
```

## Execució
Per compilar i executar l'API:

```sh
npm run build
npm run start
```

Si es vol compilar amb nodemon:

```sh
npm run dev
```

## Documentació
Una vegada que el servidor està executat, es pot accedir a Swagger a través del següent enllaç:
```
http://localhost:3143/api-docs
```


## AFEGITS MÍNIM 1 (Exercici 4 - Sistema de valoracions)

S'ha plantejat que una valoració ha de poder relacionar una activitat amb un usuari i la puntuació que l'usuari li posa a
aquesta activitat (valors entre 1-5; de default es posa 0). -- Veure models/valoration.ts

Cada usuari i cada activitat tenen una llista (inicialment buida) de valoracions que s'han generat en relació a aquests.
-- Veure models/user.ts i models/activity.ts

Els serveis que s'han plantejat per a una valoració són (veure services/valorationService.ts):
    -> createValoration: genera una valoració quan un usuari posi nota a una activitat (frontend)
    -> getValorations: retorna totes les valoracions existents
    -> getPaginatedValorations: retorna totes les valoracions existents paginades
    -> getActivityValoration: retorna les valoracions d'una activitat (per rebre valoracions determinades s'ha pensat que
    lligar-les amb l'activitat on estan definides és l'òptim)
    -> updateValoration: si un usuari vol canviar la valoració d'una activitat
    -> deleteValoration: si un usuari vol eliminar la valoració d'una activitat
    -> deleteValorationById: esborra una valoració determinada (utilitzada quan s'esborra un usuari per eliminar totes
    les valoracions que aquest pugui haver fet)

Dins controllers i routes s'han definit els codis de bon funcionament i errors i les rutes http associades a cada servei