import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import { widthScale, heightScale, moderateScale } from "../../utils/scale";
import posts from "../../assets/data/posts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import fonts from "../../utils/fonts";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const post = posts[0];

const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/quotesBackground.png")}
          style={styles.quotesBackgroundImage}
        />
        <Text style={styles.logoText}>QuotesPal</Text>
      </View>
      {/* <View><Text>{Dimensions.get("window").height}</Text> */}
      {/* <Text>{StatusBar.currentHeight}</Text></View> */}
      {/* TODO: create a Card component */}
      <View style={styles.backRec}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <View style={styles.contentCard}>
              <View style={styles.contentHeader}>
                <View style={styles.contentHeaderGroupAuthor}>
                  <View style={styles.contentHeaderGroup}>
                    <Text style={styles.contentHeaderGroupText}>
                      {post.group}
                    </Text>
                    <View style={styles.contentHeaderGroupIcon}>
                      <MaterialIcons
                        name="groups"
                        size={moderateScale(16)}
                        color="black"
                      />
                    </View>
                  </View>
                  <View style={styles.contentHeaderAuthorContainer}>
                    <Text style={styles.contentHeaderAuthorText}>
                      {post.author}
                    </Text>
                  </View>
                </View>
                <View style={styles.contentHeaderDateSave}>
                  <View style={styles.contentHeaderDateContainer}>
                    <Text style={styles.contentHeaderDateText}>
                      Sep 1, 2024 | 10:03
                    </Text>
                  </View>
                  <View style={styles.contentHeaderSave}>
                    <MaterialIcons
                      name="bookmark-outline"
                      size={moderateScale(20)}
                      color="black"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.quoteContainer}>
                {/* <FontAwesome6 name="quote-left" size={37} color="black" /> */}
                {/* <Text style={[styles.quoteIcon1Text, styles.quoteIconText]}>“ </Text> */}
                <Image
                  style={styles.quoteIcon1}
                  source={require("../../assets/images/openingQuotes.png")}
                />
              </View>
              <View style={styles.quoteTextContainer}>
                <Text style={styles.quoteText}>{post.quote}</Text>
                <Text style={styles.quoteAuthor}>- {post.quoteAuthor}</Text>
              </View>
              <View style={[styles.quoteIcon2, styles.qlikeuoteIcon]}>
                {/* <FontAwesome6 name="quote-right" size={37} color="black" /> */}
                {/* <Text style={[styles.quoteIcon2Text, styles.quoteIconText]}>” </Text> */}
                <Image
                  style={styles.quoteIcon2}
                  source={require("../../assets/images/closingQuotes.png")}
                />
              </View>

              <View style={styles.contentFooter}>
                <View style={styles.likeContainer}>
                  <View style={styles.likeIcon}>
                    <MaterialIcons
                      name="thumb-up-off-alt"
                      size={20}
                      color="black"
                    />
                  </View>
                  <Text style={styles.likeText}>Like</Text>
                </View>
                <View style={styles.shareContainer}>
                  <View style={styles.shareIcon}>
                    <MaterialIcons name="share" size={18} color="black" />
                  </View>
                  <Text style={styles.shareText}>Share</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentCard}>
              <View style={styles.contentHeader}>
                <View style={styles.contentHeaderGroupAuthor}>
                  <View style={styles.contentHeaderGroup}>
                    <Text style={styles.contentHeaderGroupText}>
                      {post.group}
                    </Text>
                    <View style={styles.contentHeaderGroupIcon}>
                      <MaterialIcons
                        name="groups"
                        size={moderateScale(16)}
                        color="black"
                      />
                    </View>
                  </View>
                  <View style={styles.contentHeaderAuthorContainer}>
                    <Text style={styles.contentHeaderAuthorText}>
                      {post.author}
                    </Text>
                  </View>
                </View>
                <View style={styles.contentHeaderDateSave}>
                  <View style={styles.contentHeaderDateContainer}>
                    <Text style={styles.contentHeaderDateText}>
                      Sep 1, 2024 | 10:03
                    </Text>
                  </View>
                  <View style={styles.contentHeaderSave}>
                    <MaterialIcons
                      name="bookmark-outline"
                      size={moderateScale(20)}
                      color="black"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.quoteContainer}>
                {/* <FontAwesome6 name="quote-left" size={37} color="black" /> */}
                {/* <Text style={[styles.quoteIcon1Text, styles.quoteIconText]}>“ </Text> */}
                <Image
                  style={styles.quoteIcon1}
                  source={require("../../assets/images/openingQuotes.png")}
                />
              </View>
              <View style={styles.quoteTextContainer}>
                <Text style={styles.quoteText}>
                  I declare after all there is no enjoyment like reading! How
                  much sooner one tires of any thing than of a book! -- When I
                  have a house of my own, I shall be miserable if I have not an
                  excellent library.
                </Text>
                <Text style={styles.quoteAuthor}>- {post.quoteAuthor}</Text>
              </View>
              <View style={[styles.quoteIcon2, styles.qlikeuoteIcon]}>
                {/* <FontAwesome6 name="quote-right" size={37} color="black" /> */}
                {/* <Text style={[styles.quoteIcon2Text, styles.quoteIconText]}>” </Text> */}
                <Image
                  style={styles.quoteIcon2}
                  source={require("../../assets/images/closingQuotes.png")}
                />
              </View>

              <View style={styles.contentFooter}>
                <View style={styles.likeContainer}>
                  <View style={styles.likeIcon}>
                    <MaterialIcons
                      name="thumb-up-off-alt"
                      size={20}
                      color="black"
                    />
                  </View>
                  <Text style={styles.likeText}>Like</Text>
                </View>
                <View style={styles.shareContainer}>
                  <View style={styles.shareIcon}>
                    <MaterialIcons name="share" size={18} color="black" />
                  </View>
                  <Text style={styles.shareText}>Share</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentCard}>
              <View style={styles.contentHeader}>
                <View style={styles.contentHeaderGroupAuthor}>
                  <View style={styles.contentHeaderGroup}>
                    <Text style={styles.contentHeaderGroupText}>
                      {post.group}
                    </Text>
                    <View style={styles.contentHeaderGroupIcon}>
                      <MaterialIcons
                        name="groups"
                        size={moderateScale(16)}
                        color="black"
                      />
                    </View>
                  </View>
                  <View style={styles.contentHeaderAuthorContainer}>
                    <Text style={styles.contentHeaderAuthorText}>
                      {post.author}
                    </Text>
                  </View>
                </View>
                <View style={styles.contentHeaderDateSave}>
                  <View style={styles.contentHeaderDateContainer}>
                    <Text style={styles.contentHeaderDateText}>
                      Sep 1, 2024 | 10:03
                    </Text>
                  </View>
                  <View style={styles.contentHeaderSave}>
                    <MaterialIcons
                      name="bookmark-outline"
                      size={moderateScale(20)}
                      color="black"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.quoteContainer}>
                {/* <FontAwesome6 name="quote-left" size={37} color="black" /> */}
                {/* <Text style={[styles.quoteIcon1Text, styles.quoteIconText]}>“ </Text> */}
                <Image
                  style={styles.quoteIcon1}
                  source={require("../../assets/images/openingQuotes.png")}
                />
              </View>
              <View style={styles.quoteTextContainer}>
                <Text style={styles.quoteText}>{post.quote}</Text>
                <Text style={styles.quoteAuthor}>- {post.quoteAuthor}</Text>
              </View>
              <View style={[styles.quoteIcon2, styles.qlikeuoteIcon]}>
                {/* <FontAwesome6 name="quote-right" size={37} color="black" /> */}
                {/* <Text style={[styles.quoteIcon2Text, styles.quoteIconText]}>” </Text> */}
                <Image
                  style={styles.quoteIcon2}
                  source={require("../../assets/images/closingQuotes.png")}
                />
              </View>

              <View style={styles.contentFooter}>
                <View style={styles.likeContainer}>
                  <View style={styles.likeIcon}>
                    <MaterialIcons
                      name="thumb-up-off-alt"
                      size={20}
                      color="black"
                    />
                  </View>
                  <Text style={styles.likeText}>Like</Text>
                </View>
                <View style={styles.shareContainer}>
                  <View style={styles.shareIcon}>
                    <MaterialIcons name="share" size={18} color="black" />
                  </View>
                  <Text style={styles.shareText}>Share</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25485E",
    justifyContent: "flex-end",
  },
  quotesBackgroundImage: {
    transform: [{ scale: 0.7 }],
    width: widthScale(300),
    height: heightScale(200),
    position: "relative",
    top: heightScale(90),
    left: widthScale(150),
    opacity: 0.5,
  },
  logoContainer: {
    alignSelf: "flex-start",
    margin: moderateScale(5),
    marginLeft: widthScale(20),
  },
  logoText: {
    fontSize: moderateScale(25),
    color: "#D9D9D9",
    fontFamily: fonts.AnekDevanagari_Regular,
  },
  backRec: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: heightScale(750),
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // position: "absolute",
    // alignSelf: "flex-end",
    // bottom: 0,
    zIndex: 2,
    overflow: "hidden",
  },
  contentContainer: {
    // justifyContent: "flex-end",
    // alignSelf: "flex-start",
    // zIndex: 1,
    marginTop: heightScale(30),
    alignSelf: "center",
  },
  contentCard: {
    // TODO: Set a proper max height of the Card, based on
    // the letter limit for a post
    maxHeight: heightScale(1000),
    width: widthScale(404),
    borderRadius: 11,
    padding: 10,
    zIndex: 1,
    backgroundColor: "#FAFAFA",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    // Android elevation
    elevation: 10,
    paddingVertical: heightScale(15),
    paddingHorizontal: widthScale(15),
    marginBottom: heightScale(10),
  },
  quoteTextContainer: {
    marginRight: 20,
    marginLeft: 20,
  },
  quoteText: {
    fontSize: moderateScale(18),
    fontFamily: fonts.Roboto_Medium,
    lineHeight: 25,
  },
  quoteAuthor: {
    fontFamily: fonts.Roboto_Light,
    fontSize: moderateScale(10),
    marginTop: heightScale(10),
  },
  contentHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  contentHeaderGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentHeaderGroupIcon: {
    marginLeft: widthScale(6),
  },
  contentHeaderGroupText: {
    fontFamily: fonts.Roboto_Medium,
    fontSize: moderateScale(15),
  },
  contentHeaderAuthorText: {
    fontSize: moderateScale(10),
    fontFamily: fonts.Roboto_Light,
  },
  contentHeaderDateText: {
    fontFamily: fonts.Roboto_Light,
    color: "#9B9B9B",
    fontSize: moderateScale(10),
  },
  contentHeaderDateSave: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentHeaderDateContainer: {
    marginRight: widthScale(5),
  },
  quoteContainer: {
    marginTop: moderateScale(20),
  },
  quoteIcon1: {
    alignSelf: "flex-start",
    marginLeft: widthScale(17),
    marginBottom: heightScale(15),
  },
  quoteIcon2: {
    alignSelf: "flex-end",
    marginRight: widthScale(17),
    marginTop: heightScale(5),
    marginBottom: heightScale(15),
  },
  contentFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    fontFamily: fonts.Roboto_Light,
    color: "#9B9B9B",
    marginLeft: widthScale(4),
    fontSize: moderateScale(12),
  },
  shareText: {
    fontFamily: fonts.Roboto_Light,
    color: "#9B9B9B",
    marginLeft: widthScale(4),
    fontSize: moderateScale(12),
  },
});

export default Feed;
