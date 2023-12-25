require('dotenv').config()
const express = require('express');
const app = express();
const connection = require('./connect.js');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mysql = require('mysql')
const md5 = require('md5')

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));
app.use(cors());


connection.connect((err) => {
	if (err) {
		console.log(err)
		throw err
	}
	console.log('Connected to sql server.')
})

app.use('/', require('./routes/auth.js'))
app.use('/', require('./routes/today.js'));
app.use('/', require('./routes/Day.js'));

app.put('/update/:id/:name/:sTime/:eTime', (req, res) => {
	const lessonId = req.body.lessonId;
    const content = req.body.content[0];
    const comment = req.body.comment[0];
    const attendants = req.body.attendants[0];
	//console.log(comment + " " + content + " " + attendants)
    const query = `UPDATE lesson SET content = '${content}', comment = '${comment}', attendants = '${attendants}' WHERE (lessonId = '${lessonId}');`;
    //console.log(query);
	connection.query(query, (err, data) => {
        if(err) {
			return res.json("Error when update");
		}
		return res.json("Update succesfully");
    })
})

app.listen(8080, () => console.log("sever is listening on 8080"));
