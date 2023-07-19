import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface ITypes {
  type1: string
  type2: string
}

export function Types({ type1, type2 }: ITypes) {
  const [backgroundColor, setBackgroundColor] = useState(
    {
      type1: `bg-${type1} rounded-3xl`,
      type2: `bg-${type2} rounded-3xl`
    }
  )

  useEffect(() => {
    setBackgroundColor({
      type1: `bg-${type1} rounded-3xl`,
      type2: `bg-${type2} rounded-3xl`
    })
  }, [type1, type2])

  return (
    <View className="-top-48 w-4/5 p-1 items-center justify-evenly flex-row">
      {
        type2 === '' ? (
          <View className={backgroundColor.type1}>
            <Text 
              className={`px-4 py-1 text-white`}
            >
              {type1.toUpperCase()}
            </Text>
          </View>
        ) : (
          <View
            className='flex-row gap-4'  
          >
            <View className={backgroundColor.type1}>
              <Text 
                className={`px-4 py-1 text-white`}
              >
                {type1.toUpperCase()}
              </Text>
            </View>
              <View className={backgroundColor.type2}>
              <Text 
                className={`px-4 py-1 text-white`}
              >
                {type2.toUpperCase()}
              </Text>
            </View>
          </View>
        ) 
      }  
    </View>
  )
}