import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import { verifyAToken } from "../middleware/AuthenticationUser.js";
const userRouter = express.Router()
// Fetch users
userRouter.get('/', (req, res)=>{
    try {
        users.fetchUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
// Fetch user