/**
 * Created by j.azza on 27/11/2016.
 */

const clientSchema =`
    type Client{
      codeClient: String
      nomClient: String
      agence: String
      representant: String
      plafondTotal: Float
      plafondSuspendu: String
      derniereMaj: String
      enSomeil: String
      modeReglement: String
      impayes:[Impaye]
    }
    
    type Impaye{
      dateImpaye: String
      libele: String
      montant: Float
    }
    
`;

export default clientSchema;


