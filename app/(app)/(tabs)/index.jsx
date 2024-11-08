import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';

import SideBar from '@/components/home/SideBar';
import RecipeCard from '@/components/home/RecipeCard';
import { StatusBar } from 'expo-status-bar';
import CountryCard from '@/components/home/CountryCard';

export default function HomeScreen() {
  return (
    <View className="flex-row">
      <StatusBar style='inverted' backgroundColor='white'/>
      {/* Barra lateral fija */}
      <SideBar/>

      {/* Contenido desplazable */}
      <View style={{height: hp(93), width: wp(78), marginLeft: wp(4), paddingTop: hp(6)}} className="flex-col justify-between">
        {/* Aquí va el contenido que se desplazará */}
        <Text className="text-xl tracking-wider font-medium">
          Simple recipy with your 
          <Text className='text-primary font-semibold'> fridge's ingredients</Text>
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row pb-0'>
          <CountryCard title={'American'} img={require('@/assets/images/countries/american.png')} />
          <CountryCard title={'Italian'} img={require('@/assets/images/countries/italian.png')} />
          <CountryCard title={'Japanese'} img={require('@/assets/images/countries/japanese.png')} />
          <CountryCard title={'Mexican'} img={require('@/assets/images/countries/mexican.png')} />
          <CountryCard title={'Chinese'} img={require('@/assets/images/countries/chinese.png')} />
          <CountryCard title={'Russian'} img={require('@/assets/images/countries/russian.png')} />
          <CountryCard title={'French'} img={require('@/assets/images/countries/french.png')} />
        </ScrollView>

        <ScrollView
          className='flex flex-grow'
          horizontal={true}
          contentContainerStyle={{ paddingLeft: hp(1), gap: 20}} // Espacio al inicio y al final
          showsHorizontalScrollIndicator={false} // Espacio al inicio y al final
        >
          {/* Tarjeta 1 */}
          <RecipeCard />

          {/* Tarjeta 2 */}
          <RecipeCard />

          {/* Tarjeta 3 */}
          <RecipeCard />

          {/* Añade más tarjetas según sea necesario */}
        </ScrollView>

        
        {/* Repite o añade más texto para probar el desplazamiento */}
      </View>
    </View>
  );
}
