const connection = require('../connect.js');
const mysql = require('mysql');

const signup = (req, res) => {
	const sql = `insert into user (title, name, password, email) values (?);`;
	const values = [
		'teacher',
		req.body.name,
		req.body.password,
		req.body.email
	]
	connection.query(sql, [values], (err, data) => {
		if(err) {
			return res.json("Error");
		}
		return res.json("Signup successfully");
	})
}

const signin = (req, res) => {
		const sql = `select * from user where email = ? and password = ?`;
		connection.query(sql, [req.body.email, req.body.password], (err, data) => {
			if(err) {
				return res.json("Error");
			}
			if(data.length > 0) {
				return res.json("login success");
			} else {
				return res.json("login failed");
			}
		})
}
module.exports = {
    signup, signin
}
