import { connection as db } from "../config/indexjs"
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication.js"

class Users {
    fetchUsers(req, res) {
        const qry = `
        SELECT userID, firstName, lastName,
        userAge, gender, emailAdd, userPwd,
        userRole
        FROM Users;
        `
        db.query(qry, (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
}