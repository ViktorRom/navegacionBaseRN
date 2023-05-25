import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secundary,
    marginTop: 20,
  },
  img: {
    marginVertical: 10,
    height: 200,
    width: 350,
  },
  image: {
    alignItems: 'center',
  },
  info: {
    margin: 10,
  },
  name: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 3,
  },
  description: {
    color: COLORS.white,
    marginHorizontal: 9,
    textAlign: 'justify',
  },
});
