# Tracks System

## Getting started

* cd into the folder
* run `npm install`
* run `npm start`

## Features:
1. All tracks can be called
2. Single tracks can be called
3. Multiple tracks can be added
4. Single tracks can be updated
5. Single tracks can be deleted

## Track APIs
Using postman or your browser use these calls

### GET localhost:300/find/tracks
Finds all the tracks on the file

#### Successful Response
    {
        "data": [
            {
                "artist": "12 Stone Toddler",
                "title": "Piranha",
                "id": 1
            },
            {
                "artist": "12 Stone Toddler",
                "title": "Runaway Train",
                "id": 2
            },
            {
                "artist": "19Hz",
                "title": "The Key (Steve Brian Mix Cut)",
                "id": 3
            }
        ]
    }


### GET localhost:3000/find/track
finds single track
#### Query Options
1. ?title=YOUR+TITLE
2. ?artist=YOUR+ARTIST+NAME
3. ?index=NUM

#### Successful Response
    {
        "data": [
            {
                "artist": "12 Stone Toddler",
                "title": "Runaway Train",
                "id": 2
            }
        ]
    }

### POST localhost:3000/add/tracks
send an array of tracks to add

#### Curl Commands
    curl -X POST   http://localhost:3000/add/tracks   -H 'Content-Type: application/json'   -d '{ "tracks": [{ "artist": "Beardthug", "title": "This Falafal Has Drugs In It"}]

#### Required Body
Tracks : [ OBJ: { artist: STR, title: STR }]

    {
        "tracks": [
            {
                "artist": "Ryan Clark",
                "title": "Carnival of Life"
            },
            {
                "artist": "Ryan Clark",
                "title": "Hearts & Spades"
            }
        ]
    }

#### Successful Response
    { data: 'Successfully Uploaded' }

### PUT localhost:3000/update/track?title=YOUR+TITLE+HERE
with a title query and the new fields you want update a track 

#### Curl Commands
    curl -X PUT \'http://localhost:3000/update/track?title=This+Falafal+Has+Drugs+In+It' \ -H 'Content-Type: application/json' \ -d '{ "track": { "artist": "Beardthug", "title": "This Falafal Has Money In It" } }'

#### Required Body
Track :  OBJ: { artist: STR, title: STR }
    {
        track: { artist: 'Sam Malone', title: 'Mooba Mooba}
    }

#### Successful Response
    {
        data: `Successfully Updated Sam Malone Mooba Mooba 523`
    }

### Delete localhost:3000/delete/track
on the body delcare which track to be deleted

#### Curl Command 
    curl -X DELETE \ http://localhost:3000/delete/track \ -H 'Content-Type: application/json' \ -d '{ "track": { "artist": "Beardthug", "title": "This Falafal Has Money In It" } }'

#### Required Body
Track :  OBJ: { artist: STR, title: STR }

    {
        track: { artist: 'Sam Malone', title: 'Mooba Mooba}
    }

#### Successful Response
    {
        data: `Successfully Deleted Sam Malone Mooba Mooba 523`
    }

## TO DOs
1. ADD user TOKENS and AUTH
3. ADD Required Headers Modal
4. Set up DB and Intigrate
5. Create Frontend with React and Redux Thunk


## Technologies
Node.js, Express, cors, http, expressWinston, responseTime, hemlet, bodyParser
