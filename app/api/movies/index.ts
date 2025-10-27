import type { MovieApiClient } from './interfaces';

export class MovieService {
    private readonly apiService: MovieApiClient;

    constructor(apiService: MovieApiClient) {
        this.apiService = apiService;
    }

    async searchMoviesByQuery(query: string) {
        try {
            const result = await this.apiService.searchMoviesByQuery(query);

            return result;
        } catch (err) {
            console.error('Error while fetching movies data:', err);
            return null;
        }
    }

    async searchMoviesById(id: string) {
        try {
            const result = await this.apiService.searchMovieById(id);

            return result;
        } catch (err) {
            console.error('Error while fetching one movie data:', err);
            return null;
        }
    }
}
