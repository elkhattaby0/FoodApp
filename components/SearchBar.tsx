import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <Image source={require('../assets/images/search.png')} style={styles.image} />
            <TextInput
                placeholder="Search..."
                style={styles.input}
            />
      </View>
      
      <TouchableOpacity style={styles.filter}>
        <Image source={require('../assets/images/filter.png')} style={styles.image2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25,
    },
    image2: {
        width: 30,
        height: 30,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        width: '82%',
        height: 55,
        borderWidth: 1,
        borderColor: '#d6d7d7',
        borderStyle: 'solid',
    },
    input: {
        fontSize: 20,
        width: '85%',
        paddingTop: 0,
        paddingBottom: 0,
    },
    filter: {
        backgroundColor: 'red',
        height: 55,
        width: 55,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
