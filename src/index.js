require('./config/config');
const express = require('express');
const morgan = require('morgan');

const colors = require('colors');

const exphbs = require('express-handlebars');
 
const path = require('path');
const { constants } = require('buffer');
const app = express();

const cors = require('cors'); 

// Settings
app.use(express.json());

app.set('view engine', '.hbs');

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views/partails'));

app.engine(
    '.hbs',
    exphbs({
        layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: [path.join(app.get('views'), 'partials')],
		defaultLayout: 'index',
		extname: '.hbs',
    })
);
 
app.use(cors());
app.use(morgan('dev'));

app.use(require('./routes/router'));

app.listen(process.env.PORT, () => {
	console.log('Running on port: '.yellow, process.env.PORT.cyan);
});
