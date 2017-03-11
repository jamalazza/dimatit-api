import ActiveDirectory from 'activedirectory';

const config = {
    url: 'ldap://192.168.1.3',
    baseDN: 'OU=Organisation,DC=dimatit,DC=intra',
    username: 'administrator@dimatit.intra',
    password: 'Casanova2014',
    includeMembership: [ 'user' ],
    attributes: {
        user: [
            'displayName',
            'mail',
            'title',
            'ipPhone',
            'mobile',
            'manager',
            'thumbnailPhoto',
            'employeeCin',
            'codeMobile',
            'sdaPhone',
            'l',
            'physicalDeliveryOfficeName'

        ]
    },
    entryParser : customEntryParser
};


function customEntryParser(entry, raw, callback){
    if (raw.hasOwnProperty("thumbnailPhoto")){
        entry.thumbnailPhoto = raw.thumbnailPhoto;
    }
    callback(entry);
}


export const db = new ActiveDirectory(config);
