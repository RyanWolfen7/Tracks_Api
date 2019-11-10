const express = require('express')
const bodyParser = require('body-parser')
const responseTime = require('response-time')
const helmet = require('helmet')
const cors = require('cors')
const http = require('http')
const expressWinston = require('express-winston');

const ONE_YEAR = 31536000000
const PORT = 3000

let metadata = {};

try {
    metadata = require('./build-metadata.json');
} catch (err) {
    console.log.error(err);
}

let app = express()

// Third party middlewares registration
app.use(bodyParser.json());

app.use(responseTime((req, res, time) => {
    time = time.toFixed(2);
    console.log(`Request time: ${time} ms`);

    // The first request after server boot will be undefined
    // because there isn't a complete request - response yet
    metadata.responseTime = time;
}));

app.use(helmet());

app.use(helmet.hsts({
    maxAge: ONE_YEAR,
    includeSubDomains: true,
    force: true
}));

app.use(cors())

app.set('view engine', 'ejs')

expressWinston.requestWhitelist.push('query')
expressWinston.requestWhitelist.push('body')

app.get('/', (req, res) => {
    const buildNum = metadata.build_number;
    return res.send(`<h1>Click N Clear</h1><p>Build: ${buildNum}</p>`)
})

app.get('/status', (req, res) => {
    const resTime = metadata.responseTime;
    return res.json({
        data: [{
            name: 'Click N Clear API',
            status: 'OK',
            internalResponseTime: `${resTime} ms`
        }]
    })
})


http.createServer(app).listen(PORT, error => {
    error ? console.log(`Unable to listen on port ${PORT}`, error) : console.log(`Listening on port ${PORT}`)
})
