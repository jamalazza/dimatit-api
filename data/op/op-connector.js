/**
 * Created by j.azza on 24/11/2016.
 */

import Sequelize from 'sequelize';
import {db as financeDb} from '../databases/finance-database'


var tableOp = financeDb.define('op.entete', {

        numOp: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dateReglement:      {type: Sequelize.STRING},
        modeReglement:      {type: Sequelize.STRING},
        dateEcheance:       {type: Sequelize.STRING},
        banque:             {type: Sequelize.STRING},
        numPiece:           {type: Sequelize.STRING},
        codeFournisseur:    {type: Sequelize.STRING},
        nomFournisseur:     {type: Sequelize.STRING}
    },
    {
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'op.entete'
    }
);

var tableOpDetail = financeDb.define('op.detail', {
        ID:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        numOp:          {type: Sequelize.INTEGER},
        datePiece:      {type: Sequelize.DATE},
        numPiece:       {type: Sequelize.STRING},
        numDF:          {type: Sequelize.STRING},
        objet:          {type: Sequelize.STRING},
        mntHT:          {type: Sequelize.FLOAT},
        mntTVA:         {type: Sequelize.FLOAT},
        mntTTC:         {type: Sequelize.FLOAT},
        tauxTVA:        {type: Sequelize.FLOAT},
        recupTVA:       {type: Sequelize.INTEGER},
        moisRecup:      {type: Sequelize.STRING},
        dateBanque:     {type: Sequelize.DATE},
        ligneComptable: {type: Sequelize.INTEGER}
    },{
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'op.detail',
        hooks: {
            beforeValidate: function(opDetail, options) {
                console.log('before validate op');
            },
            afterValidate: function(opDetail, options) {
                console.log('after validate op');
            }
        }

    }
);

const Ops = {
    getOne(numOp){
        return tableOp.findOne({
            where: {
                numOp: numOp
            }
        }).then(function (result) {
            return result;
        });
    },
    getDetail(numOp){
        return tableOpDetail.findAll({
            where: {
                numOp: numOp
            }
        }).then(function (result) {
            return result;
        });
    },
    getAll(){
        return tableOp.findAll({
            limit: 10,
            order:[
                ['numOp', 'DESC']
            ]
        })
            .then(
                (result)=>{
                    return result
                });
    },
    createOp(input){
        //Insertion dans la table op.entete
        return tableOp.build(input).save()
            .then(function (result) {
                //si insertion réussite ajouter le numOp au detail
                input.opDetail.map(function(currentValue,index){
                    input.opDetail[index].numOp = result.dataValues.numOp;
                });

                //insertion du detail de l'op
                tableOpDetail.bulkCreate(input.opDetail)
                    .then(function(){
                        console.log('success inserting');
                    })
                    .catch(function(error){
                        console.log('error bulk', error);
                    });

                return result;

            }).catch(function(error) {
                return error;
            });
    }

};

export {Ops};
