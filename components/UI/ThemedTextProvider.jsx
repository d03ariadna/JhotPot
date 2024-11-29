import { useEffect } from 'react';
import { Text } from 'react-native';

const TextProvider = ({ children }) => {
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = [
      { fontFamily: 'Poppins_400Regular' }, // o simplemente usa la clase font-regular
      Text.defaultProps.style,
    ];
  }, []);

  return children;
};

export default TextProvider;

