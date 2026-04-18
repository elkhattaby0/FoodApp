import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

type Props = {
    title: string;
    description: string;
    price: string;
    rating: string;
    image?: ImageSourcePropType;
    onPress?: () => void;
};

export const Card = ({ title, description, price, rating, image, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress ?? (() => Alert.alert(title))}
        >
            
            {image ? <Image source={image} style={styles.image} /> : null}

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.rating}>{rating} ★</Text>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#d6d7d7',
        borderStyle: 'solid',
    },

    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },

    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    rating: {
        fontSize: 14,
        color: '#f39c12',
    },
});
