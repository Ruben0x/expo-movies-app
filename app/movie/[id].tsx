import { MovieCast } from '@/presentation/components/actor/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    castQuery.isLoading ||
    !castQuery.data
  ) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere por favor</Text>
        <ActivityIndicator color={'purple'} size={30} />
      </View>
    );
  }

  const { originalTitle, poster, title } = movieQuery.data;

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={originalTitle}
        poster={poster}
        title={title}
      />

      <MovieDescription movie={movieQuery.data} />
      <MovieCast actors={castQuery.data} />
    </ScrollView>
  );
};
export default MovieScreen;
