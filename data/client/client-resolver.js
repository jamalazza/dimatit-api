/**
 * Created by j.azza on 27/11/2016.
 */

import { Clients, Impayes } from '../client/client-connector'

export const resolvers = {
    Query: {
        client(_, args){
            return Clients.getOne(args.codeClient);
        },
        clientsModified(_, args){
            return Clients.getModifiedSince(args.dateModification);
        }
    },

    Client:{
        codeClient(client){
            return client.CPT
        },

        nomClient(client){
            return client.NOM
        },

        agence(client){
            return client.AGENCE
        },

        plafondTotal(client){
            return client.CRD_TOL
        },

        modeReglement(client){
            return client.RGL
        },

        plafondSuspendu(client){
            return client.CRD_ACD_GEL
        },

        representant(client){
            return client.REP
        },

        derniereMaj(client){
            return client.DRN_MAJ
        },

        enSomeil(client){
            return client.FLG_SML
        },

        impayes(client){
            return Impayes.getAll(client.CPT).then(function(result){
                return result
            })
        }
    },

    Impaye:{
        dateImpaye(imp){
            return imp.DAT_ECR
        },
        montant(imp){
            return imp.MNT_DBT_FRS
        },
        libele(imp){
            return imp.LIB_ECR
        }
    }
};