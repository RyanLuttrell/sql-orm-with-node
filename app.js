const db = require('./db');
const {Movie} = db.models;

(async () => {
    await db.sequelize.sync({force: true});

    try {
        const movieInstances = await Promise.all([
            Movie.create({
                title: 'Toy Story'
            }),
            Movie.create({
                title: 'The Incredibles'
            }),
            Movie.create({
                title: 'Harry Potter'
            }),
            Movie.create({
                title: 'Lord of the Rings'
            })
        ]);
    } catch (error) {
        console.log('Oh shoot, I did something wrong', error);
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

