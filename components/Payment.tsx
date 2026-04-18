import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export const Payment = () => {
  const data = [
    { id: 1, name: "Order", value: "$16.48" },
    { id: 2, name: "Taxes", value: "$0.30" },
    { id: 3, name: "Delivery fees", value: "$1.50" },
  ];

  const methods = [
    { id: 1, name: "Credit or Debit Card" },
    { id: 2, name: "Cash Payment (Cash on Delivery)" },
  ];

  const total = data.reduce((sum, item) => {
    return sum + parseFloat(item.value.replace("$", ""));
  }, 0);

  return (
    <View style={styles.container}>

      {/* Order Summary Title */}
      <Text style={styles.title}>Order summary</Text>

      {/* Short preview (what user ordered) */}
      <Text style={styles.preview}>
        3 items • View details
      </Text>

      {/* Order breakdown */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.value}</Text>
          </View>
        )}

        ListFooterComponent={() => (
          <View style={[styles.row, styles.totalRow]}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>
              ${total.toFixed(2)}
            </Text>
          </View>
        )}
      />

      {/* Payment Methods */}
      <Text style={[styles.title, { marginTop: 20 }]}>
        Payment methods
      </Text>

      {methods.map((method) => (
        <TouchableOpacity key={method.id} style={styles.methodBox}>
          <Text style={styles.methodText}>{method.name}</Text>
        </TouchableOpacity>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  preview: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  cell: {
    fontSize: 16,
  },
  totalRow: {
    marginTop: 10,
    borderBottomWidth: 0,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  methodBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 10,
  },
  methodText: {
    fontSize: 16,
  },
});