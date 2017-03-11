/**
 * Created by j.azza on 27/11/2016.
 */

const fournisseurSchema = `
  type Fournisseur {
    codeFournisseur: String
    nomFournisseur: String
    facturesApayer: [Facture]
  }
  
  type Facture{
    numPiece: String
    datePiece: String
    montantHT: Float
    montantTVA: Float
    montantTTC: Float
  }
  

  
`;

export default fournisseurSchema;