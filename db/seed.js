const { Movie } = require('../models');

const seed = async function() {
    try {
        await Movie.deleteMany();
        const newMovies = await Movie.insertMany([
            {
                title: 'Pride and Prejudice',
                description: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?',
                runtime: new Date(0, 0, 0, 2, 9),
                genre: ['drama', 'romance'],
                cast: ['Keira Knightley', 'Matthew Macfadyen', 'Brenda Blethyn'],
                image: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg',
            },
            {
                title: 'The Lord of the Rings: The Two Towers',
                description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
                runtime: new Date(0, 0, 0, 2, 59),
                genre: ['action', 'adventure', 'drama', 'fantasy'],
                cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
                image: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
            },
        ]);
        console.log(newMovies);
    } catch (error) {
        console.log(error);
    }
};

seed();