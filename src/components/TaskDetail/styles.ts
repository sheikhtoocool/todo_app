import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: 'white',
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'green',
    padding: 10,
  },
  itemLabelText: {
    fontSize: 30,
    fontWeight: 'bold',
    flex: 3,
    color: 'white',
  },
  itemDataText: {
    fontSize: 30,
    fontStyle: 'normal',
    flex: 4,
    color: 'white',
  },
});
