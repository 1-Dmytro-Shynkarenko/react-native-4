import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

const commentPin = require("../../assets/icon/comment-pin.png");
const mapPin = require("../../assets/icon/map-pin.png");

export default function MainPost({
  navigation,
  title,
  image,
  coments,
  location,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.post}
      onPress={() => navigation.navigate("Coments")}
    >
      <Image source={image} style={styles.postImg} />
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postFooter}>
        <View style={styles.postCommentThmb}>
          <Image style={styles.postCommentIcon} source={commentPin} />
          <Text style={styles.postCommentNumber}>{coments}</Text>
        </View>

        <View style={styles.postLocationThmb}>
          <Image style={styles.postLocationIcon} source={mapPin} />
          <Text style={styles.postLocationTitle}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: "space-between",
  },
  postCommentThmb: {
    flexDirection: "row",
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

  postLocationThmb: {
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
