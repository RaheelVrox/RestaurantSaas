import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/utils/Constants";

const sampleData = [
  "Burger",
  "Pizza",
  "Pasta",
  "Salad",
  "Sushi",
  "Fries",
  "Tacos",
  "Steak",
];

const HeaderScreen: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setSearchQuery("");
    setFilteredData([]);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const results = sampleData.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={30} color={Colors.textone} />
        </TouchableOpacity>
        <Text style={styles.title}>Hot N’ Fast</Text>
        <TouchableOpacity onPress={toggleModal}>
          <AntDesign name="search1" size={23} color={Colors.textone} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <View style={styles.searchBox}>
              <TextInput
                style={styles.searchInput}
                placeholder="Enter keyword..."
                placeholderTextColor="#A0A0A0"
                // autoFocus
                value={searchQuery}
                onChangeText={handleSearch}
              />
              <TouchableOpacity onPress={toggleModal}>
                <AntDesign
                  name="close"
                  size={20}
                  color={Colors.textone}
                  style={{ marginRight: "2.5%" }}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.resultItem}>
                  <Text style={styles.resultText}>{item}</Text>
                </View>
              )}
              ListEmptyComponent={
                searchQuery.length > 0 ? (
                  <Text style={styles.noResultsText}>No results found</Text>
                ) : null
              }
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "4%",
  },
  title: {
    fontSize: RFValue(20),
    textAlign: "center",
    fontWeight: "700",
    color: Colors.primary,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: RFValue(55),
  },
  searchBox: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  searchInput: {
    flex: 1,
    height: RFValue(45),
    fontSize: RFValue(14),
    paddingHorizontal: 10,
    color: Colors.textone,
  },
  resultItem: {
    backgroundColor: "#fff",
    padding: RFValue(10),
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    width: "100%",
  },
  resultText: {
    fontSize: RFValue(16),
    fontFamily: "BarlowRegular",
    marginLeft: "2%",
  },
  noResultsText: {
    marginTop: RFValue(10),
    fontSize: RFValue(16),
    fontFamily: "BarlowRegular",
    color: "red",
    textAlign: "center",
  },
});

export default HeaderScreen;
