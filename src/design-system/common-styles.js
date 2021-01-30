import {StyleSheet} from 'react-native';
import {sizes} from './sizes';
import {typography} from './typography';
import {hasNotch} from 'react-native-device-info';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: sizes.side_padding,
    paddingRight: sizes.side_padding,
    paddingTop: hasNotch() ? sizes.top_padding + 30 : sizes.top_padding,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    fontFamily: typography.bold,
  },

  input: {
    borderBottomColor: '#CFD1D3',
    borderBottomWidth: 1,
    fontFamily: typography.regular,
  },
});
