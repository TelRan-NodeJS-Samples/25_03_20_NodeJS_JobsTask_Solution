
const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        if(email === 'user@mail.com'){
            resolve({email:'user@mail.com',password:'12345.com'});
        }else{
            reject('User not found');
        }
    });
};

module.exports = findUserByEmail;
