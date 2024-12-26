import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors } from "@/utils/Constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

interface Product {
  id: string;
  name: string;
  price: string;
  image: any;
}

const ProductItems = () => {
  const data: Product[] = [
    {
      id: "1",
      name: "Double Cheese Burger",
      price: "$7.99",
      image: require("../assets/images/burger.png"),
    },
    {
      id: "2",
      name: "Double Cheese Burger",
      price: "$7.99",
      image: require("../assets/images/burger.png"),
    },
    {
      id: "3",
      name: "Double Cheese Burger",
      price: "$7.99",
      image: require("../assets/images/burger.png"),
    },
    {
      id: "4",
      name: "Double Cheese Burger",
      price: "$7.99",
      image: require("../assets/images/burger.png"),
    },
    {
      id: "5",
      name: "Double Cheese Burger",
      price: "$7.99",
      image: require("../assets/images/burger.png"),
    },
    {
      id: "6",
      name: "Double Cheese Burger",
      price: "$7.99",
      image: require("../assets/images/burger.png"),
    },
  ];

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        <Ionicons name="add-circle-sharp" size={32} color={Colors.primary} />
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </ScrollView>
  );
};

export default ProductItems;

const styles = StyleSheet.create({
  container: {
    padding: 11,
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: Colors.tertiary,
    borderRadius: 10,
    alignItems: "center",
    padding: 7,
  },
  image: {
    width: 112,
    height: 112,
    resizeMode: "contain",
    marginBottom: "5%",
  },
  name: {
    fontSize: RFValue(10),
    fontFamily: "BarlowRegular",
    fontWeight: "500",
    color: Colors.textone,
    textAlign: "left",
    width: "90%",
    marginTop: "9%",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: "1.4%",
    marginBottom: 3,
    backgroundColor: Colors.tertiary,
  },
  price: {
    fontSize: RFValue(14),
    fontFamily: "BarlowRegular",
    fontWeight: "500",
    color: Colors.primary,
  },
});
