import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic from "../assets/success.png";

export default function PaymentSuccessful({ navigation }) {
  return (
    <View style={styles.onshomain}>
      <Text style={styles.heading}>PAYMENT SUCCESSFUL</Text>
      <Text style={styles.htext}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </Text>
      <Image source={pic} style={styles.image} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("Add To Cart")}
              style={styles.prev}
            >
              Previous
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.swipe}>
          <Text style={styles.swipeone}></Text>
          <Text style={styles.swipetwo}></Text>
          <Text style={styles.swipethree}></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onshomain: {
    paddingTop: 50,
    marginHorizontal: 30,
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  htext: {
    fontSize: 18,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  btntext: {
    height: 50,
    alignSelf: "center",
    width: 170,
    borderRadius: 30,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#FF725E",
    paddingTop: 10,
    marginVertical: 50,
    color: "white",
  },
  prev: {
    color: "grey",
    fontSize: 15,
    alignSelf: "flex-start",
  },

  swipeone: {
    height: 15,
    backgroundColor: "#FF725E",
    width: 15,
    borderRadius: 10,
    opacity: 0.5,
    marginHorizontal: 1,
  },
  swipetwo: {
    height: 15,
    backgroundColor: "#FF725E",
    width: 25,
    borderRadius: 5,
    marginHorizontal: 2,
    opacity: 0.5,
  },
  swipethree: {
    height: 15,
    backgroundColor: "#FF725E",
    width: 15,
    borderRadius: 10,
  },
  swipe: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 85,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "flex-start",
  },
});
