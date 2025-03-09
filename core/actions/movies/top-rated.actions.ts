import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infraestructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infraestructure/mappers/movie.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 1 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('top_rated', {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
