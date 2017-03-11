/**
 * Created by j.azza on 27/11/2016.
 */
import {Fournisseurs} from './fournisseur-connector';

export const resolvers = {
    Query: {
        fournisseur(_, args){
            return Fournisseurs.getOne(args.codeFournisseur);
        },
        fournisseurSearch(_, args){
            return Fournisseurs.search(args.nomFournisseur);
        }
    },

    Fournisseur:{
        codeFournisseur(fournisseur){
            return fournisseur.COD_FOU
        },

        nomFournisseur(fournisseur){
            return fournisseur.NOM
        },

        facturesApayer(fournisseur){
            return Fournisseurs.getFacturesApayer(fournisseur.COD_FOU)
        }
    },

    Facture:{
        numPiece(facture){
            return facture.NUM_PIE_DEB + facture.NUM_PIE_FIN
        },
        datePiece(facture){
            return facture.DAT_ECR
        },
        montantHT(facture){
            return facture.MNT_DBT_FRS
        },
        montantTVA(facture){
            return 'à renseigner'
        },
        montantTTC(facture){
            return 'à renseigner'
        }
    },

};