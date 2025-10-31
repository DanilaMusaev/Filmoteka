import type {
    ApiClientQuery,
    ApiConfig,
    MovieApiClient,
    ResponseSearchMovies,
    ResponseSearchOneMovie,
} from '../interfaces';
import type {
    OMDbDetailedMovieResponse,
    OMDbMovieSearchResponse,
} from '../types';
import { buildSearchParams, omdbTransformer } from '../utils/queryBuilder';

export class OMDBApiClient implements MovieApiClient {
    private apiConfig: ApiConfig;

    constructor(config: ApiConfig) {
        this.apiConfig = config;
    }

    async searchMoviesByQuery(
        query: ApiClientQuery
    ): Promise<ResponseSearchMovies> {
        const params = buildSearchParams(omdbTransformer, query);
        const res = await $fetch<OMDbMovieSearchResponse>(
            `/?${params.toString()}&apikey=${this.apiConfig.apiKey}`,
            {
                baseURL: 'https://www.omdbapi.com',
            }
        );

        if (res.Response === 'False') {
            throw new Error('Error trying fetch some movies data');
        }

        const ShortMovies: IMovieShort[] = res.Search.map((mv) => ({
            id: mv.imdbID,
            title: mv.Title,
            img: mv.Poster,
            year: mv.Year,
        }));

        return {
            movies: ShortMovies,
            totalResults: res.totalResults,
        };
    }

    async searchMovieById(id: string): Promise<ResponseSearchOneMovie> {
        const res = await $fetch<OMDbDetailedMovieResponse>(
            `/?i=${id}&plot=full&apikey=${this.apiConfig.apiKey}`,
            {
                baseURL: 'https://www.omdbapi.com',
            }
        );

        if (res.Response === 'False') {
            throw new Error('Error trying fetch one movie data');
        }

        const DetailedMovie: IMovie = {
            id: res.imdbID,
            title: res.Title,
            img: res.Poster,
            year: res.Year,
            genre: res.Genre,
            director: res.Director,
            writer: res.Writer,
            actors: res.Actors,
            duration: res.Runtime,
            plot: res.Plot,
        };

        return { movie: DetailedMovie };
    }
}
