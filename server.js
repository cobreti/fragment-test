const express = require('express');
const path = require('path');
const app = express();

app.get('/fragment-site/:filename', (req, res, next) => {
    const filename = req.params['filename'];
    const pathInfo = path.parse(filename);
    if (filename) {
        const options = {
            root: path.join(__dirname, '/node_modules/@cobreti/fragment-site/lib')
        };

        res.sendFile(filename, options, (err) => {
            if (err) {
                next(err);
            }
            else {
                console.log(`file sent : ${filename}`);
            }
        });
    }
});

app.get('/jquery.js', (req, res,next) => {
    const options = {
        root: path.join(__dirname, '/node_modules/jquery/dist')
    };
   res.sendFile('jquery.js', options, (err) => {
       if (err) {
           next(err);
       }
       else {
           console.log(`file sent : jquery.js`);
       }
   });
});

app.get('/rxjs', (req, res, next) => {
    const options = {
        root: path.join(__dirname, '/node_modules/rxjs/dist/bundles')
    }
    res.sendFile('rxjs.umd.min.js', options, err => {
        if (err) {
            next(err);
        }
        else {
            console.log('file sent: rxjs.umd.min.js');
        }
    });
});

app.use(express.static('./web'));

app.listen(3000, () => {
    console.log('server listening on port 3000');
});


