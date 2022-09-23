const jwt = require("jsonwebtoken")

//================================================Authentication======================================================

const authenticate = function (req, res, next) {
    try {
        const token = req.headers["x-api-key"]
        if (!token) {
            return res.status(400).send({ status: false, message: "token must be present" })
        }
        else {
            jwt.verify(token, "project3", function (err, data) {
                if (err) {
                    return res.status(400).send({ status: false, message: err.message })
                }
                else {
                    req.loginUserId = data.userId
                    next()
                    // console.log(Date.now()+data.exp, Date.now())
                    // if ((Date.now()+data.exp) > Date.now()) {
                    //     next()
                    // }
                    // else {
                    //     return res.status(401).send({ status: false, message: "token has been expired" })
                    // }
                }
            })
        }
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports.authenticate = authenticate