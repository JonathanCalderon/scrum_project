/**
 * Created by ngerakines on 4/11/16.
 */
"use strict";
const Promise = require("bluebird");
const Sequelize = require("sequelize");
class SequelizeStorageManager {
    constructor(config) {
        this.config = config;
        this.sequelize = new Sequelize(this.config.database, this.config.username, this.config.password, { dialect: "postgres" });
        this.Account = this.sequelize.define("Account", {
            "id": {
                "type": Sequelize.UUID,
                "allowNull": false,
                "primaryKey": true
            },
            "name": {
                "type": Sequelize.STRING(128),
                "allowNull": false
            },
            "email": {
                "type": Sequelize.STRING(128),
                "allowNull": false,
                "unique": true,
                "validate": {
                    "isEmail": true
                }
            },
            "password": {
                "type": Sequelize.STRING(128),
                "allowNull": false
            }
        }, {
            "tableName": "accounts",
            "timestamps": true,
            "createdAt": "created_at",
            "updatedAt": "updated_at",
        });
        this.Address = this.sequelize.define("Address", {
            "id": {
                "type": Sequelize.UUID,
                "allowNull": false,
                "primaryKey": true
            },
            "street": {
                "type": Sequelize.STRING(128),
                "allowNull": false
            },
            "city": {
                "type": Sequelize.STRING(128),
                "allowNull": false
            },
            "state": {
                "type": Sequelize.STRING(128),
                "allowNull": false
            },
            "zip": {
                "type": Sequelize.INTEGER,
                "allowNull": false
            }
        }, {
            "tableName": "addresses",
            "timestamps": true,
            "createdAt": "created_at",
            "updatedAt": "updated_at",
        });
        this.Address.belongsTo(this.Account);
        this.Account.hasMany(this.Address);
    }
    init(force) {
        force = force || false;
        return this.sequelize.sync({ force: force, logging: true });
    }
    getAccountById(id) {
        return this.Account.find({ where: { id: id } });
    }
    getAccountByEmail(email) {
        return this.Account.find({ where: { email: email } });
    }
    addAddress(account, street, city, state, zip) {
        account = account;
        return account
            .createAddress({
            id: 9,
            street: street,
            city: city,
            state: state,
            zip: zip
        });
    }
    hashPassword(password) {
        return new Promise((resolve) => {
            resolve(password);
        });
    }
}
exports.SequelizeStorageManager = SequelizeStorageManager;
//# sourceMappingURL=Task.js.map