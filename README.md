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

### Post localhost:3000/add/tracks
send an array of tracks to add

#### Required Body
- Tracks : [ OBJ: { artist: STR, title: STR }]
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

### Put localhost:3000/update/track?title=YOUR+TITLE+HERE
with a title query and the new fields you want update a track 

#### Required Body
- Track :  OBJ: { artist: STR, title: STR }
    {
        track: { artist: 'Sam Malone', title: 'Mooba Mooba}
    }

#### Successful Response
    {
        data: `Successfully Updated Sam Malone Mooba Mooba 523`
    }

### Delete localhost:3000/delete/track
on the body delcare which track to be deleted

#### Required Body
- Track :  OBJ: { artist: STR, title: STR }
    {
        track: { artist: 'Sam Malone', title: 'Mooba Mooba}
    }

#### Successful Response
    {
        data: `Successfully Deleted Sam Malone Mooba Mooba 523`
    }

## Technologies
Node.js, Express, cors, http, expressWinston, responseTime, hemlet, bodyParser
