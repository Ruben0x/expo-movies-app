import { View, Text } from 'react-native';
import '../global.css';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.actions';

const RootLayout = () => {
  nowPlayingAction();
  return (
    <View>
      <Text className='bg-slate-950 text-2xl text-white'>RootLayout</Text>
    </View>
  );
};
export default RootLayout;
