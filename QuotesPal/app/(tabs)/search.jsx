import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
  // SafeAreaView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightScale, moderateScale, widthScale } from "../../utils/scale";
import fonts from "../../utils/fonts";

const search = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View style={styles.search}>
          <MaterialIcons
            style={styles.searchIcon}
            name="search"
            size={moderateScale(20)}
            color="white"
          />
          <TextInput
            style={styles.searchBar}
            placeholder="Search for a user, community, topic"
            placeholderTextColor={"#667F8E"}
          />
        </View>
        <View style={styles.discoverContainer}>
          <Text style={styles.discoverText}>Discover</Text>
        </View>
        <ScrollView
          style={styles.topicsContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.topics}>
            <Text style={styles.topicText}>Fiction</Text>
          </View>
          <View style={styles.topics}>
            <Text style={styles.topicText}>Non-fiction</Text>
          </View>
          <View style={styles.topics}>
            <Text style={styles.topicText}>Biography</Text>
          </View>
          <View style={styles.topics}>
            <Text style={styles.topicText}>Fantasy</Text>
          </View>
          <View style={styles.topics}>
            <Text style={styles.topicText}>Romance</Text>
          </View>
          <View style={styles.topics}>
            <Text style={styles.topicText}>Fantasy</Text>
          </View>
          <View style={styles.topics}>
            <Text style={styles.topicText}>Thriller</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.backRec}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <View style={styles.groupContainer}>
              <View style={styles.groupNameMembers}>
                <Text style={styles.groupNameText}>
                  Pride and Prejudice Fans
                </Text>
                <Text style={styles.groupMembersText}>2495 members</Text>
              </View>
              <View style={styles.groupJoin}>
                <Text style={styles.groupJoinText}>Join</Text>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupNameMembers}>
                <Text style={styles.groupNameText}>
                  Pride and Prejudice Fans
                </Text>
                <Text style={styles.groupMembersText}>2495 members</Text>
              </View>
              <View style={styles.groupJoin}>
                <Text style={styles.groupJoinText}>Join</Text>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupNameMembers}>
                <Text style={styles.groupNameText}>
                  Pride and Prejudice Fans
                </Text>
                <Text style={styles.groupMembersText}>2495 members</Text>
              </View>
              <View style={styles.groupJoin}>
                <Text style={styles.groupJoinText}>Join</Text>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupNameMembers}>
                <Text style={styles.groupNameText}>
                  Pride and Prejudice Fans
                </Text>
                <Text style={styles.groupMembersText}>2495 members</Text>
              </View>
              {/* TODO: Change Join text to a button */}
              <View style={styles.groupJoin}>
                <Text style={styles.groupJoinText}>Join</Text>
              </View>
            </View>
            <View style={styles.groupContainer}>
              <View style={styles.groupNameMembers}>
                <Text style={styles.groupNameText}>
                  Pride and Prejudice Fans
                </Text>
                <Text style={styles.groupMembersText}>2495 members</Text>
              </View>
              <View style={styles.groupJoin}>
                <Text style={styles.groupJoinText}>Join</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25485E",
    justifyContent: "space-between",
  },
  search: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: moderateScale(10),
    borderRadius: 6,
    width: widthScale(362),
    height: moderateScale(44),
    marginTop: moderateScale(15),
  },
  searchIcon: {
    opacity: 0.5,
    marginRight: 5,
  },
  searchBar: {
    color: "white",
  },
  discoverContainer: {
    alignItems: "center",
    marginTop: heightScale(40),
  },
  discoverText: {
    fontFamily: fonts.Roboto_Light,
    fontSize: moderateScale(25),
    color: "#D9D9D9",
  },
  topicsContainer: {
    flexDirection: "row",
    marginLeft: moderateScale(4),
    marginTop: moderateScale(20),
  },
  topics: {
    backgroundColor: "#D9D9D9",
    borderRadius: 3,
    margin: moderateScale(3),
    padding: moderateScale(5),
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  topicText: {
    fontSize: moderateScale(13),
    fontFamily: fonts.Roboto_Light,
  },
  backRec: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: heightScale(580),
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    zIndex: 2,
    overflow: "hidden",
  },
  contentContainer: {
    marginTop: heightScale(30),
    margin: moderateScale(30),
  },
  groupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: heightScale(22),
  },
  groupNameText: {
    fontFamily: fonts.Roboto_Medium,
    color: "#25485E",
    fontSize: moderateScale(15),
  },
  groupMembersText: {
    fontFamily: fonts.Roboto_Light,
    color: "#7B7B7B",
    fontSize: moderateScale(10),
  },
  groupJoin: {
    backgroundColor: "#FFD700",
    margin: 5,
    padding: 4,
    borderRadius: 3,
    justifyContent: "center",
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  groupJoinText: {
    fontFamily: fonts.Raleway_Bold,
    fontSize: moderateScale(12),
    color: "#25485E",
  },
});
export default search;
