import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { CardTwo } from "./CardTwo";

export const ProductDetails = () => {

    const toppings = [
        { id: 1, name: "Cheddar Cheese" },
        { id: 2, name: "American Cheese" },
        { id: 3, name: "Swiss Cheese" },
        { id: 4, name: "Lettuce" },
        { id: 5, name: "Tomato" },
        { id: 6, name: "Onion" },
        { id: 7, name: "Pickles" },
        { id: 8, name: "Bacon" },
        { id: 9, name: "Fried Egg" },
        { id: 10, name: "Avocado" },
        { id: 11, name: "Mushrooms" },
        { id: 12, name: "Jalapeños" },
        { id: 13, name: "Ketchup" },
        { id: 14, name: "Mustard" },
        { id: 15, name: "Mayonnaise" },
        { id: 16, name: "BBQ Sauce" },
        { id: 17, name: "Caramelized Onions" },
        { id: 18, name: "Blue Cheese" },
        { id: 19, name: "Onion Rings" },
        { id: 20, name: "Crispy Fried Onions" },
    ];

    const sides = [
        { id: 1, name: "French Fries" },
        { id: 2, name: "Curly Fries" },
        { id: 3, name: "Sweet Potato Fries" },
        { id: 4, name: "Onion Rings" },
        { id: 5, name: "Chicken Nuggets" },
        { id: 6, name: "Mozzarella Sticks" },
        { id: 7, name: "Coleslaw" },
        { id: 8, name: "Side Salad" },
        { id: 9, name: "Mashed Potatoes" },
        { id: 10, name: "Garlic Bread" },
        { id: 11, name: "Mac and Cheese" },
        { id: 12, name: "Corn on the Cob" }
    ];

    return (
        <View style={{ flex: 1 }}>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                <TouchableOpacity style={styles.btnBack}>
                    <Image 
                        source={require('../assets/images/backArrow.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>

                <View style={styles.imgDiv}>
                    <Image
                        source={require('../assets/images/Cheeseburger.png')}
                        style={styles.img}
                    />
                </View>

                <Text style={styles.title}>
                    Cheeseburger
                </Text>

                <Text style={styles.description}>
                    A cheeseburger is a hamburger topped with cheese. The cheese is usually added to the meat patty shortly before serving, allowing it to melt. Cheeseburgers are often served with various toppings and condiments, such as lettuce, tomato, onion, pickles, ketchup, mustard, and mayonnaise.
                </Text>

                {/* Toppings */}
                <View style={styles.section}>
                    <Text style={styles.sousTitle}>Toppings</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {toppings.map(topping => (
                            <CardTwo key={topping.id} title={topping.name} />
                        ))}
                    </ScrollView>
                </View>

                {/* Sides */}
                <View style={styles.section}>
                    <Text style={styles.sousTitle}>Side options</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {sides.map(side => (
                            <CardTwo key={side.id} title={side.name} />
                        ))}
                    </ScrollView>
                </View>

            </ScrollView>

            {/* Bottom Fixed Section */}
            <View style={styles.bottomSection}>
                <View>
                    <Text style={styles.totalPrice}>Total</Text>
                    <View style={styles.price}>
                        <Text style={styles.nbr}>12.99</Text>
                        <Text style={styles.currency}>MAD</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnOrder}>
                    <Text style={styles.btnOrderText}>Order Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = {
    container: {
        padding: 15,
        paddingBottom: 120, 
    },

    btnBack: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 15
    },

    section: {
        width: "100%",
        marginTop: 20
    },

    imgDiv: {
        alignItems: "center",
        width: "100%",
    },
    img: {
        width: 250,
        height: 250,
        resizeMode: "contain"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        width: "100%",
        marginTop: 10
    },

    description: {
        fontSize: 16,
        lineHeight: 22,
        width: "100%",
        marginTop: 10
    },

    sousTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    bottomSection: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#eee"
    },

    price: {
        flexDirection: "row",
        alignItems: "baseline",
        gap: 5
    },

    nbr: {
        fontSize: 30,
        fontWeight: "bold"
    },

    currency: {
        fontSize: 20,
        fontWeight: "bold",
    },

    totalPrice: {
        fontSize: 16,
        fontWeight: "700",
    },

    btnOrder: {
        backgroundColor: "red",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    btnOrderText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    }
};