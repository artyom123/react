const GENRE_FILTERS = [
    'all',
    'action_and_adventure',
    'oscar_winning_movie',
    'drama',
    'biography',
];

const GENRES = {
    all: 'All',
    action_and_adventure: 'Action & Adventure',
    oscar_winning_movie: 'Oscar winning Movie',
    drama: 'Drama',
    biography: 'Biography',
    music: 'Music',
    comedy: 'Comedy',
};

const FAKE_DATA = [
    {
        name: 'Стартрек: Бесконечность',
        genre: [
            'drama',
            'biography',
        ],
        vote_average: '4.3',
        year: '2016',
        movie_id: 'qwe111',
        release_date: '',
        movie_url: 'www.blabla.com',
        overview: 'overview here...',
        reward: 'Oscar winning movie',
        runtime: '154 min',
        // eslint-disable-next-line max-len
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b7a33da1-7dbb-42bf-a6c9-abd5bc6d09d9/300x450',
    },
    {
        name: 'Стартрек: Бесконечность',
        genre: [
            'drama',
            'biography',
        ],
        vote_average: '4.3',
        year: '2016',
        movie_id: 'qw121e',
        release_date: '',
        movie_url: 'www.blabla.com',
        overview: 'overview here...',
        reward: 'Oscar winning movie',
        runtime: '154 min',
        // eslint-disable-next-line max-len
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5f4b184f-01c0-4e0c-b9a7-bd2b8073f1cc/300x450',
    },
    {
        name: 'Логан',
        genre: [
            'drama',
            'biography',
        ],
        vote_average: '4.3',
        year: '2017',
        movie_id: 'qw1244e',
        release_date: '',
        movie_url: 'www.blabla.com',
        overview: 'overview here...',
        reward: 'Oscar winning movie',
        runtime: '154 min',
        // eslint-disable-next-line max-len
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/8a5600a3-ec96-4a74-8036-35b7041a076a/300x450',
    },
    {
        name: 'Люди в черном: Интернэшнл',
        genre: [
            'drama',
            'biography',
        ],
        vote_average: '4.3',
        year: '2019',
        movie_id: 'qwwwe111',
        release_date: '',
        movie_url: 'www.blabla.com',
        overview: 'overview here...',
        reward: 'Oscar winning movie',
        runtime: '154 min',
        // eslint-disable-next-line max-len
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b7a33da1-7dbb-42bf-a6c9-abd5bc6d09d9/300x450',
    },
    {
        name: 'Стартрек: Бесконечность',
        genre: [
            'drama',
            'biography',
        ],
        vote_average: '4.3',
        year: '2016',
        movie_id: 'qwdf31e',
        release_date: '',
        movie_url: 'www.blabla.com',
        overview: 'overview here...',
        reward: 'Oscar winning movie',
        runtime: '154 min',
        // eslint-disable-next-line max-len
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/5f4b184f-01c0-4e0c-b9a7-bd2b8073f1cc/300x450',
    },
    {
        name: 'Логан',
        genre: [
            'drama',
            'biography',
        ],
        vote_average: '4.3',
        year: '2017',
        movie_id: 'qqwq244e',
        release_date: '',
        movie_url: 'www.blabla.com',
        overview: 'overview here...',
        reward: 'Oscar winning movie',
        runtime: '154 min',
        // eslint-disable-next-line max-len
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/8a5600a3-ec96-4a74-8036-35b7041a076a/300x450',
    },
];

export {
    GENRES,
    GENRE_FILTERS,
    FAKE_DATA,
};
