const connection = require('../connect.js');
const mysql = require('mysql');
var email = "";
const saveEmail =  (req, res) => {
	email = req.body.email;
	if(email == "") return res.json("no email")
	else return res.json(email);
}

const getData = (req, res) => {
	const queryLessons = `SELECT lessonId, class.name, sTime, eTime FROM vnedu.lesson
			JOIN vnedu.day on lesson.dayId = day.dayId
            JOIN vnedu.class on lesson.classId = class.classId
			JOIN vnedu.user on lesson.userId = user.userId
			WHERE day.date = CURDATE() and user.email = '${email}'
			order by sTime;`
	connection.query(queryLessons, (err, data) => {
		if (err) return res.json(err);
		else {
			return res.json(data);
		}
	})
}

module.exports = {
    saveEmail, getData
}