/**
 * Created by j.azza on 27/11/2016.
 */

import Sequelize from 'sequelize';

export const db = new Sequelize('DIMATITWH', 'DimaProd', 'DimaProd123', {
    dialect: 'mssql',
    host: '192.168.1.190',
    port: 1433, // Default port
    /*
     dialectOptions: {
     instanceName: 'DIMATITHA'
     }
     */
});

