import {StyleSheet} from "react-native";
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTouchable: {
    backgroundColor: COLORS.secundary,
    margin: 10,
  },
  name: {
    textAlign: "center",
    color: COLORS.text,
    fontSize: 20,
  },
  price: {
    color: COLORS.text,
  },
  transmission: {
    color: COLORS.text,
  },
});
