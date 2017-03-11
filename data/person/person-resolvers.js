/**
 * Created by j.azza on 27/11/2016.
 */

import { Person } from './person-connector';

export const resolvers = {
    Query: {
        searchPerson(_, args){
            return Person.findUsers(args.query).then(function(users){
                return users;
            })
        },
        getPerson(_, args){
            return Person.findUser(args.sAMAccountName).then(function(user){
                return user;
            })
        }
    },

    Person:{
        displayName(user){
            return (!user.displayName) ? 'NR' : user.displayName;
        },
        email(user){
            return (!user.mail) ? 'NR' : user.mail;
        },
        job(user){
            return (!user.title) ? 'NR' : user.title ;
        },
        ipPhone(user){
            return (!user.ipPhone) ? 'NR' : user.ipPhone;
        },
        manager(user){
            return (!user.manager) ? 'NR' : user.manager;
        },
        mobile(user){
            return (!user.mobile) ? 'NR' : user.mobile;
        },
        cin(user){
            return (!user.employeeCin) ? 'NR' : user.employeeCin;
        },
        photo(user){
            if(!user.thumbnailPhoto){
                return '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';
            }

            return new Buffer(user.thumbnailPhoto, 'hex').toString('base64');

        },
        sdaPhone(user){
            return (!user.sdaPhone) ? ((!user.physicalDeliveryOfficeName) ? 'NR' : user.physicalDeliveryOfficeName)  : user.sdaPhone;
        },
        codeMobile(user){
            return (!user.codeMobile) ? 'NR' : user.codeMobile;
        },
        agence(user){
            return (!user.l) ? 'NR' : user.l;
        }
    }
};
