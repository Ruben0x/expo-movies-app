import { Cast } from '@/infraestructure/interfaces/cast.inteface';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
  actors: Cast[];
}
export const MovieCast = ({ actors }: Props) => {
  return (
    <View className='mt-5 mb-20'>
      <Text className='font-bold text-2xl px-5'>Actores</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={actors}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
