"use strict";
require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const sequelizeOption = {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	}
}
const POSTGRES_URL = process.env.DATABASE_URL;
// postgres://school306_user:IQNUMJgwV2fpKhG1EkwOR90xSmrn9A0F@dpg-ckqlpd62eoec73at7fd0-a.oregon-postgres.render.com/school306


let sequelize = new Sequelize('postgresql://wifi_kex4_user:tbPKat07HQ4Tt2qunKJinmOKzv8UQXoV@dpg-csvi0368ii6s73etc9i0-a.oregon-postgres.render.com/wifi_kex4', {
	dialect: 'postgres',
	protocol: 'postgres',
	dialectOptions: {
		ssl: true,
		native: true
	}
});


const UserModel = require('./User.model')(sequelize, DataTypes);

sequelize.authenticate()
	.then(() => {
		console.log('Database connected to postgres>>>>>>>>>>>>>>>>>>');
	}).catch((err) => {
		console.log('Unable to connect to the database:>>>>>>>>>>>>>', err);
	});


module.exports = {
	db: sequelize,
	UserModel,

}