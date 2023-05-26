import {StyleSheet} from "react-native";
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTouchable: {
    padding: 30,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.text,
    fontSize: 20,
  },
});
