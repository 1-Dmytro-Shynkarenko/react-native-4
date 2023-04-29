import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

//components
import ProfilePost from "../../components/ProfilePost/ProfilePost";

//data
import posts from "../../assets/data/posts.js";

//images
const avatar = require("../../assets/images/avatar.png");
const imageBG = require("../../assets/images/screenBg.jpg");
const image = require("../../assets/images/postImg1.png");

//icons
const LogOutIcon = require("../../assets/icon/log-out.png");

export default function ProfileScreen({ navigation }) {
  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setdimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  return (
    <ImageBackground source={imageBG} style={styles.image}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ position: "absolute", top: 22, right: 16 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Image source={LogOutIcon} style={{}} />
        </TouchableOpacity>
        <View style={{ position: "absolute", top: -60 }}>
          <View>
            <Image
              source={avatar}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 16,
              }}
            ></Image>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                position: "absolute",

                transform: [{ rotate: "40deg" }],
                top: 80,
                right: -12,
                borderWidth: 1,
                borderColor: "#E8E8E8",
                backgroundColor: "#FFFFFF",
                justifyContent: "center",
                alignItems: "center",
                width: 25,
                height: 25,
                borderRadius: 50,
              }}
              // onPress={}
            >
              <Text style={{ color: "#E8E8E8" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginBottom: 33,
              fontSize: 30,
              lineHeight: 35,
              fontWeight: "500",
              color: "#212121",
              fontFamily: "Roboto-Bold",
            }}
          >
            Natali Romanova
          </Text>
        </View>
        {/* <FlatList
          style={{ width: dimensions }}
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => {
            const { id, image, title, comments, location, like } = item;
            return (
              <ProfilePost
                navigation={navigation}
                key={id}
                title={title}
                image={image}
                coments={comments}
                location={location}
                like={like}
              />
            );
          }}
        /> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: dimensions }}
        >
          {posts &&
            posts.map(({ id, image, title, comments, location, like }) => (
              <ProfilePost
                navigation={navigation}
                key={id}
                title={title}
                image={image}
                coments={comments}
                location={location}
                like={like}
              />
            ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingTop: 92,
    paddingBottom: 43,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  image: {
    flex: 1,
    paddingTop: 147,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  post: {
    marginBottom: 32,
  },
  postImg: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    marginBottom: 9,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  postFooter: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  postCommentThmb: {
    flexDirection: "row",
    marginRight: 24,
  },
  postCommentIcon: {
    marginRight: 9,
  },
  postCommentNumber: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  postLikeThmb: {
    flexDirection: "row",
  },
  postLikeIcon: {
    marginRight: 9,
  },
  postLikeNumber: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },
  postLocationThmb: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  postLocationIcon: {
    marginRight: 9,
  },
  postLocationTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    textDecoration: "underlin",
  },
});
