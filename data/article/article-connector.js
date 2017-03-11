/**
 * Created by j.azza on 27/11/2016.
 */

import Sequelize from 'sequelize';

import {db as dimatitwh} from '../databases/dimatitwh-database';

var Art = dimatitwh.define('integ_article', {

        COD_ART: {
            type: Sequelize.STRING,
            primaryKey: true
        },

        DESIGNATION:{
            type: Sequelize.STRING
        },

        PDS_NET:{
            type: Sequelize.FLOAT
        },
        COD_FAM:{
            type: Sequelize.STRING
        }
    },{
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'integ_article'
    }

);

var Stk = dimatitwh.define('integ_article_stock', {

        COD_ART: {
            type: Sequelize.STRING,
            primaryKey: true
        },

        COD_DPO:{
            type: Sequelize.STRING
        },

        STOCK:{
            type: Sequelize.FLOAT
        }
    },{
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'integ_article_stock'
    }

);

var Fam = dimatitwh.define('integ_article_famille', {

        codeFamille: {
            type: Sequelize.STRING,
            primaryKey: true
        },

        nomFamille:{
            type: Sequelize.STRING
        }
    },{
        timestamps: false,
        createdAt: false,
        freezeTableName: true,
        tableName: 'integ_article_famille'
    }

);

export const Articles = {
    getOne(codeArt){
        return Art.findOne({
            where: {
                COD_ART: codeArt
            }
        }).then(function (result) {
            return result;
        });
    }
};

export const Stock = {
    getAll(codeArt){
        return Stk.findAll({
            where: {
                COD_ART: codeArt,
                STOCK:{
                    $gt: 0
                }
            }
        }).then(function (result) {
            return result;
        });
    }
};

export const Familles = {
    getOne(codeFamille){
        return Fam.findOne({
            where: {
                codeFamille: codeFamille
            }
        }).then(function (result) {
            return result;
        });
    }
};