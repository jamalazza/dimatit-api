/**
 * Created by j.azza on 27/11/2016.
 */

const opSchema = `
    type Op {
      numOp: ID!
      dateReglement: String
      modeReglement: String
      dateEcheance: String  
      banque: String
      numPiece: String
      codeFournisseur: String
      nomFournisseur: String
      IF: String
      ICE: String
      pieces:[Piece]
    }
    
    input OpInput {
      dateReglement: String
      modeReglement: String
      dateEcheance: String  
      banque: String
      numPiece: String
      codeFournisseur: String
      nomFournisseur: String
      opDetail: [OpDetailInput]
    }
    
    input OpDetailInput{
      numPiece: String
      datePiece: String
      numDF: String
      objet: String
      montantHT: Float
      montantTVA: Float
      montantTTC: Float
      tauxTVA: Float
      recupTVA: Int
      moisRecup: String
      dateBanque: String
      ligneComptable: Int
    }

    
    type Piece{
      ID: ID!
      datePiece: String
      numPiece: String
      numDF: String
      objet: String
      mntHT: String
      mntTVA: String
      mntTTC: String
      tauxTVA: String
      numOp: String
      recupTVA: String
      moisRecup: String
      dateBanque: String
      ligneComptable: String
    }
    
`;

export default opSchema
