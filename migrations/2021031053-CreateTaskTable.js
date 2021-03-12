'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Tasks', {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ""
            },
            done: {
                type: Sequelize.BOOLEAN,
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