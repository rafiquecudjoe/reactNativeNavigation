import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic from "../assets/onlinsh.png";

export default function OnlineShopping({ navigation }) {
  return (
    <View style={styles.onshomain}>
      <Text style={styles.heading}>ONLINE SHOPPING</Text>
      <Text style={styles.htext}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal.
      </Text>
      <Image source={pic} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Add To Cart", {
          newTitle:'ADD TO CART'
        })}
        style={styles.btn}
      >
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <View style={styles.swipe}>
          <Text style={styles.swipeone}></Text>
          <Text style={styles.swipetwo}></Text>
          <Text style={styles.swipethree}></Text>
        </View>
        <View >
        <TouchableOpacity style={styles.skip1} onPress={() => navigation.navigate("Add To Cart")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onshomain: {
    marginHorizontal: 30,
    flex: 1,
    paddingTop: 50,
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
    marginRight:20
   
  
  },
  swipeone: {
    height: 15,
    backgroundColor: "#FF725E",
    width: 15,
    borderRadius: 10,
    
    marginHorizontal:1
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
    opacity: 0.5,
    
  },
  swipe: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginHorizontal:90
    
  },
  footer: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent:"flex-end"
  },

});
