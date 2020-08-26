const db = require('./db');
const {Movie, Person} = db.models;
const { Op } = db.Sequelize;

(async () => {
    await db.sequelize.sync({force: true});

    try {
        const movieInstances = await Promise.all([
            Movie.create({
                title: 'Toy Story',
                runtime: 150,
                releaseDate: '1995-11-22',
                isAvailableOnVHS: true
            }),
            Movie.create({
                title: 'The Incredibles',
                runtime: 111,
                releaseDate: '2005-10-21',
                isAvailableOnVHS: true
            }),
            Movie.create({
                title: 'Harry Potter',
                runtime: 180,
                releaseDate: '2005-11-15',
                isAvailableOnVHS: true
            }),
            Movie.create({
                title: 'Lord of the Rings',
                runtime: 120,
                releaseDate: '2007-04-11',
                isAvailableOnVHS: true
            }),
        ]);
        const person = await Person.create({
            firstName: 'Ryan',
            lastName: 'Luttrell'
        })
        const movie3 = await Movie.build({
            title: 'Toy Story 3',
            runtime: 103,
            releaseDate: '2010-06-18',
            isAvailableOnVHS: false
        })
        await movie3.save();
        // const findAll = await Movie.findAll({
        //     attributes: ['id', 'title'],
        //     where: {
        //         releaseDate: {
        //             [Op.gte]: '2003-01-01'
        //         },
        //         runtime: {
        //             [Op.gt]: 112
        //         }
        //     },
        //     order: [['id', 'DESC']]
        // });
        const toyStory3 = await Movie.findByPk(5)
        const toyStory = await Movie.findByPk(1)
        // toyStory3.isAvailableOnVHS = true;
        // await toyStory3.save();
        // await toyStory3.update({
        //     title: 'Trying Really Hard',
        //     isAvailableOnVHS: true
        // }, {fields: ['title', 'isAvailableOnVHS']});
        await toyStory3.destroy();
        await toyStory.destroy();

        const movies = await Movie.findAll();
        console.log(movies.map(movie => movie.toJSON()));
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors:', errors)
        } else {
            throw error;
        }
    }
})();






// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Woohoo! The database is connected!');
//     } catch(error) {
//         console.log('Oh shoot, I did something wrong', error);
//     }
// })()

