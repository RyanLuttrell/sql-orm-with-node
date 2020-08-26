const Sequelize = require('sequelize');
const { sequelize } = require('..');

module.exports = (sequelize) => {
    class Person extends Sequelize.Model {}
    Person.init({
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a first name'
                },
                notEmpty: {
                    msg: 'Please provide a first name'
                }
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a last name'
                },
                notEmpty: {
                    msg: 'Please provide a last name'
                }
            }
        }
    }, {sequelize})

    return Person
}