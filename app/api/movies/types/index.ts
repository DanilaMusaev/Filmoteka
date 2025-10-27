// Тут типы для различных API

/**
 * OMDb API & Mock API Responses
 */

interface OMDbMovieShort {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface OMDbMovieSearchResponse {
    Search: OMDbMovieShort[];
    totalResults: string;
    Response: 'True' | 'False';
}

type OMDbRatingSetting = {
    Source: string;
    Value: string;
};

export interface OMDbDetailedMovieResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: OMDbRatingSetting[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
