/**
 * Created by j.azza on 27/11/2016.
 */
import { Articles, Familles, Stock } from './article-connector';

export const resolvers = {
    Query: {
        article(_, args){
            return Articles.getOne(args.codeArt)
        }
    },

    Article: {
        codeArt(article){
            return article.COD_ART
        },

        nomArt(article){
            return article.DESIGNATION
        },

        poidsArt(article){
            return article.PDS_NET
        },

        familleArt(article){
            return Familles.getOne(article.COD_FAM).then(function(result){
                return result.nomFamille
            })
        },

        stock(article){
            return Stock.getAll(article.COD_ART).then(function(result){
                return result
            })
        }

    },

    Stock:{
        codeDepot(stockArticle){
            return stockArticle.COD_DPO
        },
        stock(stockArticle){
            return stockArticle.STOCK
        }
    },
};