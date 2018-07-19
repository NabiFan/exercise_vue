const router = require('express').Router();

function loginProcess(req, res) {
    try {
        const dataObj = req.body
        if (dataObj.user !== '' && dataObj.password !== '') {
            res.send({ user: dataObj.user }); //TODOS return token
        } else {
            res.status(400).send('Incorrect data')
        }
    } catch (e) {
        res.status(500).send('Invalid JSON string');
    }
}


/**
 * mapping
 */
router.post('/user/login', loginProcess);

module.exports = {
    router: router
}