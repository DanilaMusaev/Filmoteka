import { MovieService, MockApiClient, OMDBApiClient } from '~/api';

export const useMovieService = () => {
    const config = useRuntimeConfig();
    // const apiClient = new MockApiClient({ apiKey: config.public.apiKey });
    const apiClient = new OMDBApiClient({ apiKey: config.public.apiKey });
    const movieService = new MovieService(apiClient);

    return movieService;
};
