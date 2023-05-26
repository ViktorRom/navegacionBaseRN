import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
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
  headerContainer: {},
  header: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
    fontWeight: "bold",
  },
  bodycontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 5,
  },
  deleteItem: {
    color: COLORS.redBright,
    fontWeight: "bold",
  },
});
