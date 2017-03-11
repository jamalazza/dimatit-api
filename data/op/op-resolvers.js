/**
 * Created by j.azza on 27/11/2016.
 */

import { Ops } from './op-connector';

export const resolvers = {
    Query: {
        op(_, args){
            return Ops.getOne(args.numOp)
        },
        opLatest(_, args){
            return Ops.getAll();
        }
    },

    Op:{
        pieces(op){
            return Ops.getDetail(op.numOp).then(function(result){
                return result
            })
        }
    },

    Mutation: {
        createOp(_, args){
            return Ops.createOp(args.input);
        }
    },

    Piece:{
        objet(piece){
            return piece.ligneComptable + '. ' + piece.objet
        }
    }


};