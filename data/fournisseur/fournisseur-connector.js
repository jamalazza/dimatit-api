/**
 * Created by j.azza on 27/11/2016.
 */

import Sequelize from 'sequelize';

const db = new Sequelize('DIMATITWH', 'DimaProd', 'DimaProd123', {
    dialect: 'mssql',
    host: 'srv-cluster02.dimatit.intra',
    port: 1433, // Default port
    /*
     dialectOptions: {
     instanceName: 'DIMATITHA'
     }
     */
});

var Fou = db.define('integ_fournisseurs', {

        COD_FOU: {
            type: Sequelize.STRING,
            primaryKey: true
        },

        NOM:{
            type: Sequelize.STRING
        }
    },{
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'integ_fournisseurs'
    }

);

var Facture = db.define('facturesApayer', {
        COD_JRN:{
            type:Sequelize.STRING
        },
        DAT_ECR:{
            type: Sequelize.DATE
        },
        NUM_PIE_DEB:{
            type: Sequelize.STRING
        },
        NUM_PIE_FIN:{
            type: Sequelize.STRING
        },
        CLF:{
            type: Sequelize.STRING
        },
        CPT:{
            type: Sequelize.STRING
        },
        COD_LTR:{
            type: Sequelize.STRING
        },
        SEN_ECR:{
            type: Sequelize.STRING
        },
        MNT_DBT_FRS:{
            type: Sequelize.FLOAT
        },
        LIB_ECR:{
            type: Sequelize.STRING
        },
        MOD_RGL:{
            type: Sequelize.STRING
        }
    }
);

export const Fournisseurs = {
    getOne(codeFournisseur){
        return Fou.findOne({
            where: {
                COD_FOU: codeFournisseur
            }
        }).then(function (result) {
            return result;
        });
    },
    search(nomFournisseur){
        return Fou.findAll({
            where: {
                NOM:{
                    $like:'%'+nomFournisseur+'%'
                }
            },
            limit: 5
        }).then(function (result) {
            return result;
        });
    },
    getFacturesApayer(codeFournisseur){
        return db.query('V3_FOURNISSEURS_FACTURES_A_PAYER @codeFournisseur=' + codeFournisseur, { model: Facture })
            .then(function(response){
            return response
        }).error(function(err){
            console.log('error')
        });
    }
};

