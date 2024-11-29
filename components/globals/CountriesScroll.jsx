import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { countries } from '@/data/Countries'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function CountriesScroll({selected, setSelected}) {

    // const [selected, setSelected] = useState([]);

    const handleSelect = (country) => {

        setSelected(country);
    }

    return (
        <FlatList
                className='mb-7'
                data={countries}
                keyExtractor={(item) => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleSelect(item.value)}
                        className={`${selected == item.value ? 'border-primary' : 'border-white'} bg-fourth border-2 rounded-xl py-3 px-5 mr-5`}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
    )
}