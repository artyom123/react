const TITLES = Object.freeze({
    delete: {
        title: 'Delete movie',
        message: 'Are you sure you want to delete this movie?',
    },
    add: {
        title: 'Add movie',
    },
    edit: {
        title: 'Edit movie',
    },
});

const FIELDS = [
    {
        name: 'Title',
        title: 'Title here',
    },
    {
        name: 'Release date',
        release_date: 'Select Date',
    },
    {
        name: 'Movie URL',
        movie_url: 'Movie URL here',
    },
    {
        name: 'Genre',
        genre: 'Select Gere',
    },
    {
        name: 'Overview',
        overview: 'Overview here',
    },
    {
        name: 'Runtime',
        runtime: 'Runtime here',
    },
];

export {
    TITLES,
    FIELDS,
};
