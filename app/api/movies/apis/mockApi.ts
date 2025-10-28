import type {
    MovieApiClient,
    ResponseSearchMovies,
    ResponseSearchOneMovie,
} from '../interfaces';
import type {
    OMDbDetailedMovieResponse,
    OMDbMovieSearchResponse,
} from '../types';

export class MockApiClient implements MovieApiClient {
    async searchMoviesByQuery(query: string): Promise<ResponseSearchMovies> {
        const res = await $fetch<OMDbMovieSearchResponse>(
            '/mock/massSearch.json',
            {
                baseURL: 'http://localhost:3000',
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
            '/mock/oneMovie.json',
            {
                baseURL: 'http://localhost:3000',
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
