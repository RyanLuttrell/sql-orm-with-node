const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Sorry, you need to add a title'
                },
                notEmpty: {
                    msg: 'Sorry, you need to add a title'
                }
            }
        },
        runtime: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Sorry, but you need to provide a runtime'
                },
                min: {
                    args: 1,
                    msg: 'Sorry, please provide a runtime longer than 0'
                }
            }
        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Sorry, but you need to provide a release date'
                },
                isAfter: {
                    args: '1895-12-27',
                    msg: 'Sorry, you need to enter a date that is after the creation of VHS'
                }
            }
        },
        isAvailableOnVHS: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, 
    {
        paranoid: true,
        sequelize
    });

    return Movie;
}