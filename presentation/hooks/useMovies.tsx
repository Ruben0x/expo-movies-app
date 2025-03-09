import {
  nowPlayingAction,
  popularMoviesAction,
  topRatedAction,
  upcomingAction,
} from '@/core/actions/movies';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, //24hrs
  });
  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24, //24hrs
  });
  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'topRated'],
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, //24hrs
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingAction,
    staleTime: 1000 * 60 * 60 * 24, //24hrs
  });

  return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery };
};
