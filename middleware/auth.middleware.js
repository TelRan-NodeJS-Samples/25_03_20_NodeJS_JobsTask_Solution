const findUserByEmail = require('../data/UserRepo');

const auth = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    let auth;

    if (req.headers.authorization) {
        auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
    }

    if (!auth || auth.length !== 2) {
        res.setHeader('WWW-Authenticate', 'Basic realm="AccessRealm"');
        res.status(401).json({error:'Unauthxorized'});
    } else {
        try {
            let user = await findUserByEmail(auth[0]);
            if(auth[1] !== user.password){
                throw new Error('Wrong password');
            }
            next();
        }catch(e){
            console.log(e);
            res.setHeader('WWW-Authenticate', 'Basic realm="AccessRealm"');
            res.status(401).json({error:'Wrong email or password'});
        }
    }
};

module.exports = auth;
