import { Colors } from "@/utils/Constants";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const tabs = [
  {
    id: 1,
    name: "Popular",
  },
  {
    id: 2,
    name: "LOffers & Discount",
  },
  {
    id: 3,
    name: "Drink & Beverage",
  },
  {
    id: 4,
    name: "Completed",
  },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
      style={styles.scrollView}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          onPress={() => setActiveTab(tab.id)}
          style={[
            styles.tab,
            activeTab === tab.id ? styles.activeTab : styles.inactiveTab,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab.id
                ? styles.activeTabText
                : styles.inactiveTabText,
            ]}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingVertical: 15,
    marginTop: 15,
    paddingLeft: 22,
  },
  scrollView: {
    flexGrow: 0,
  },
  tab: {
    marginRight: 10,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  tabText: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    fontWeight: "500",
    textAlign: "center",
  },
  activeTab: {
    backgroundColor: Colors.primary,
    textAlign: "center",
  },
  inactiveTab: {
    backgroundColor: Colors.tertiary,
    textAlign: "center",
  },
  activeTabText: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.texttwo,
    fontWeight: "500",
  },
  inactiveTabText: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "500",
  },
});

export default TabComponent;
