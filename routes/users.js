const express = require('express')
const router = express.Router();

const users = [
    {
        "id": "1",
        "username": "john_smith",
        "email": "user1@gmail.com",
        "activationDate": "January 1, 1970"
    },
    {
        "id": "2",
        "username": "jack_smith",
        "email": "user2@gmail.com",
        "activationDate": "August 2, 2019"
    }
]




const handlingUsers = (req, res, next) => {
    res.json({ users })
}

router.get('/all', handlingUsers)


const specificUser = (req, res, next) => {
    console.log(req.params)

    let userId = req.params.user_id
    console.log(userId)
    // res.json(userId)
    for (let i = 0; i < users.length; i++) {
        if (userId === users[i].id) {
            res.json(users[i])
        } 
    } 
    //res.json("error no user found")  
    next(); 
} 
const allUserEmails = (req, res, next) => {
    res.send({ emails: [] })
}

router.get("/all/emails", allUserEmails)
router.get('/all/:user_id', specificUser)


// router.get('/all/:user_id', (req, res) => {
//     res.send('Seding all users!')
// })


module.exports = router;