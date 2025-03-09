import { movieApi } from '@/core/api/movie-api';
import { Cast } from '@/infraestructure/interfaces/cast.inteface';
import { CreditsResponse } from '@/infraestructure/interfaces/moviedb.cast.response';
import { CastMapper } from '@/infraestructure/mappers/cast.mappers';

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
