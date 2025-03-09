import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          movies={popularQuery.data ?? []}
          title='Populares'
        />
        <MovieHorizontalList
          movies={topRatedQuery.data?.pages.flat() ?? []}
          title='Mejores'
          className='mb-5'
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          title='Proximamente'
        />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
