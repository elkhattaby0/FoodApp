import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
};

export const CardTwo = ({ title }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgDiv}>
                <Image
                    source={require('../assets/images/Cheeseburger.png')}
                    style={styles.img}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Image
                        source={require('../assets/images/plus.png')}
                        style={ styles.icon }
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3C2F2F',
        borderRadius: 20,
        gap: 10,
        marginRight: 15,
        height: 150,
    },


    imgDiv: {
        backgroundColor: '#fff',
        borderRadius: 20,
    
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },

    img: {
        width: 80,
        height: 80
    },


    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        gap: 10
    },

    title: {
        color: '#fff',
        fontSize: 15,   
    },

    btn: {
        backgroundColor: 'red',
        borderRadius: 100,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width: 15,
        height: 15
    },
});
