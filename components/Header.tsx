import { Image, StyleSheet, Text, View } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>SnackSouss</Text>
                <Text style={styles.text}>Order your favourite food!</Text>
            </View>

            <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
    },
    text: {
        fontSize: 16,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50, 
    },
    
});
