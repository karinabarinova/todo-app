'use strict'

module.exports = (sequelize, DataTypes) => {
    let Task = sequelize.define('Task', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ""
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        // author: {
        //     type: DataTypes.UUID,
        //     allowNull: false
        // }
    })
    
    return Task;
}