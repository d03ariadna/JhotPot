import TextProvider from "./ThemedTextProvider";
import {View} from 'react-native';

const TextWrapper = ({ children }) => {
  return (
    <View className="flex-1">
      <TextProvider>
        {children}
      </TextProvider>
    </View>
  );
};

export default TextWrapper;