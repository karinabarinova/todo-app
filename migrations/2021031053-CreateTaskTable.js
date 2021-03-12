'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Tasks', {
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
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            // author: {
            //     type: DataTypes.UUID,
            //     allowNull: false
            // } 
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Leads')
    }
}