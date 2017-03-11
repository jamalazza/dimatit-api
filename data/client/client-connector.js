/**
 * Created by j.azza on 27/11/2016.
 */

import Sequelize from 'sequelize';

const dimatitwh = new Sequelize('DIMATITWH', 'DimaProd', 'DimaProd123', {
    dialect: 'mssql',
    host: 'srv-cluster02.dimatit.intra',
    port: 1433, // Default port
    /*
     dialectOptions: {
     instanceName: 'DIMATITHA'
     }
     */
});

var Clt = dimatitwh.define('integ_clients', {

        CPT: {
            type: Sequelize.STRING,
            primaryKey: true
        },

        NOM:{
            type: Sequelize.STRING
        },

        CRD_TOL:{
            type: Sequelize.FLOAT
        },

        CRD_ACD_GEL:{
            type: Sequelize.STRING
        },

        REP:{
            type: Sequelize.STRING
        },

        AGENCE:{
            type: Sequelize.STRING
        },

        RGL:{
            type: Sequelize.STRING
        },

        FLG_SML:{
            type: Sequelize.STRING
        },

        VIL:{
            type: Sequelize.STRING
        },

        DRN_MAJ:{
            type: Sequelize.DATE
        }
    },{
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'integ_clients'
    }

);

var Imp = dimatitwh.define('impayes', {
        DAT_ECR:{
            type:Sequelize.DATE
        },
        LIB_ECR:{
            type: Sequelize.STRING
        },
        MNT_DBT_FRS:{
            type: Sequelize.FLOAT
        },
    }
);

export const Impayes = {
    getAll(codeClient){
        return dimatitwh.query('v3_getImpayesForClient @codeClient=' + codeClient, { model: Imp }).then(function(response){
            return response
        }).error(function(err){
            console.log('error')
        });
    }
};

export const Clients = {
    getOne(codeClient){
        return Clt.findOne({
            where: {
                CPT: codeClient
            }
        }).then(function (result) {
            return result;
        });
    },
    getModifiedSince(dateModification){
        return Clt.findAll({
            where: {
                DRN_MAJ:{
                    $gte:dateModification
                }
            }
        }).then(function (result) {
            return result;
        });
    }
};

