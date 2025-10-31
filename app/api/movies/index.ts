import type { MovieApiClient } from './interfaces';

export class MovieService {
    private readonly apiService: MovieApiClient;

    constructor(apiService: MovieApiClient) {
        this.apiService = apiService;
    }

    async searchMoviesByQuery(options: {
        title?: string | string[] | undefined;
        genre?: string;
        year?: string;
    }) {
        try {
            if (
                options.title === undefined &&
                options.genre === undefined &&
                options.year === undefined
            ) {
                throw new Error(
                    'No one option is define, please specify one of the options when requesting'
                );
            }
            const result = await this.apiService.searchMoviesByQuery({
                title: options?.title,
                genre: options?.genre,
                year: options?.year,
            });

            return result;
        } catch (err) {
            console.error('Error while fetching movies data:', err);
            return null;
        }
    }

    async searchMoviesById(id: string | string[] | undefined) {
        try {
            if (typeof id !== 'string') {
                throw new Error(
                    'The "id" parameter is not string or undefined'
                );
            }
            const result = await this.apiService.searchMovieById(id);

            return result;
        } catch (err) {
            console.error('Error while fetching one movie data:', err);
            return null;
        }
    }
}
