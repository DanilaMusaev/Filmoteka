// Interface для всех Movie API сервисов
export interface MovieApiClient {
    searchMoviesByQuery(query: ApiClientQuery): Promise<ResponseSearchMovies>;
    searchMovieById(id: string): Promise<ResponseSearchOneMovie>;
}

export interface ResponseSearchMovies {
    movies: IMovieShort[];
    totalResults: string;
}

export interface ResponseSearchOneMovie {
    movie: IMovie;
}

export interface ApiClientQuery {
    title?: string | string[];
    genre?: string;
    year?: string;
    page?: number;
    // Mb more options
}

export interface ApiConfig {
    apiKey: string,
}