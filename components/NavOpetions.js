import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        id: "123",
        title: "Get a ride",
        screen: "Map",
    },
    {
        id: "124",
        title: "Order food",
        screen: "Eat",
    },
]

const NavOpetions = () => {
    const navigation = useNavigation()
  return (
    <FlatList 
        data={data}
        horizontal
        key={(item) => item.id}
        renderItem={({item})=>(
            // <TouchableOpacity className="bg-gray-200 rounded-lg m-2" style={{display: "flex", width:120, height: 40, justifyContent:"center", alignItems: "center"}} >
            //     <Text className="text-lg font-semibold ">{item.title}</Text>
            // </TouchableOpacity>
            <TouchableOpacity className="w-fit h-16" onPress={()=>navigation.navigate(item.screen)}>
                <View className="bg-gray-200 p-4 rounded-lg mx-4 flex-row space-x-2">
                <Text className="text-lg font-semibold text-center">{item.title}</Text>
                <Icon 
                    type="antdesign"
                    name="arrowright"
                />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOpetions