import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { Card } from './Card';
import { Header } from './Header';
import SearchBar from './SearchBar';
import { BottomBar } from './BottomBar';

export const Home = () => {

    const [selectedId, setSelectedId] = useState(0);

    const categories = [
        { id: 0, name: "All" },
        { id: 1, name: "Burgers" },
        { id: 2, name: "Pizza" },
        { id: 3, name: "Tacos" },
        { id: 4, name: "Sushi" },
        { id: 5, name: "Pasta" },
        { id: 6, name: "Salads" },
        { id: 7, name: "Chicken" },
        { id: 8, name: "Noodles" },
        { id: 9, name: "Sandwiches" },
        { id: 10, name: "Desserts" },
    ];

    const data = [
        {
            id: 1,
            categoryId: 1,
            image: require('../assets/images/Cheeseburger.png'),
            title: 'Cheeseburger',
            description: "Wendy's Burger",
            price: "$9.99",
            rating: "4.5"
        },
        {
            id: 2,
            categoryId: 2,
            image: require('../assets/images/Cheeseburger.png'),
            title: 'Pizza Margherita',
            description: "Italian Pizza",
            price: "$12.99",
            rating: "4.7"
        },
        {
            id: 3,
            categoryId: 1,
            image: require('../assets/images/Cheeseburger.png'),
            title: 'Double Burger',
            description: "Big burger",
            price: "$11.99",
            rating: "4.6"
        },
        {
            id: 4,
            categoryId: 4,
            image: require('../assets/images/Cheeseburger.png'),
            title: 'Sushi Mix',
            description: "Fresh sushi",
            price: "$14.99",
            rating: "4.8"
        },
        {
            id: 5,
            categoryId: 4,
            image: require('../assets/images/Cheeseburger.png'),
            title: 'Sushi Mix',
            description: "Fresh sushi",
            price: "$14.99",
            rating: "4.8"
        },
        {
            id: 6,
            categoryId: 4,
            image: require('../assets/images/Cheeseburger.png'),
            title: 'Sushi Mix',
            description: "Fresh sushi",
            price: "$14.99",
            rating: "4.8"
        },
    ];

    const filteredData =
        selectedId === 0
            ? data
            : data.filter(item => item.categoryId === selectedId);

    return (
        <View style={styles.container}>
            <Header />
            <SearchBar />
            {/* CATEGORIES */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 15 }}
                style={{ height: 55}}
            >
                {categories.map((category) => {

                    const isActive = category.id === selectedId;

                    return (
                        <TouchableOpacity
                            key={category.id}
                            onPress={() => setSelectedId(category.id)}
                            style={[
                                styles.item,
                                isActive && styles.activeItem
                            ]}
                        >
                            <Text style={[
                                styles.text,
                                isActive && styles.activeText
                            ]}>
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {/* GRID */}
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginBottom: 0,
                }}
                renderItem={({ item }) => (
                    <View style={{ width: '49%' }}>
                        <Card
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    </View>
                )}
            />
            <BottomBar />

        </View>
    );
};

const styles = {

    container: { 
        flex: 1, 
        paddingLeft: 15, 
        paddingRight: 15, 
        gap: 20, 

    },

    item: {
        backgroundColor: '#F3F4F6',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 2,
        height: 38
    },

    activeItem: {
        backgroundColor: 'red',
    },

    text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6A6A6A',
    },

    activeText: {
        color: '#fff',
    }
};