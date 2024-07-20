import { Text, View, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={Styles.listItem}>
      <Text style={Styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const Styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorozontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: 'black',
  },
  itemText: {
    color: 'white',
    textAlign: 'center',
  },
});
