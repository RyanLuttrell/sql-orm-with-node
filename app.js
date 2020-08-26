const db = require('./db');
const {Movie, Person} = db.models;

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
                runtime: 150,
                releaseDate: '2007-04-11',
            }),
        ]);
        const person = await Person.create({
            firstName: 'Ryan',
            lastName: 'Luttrell'
        })
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

