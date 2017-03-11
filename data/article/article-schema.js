/**
 * Created by j.azza on 27/11/2016.
 */

const articleSchema = `
    type Article{
      codeArt: String
      nomArt: String
      poidsArt: Float
      familleArt: String
      stock:[Stock]
    }
    
    type Stock{
      codeDepot: String
      stock: Float
    }

`;

export default articleSchema