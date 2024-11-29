import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SecondaryButton({title, action}) {
  return (
      <TouchableOpacity
          onPress={action}
          className="flex-grow bg-fourth h-16 rounded-xl border border-sixth items-center justify-center">
          <Text className="text-third font-medium tracking-wider">{ title }</Text>
    </TouchableOpacity>
  )
}