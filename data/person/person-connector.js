
import {db as ad} from '../databases/activedirectory-database'

const Person = {
    findUsers(query){
        let criteria = 'cn=*'+ query +'*';

        return new Promise(function(resolve,reject){
            ad.findUsers(criteria, function(err, users) {
                if (err) {
                    return reject(err);
                }
                else {
                    return resolve(users);
                }
            });
        });
    },
    findUser(sAMAccountName){
        return new Promise(function(resolve, reject){
            ad.findUser(sAMAccountName, function(err, user) {
                if (err) {
                    return reject(err);
                }
                else {
                    resolve(user);
                }
            });
        });
    }
};

export {Person}





