import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic1 from "../assets/addtocart.png";

export default function AddToCart({navigation}) {
  return (
    <View style={styles.onshomain}>
      <Text style={styles.heading}>ADD TO CART</Text>
      <Text style={styles.htext}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </Text>
      <Image source={pic1} style={styles.image} />
      <TouchableOpacity onPress={()=>navigation.navigate('Payment Successful')} style={styles.btn}>
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Online Shopping")} style={styles.previous}><Text>Previous</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Payment Successful") }style={styles.skip}><Text>Skip</Text></TouchableOpacity>
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
  skip: {
    color: "grey",
    fontSize: 15,
    alignSelf: "flex-end",
  },
  previous: {
    color: "grey",
    fontSize: 15,
    paddingRight: 50,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:30
  },
});
