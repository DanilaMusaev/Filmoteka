import { MovieService, MockApiClient } from '~/api';

export const useMovieService = () => {
    const apiClient = new MockApiClient();
    const movieService = new MovieService(apiClient);

    return movieService;
};
