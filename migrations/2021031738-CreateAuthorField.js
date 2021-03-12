'use strict'

const columnAndTypes = [{
    name: 'author',
    type: (Sequelize) => {
        return {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4
        }
    }
}]

module.exports = {
    up: (QueryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                return QueryInterface.addColumn(
                    'Tasks',
                    c.name,
                    c.type(Sequelize)
                )
            })
        )
    },
    down: (QueryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                return QueryInterface.removeColumn(
                    'Tasks',
                    c.name
                )
            })
        )
    }
}