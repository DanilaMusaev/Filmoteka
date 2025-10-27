// Interface для всех Movie API сервисов
export interface MovieApiClient {
    searchMoviesByQuery(query: string): Promise<ResponseSearchMovies>;
    searchMovieById(id: string): Promise<ResponseSearchOneMovie>;
}

export interface ResponseSearchMovies {
    movies: IMovieShort[];
    totalResults: string;
}

export interface ResponseSearchOneMovie {
    movie: IMovie;
}