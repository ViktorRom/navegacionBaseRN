import {StyleSheet} from 'react-native';
import {COLORS} from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttomConfirm: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttomConfirmText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalContainer: {
    flex: 0.35,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalAmount: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 19,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.flashWhite,
  },
  footerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
