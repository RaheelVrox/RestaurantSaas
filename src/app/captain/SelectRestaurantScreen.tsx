import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BackHeader from "@/components/BackHeader";
import { commonStyles } from "@/styles/commonStyles";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/utils/Constants";

const restaurants = [
  {
    id: "1",
    address: "176 Newberry Commons, Goldsboro, PA 17319, United States",
  },
  {
    id: "2",
    address: "35 Taylor Road | Newberry, PA 17319, United States",
  },
];

const SelectRestaurantScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePress = (id: string) => {
    console.log(`Selected restaurant ID: ${id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={commonStyles.container}>
        <BackHeader text="" onBackPress={handleBackPress} />
        <Text style={styles.title}>Select a restaurant</Text>
        <Text style={styles.subtitle}>
          Product price or availability may change depending on your location.
        </Text>
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handlePress(item.id)}
            >
              <Text style={styles.itemText}>{item.address}</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#DDDCDC"
                style={{ marginHorizontal: "5%" }}
              />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={<View style={styles.divider} />}
          ListFooterComponent={<View style={styles.divider} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: RFValue(15),
    fontFamily: "BarlowRegular",
    fontWeight: "900",
    color: Colors.textone,
    marginBottom: "1%",
    marginHorizontal: "5%",
    paddingTop: "2.7%",
  },
  subtitle: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
    marginBottom: "9%",
    marginHorizontal: "5%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "4.5%",
  },
  itemText: {
    fontSize: RFValue(14),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
    marginHorizontal: "5%",
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginHorizontal: "5%",
  },
  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginHorizontal: "5%",
    // marginVertical: "2%",
  },
});

export default SelectRestaurantScreen;
