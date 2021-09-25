import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddToCart from "./screens/addToCart";
import OnlineShopping from "./screens/onlineShopping";
import PaymentSuccessful from "./screens/paymentSuccessful";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Online Shopping" component={OnlineShopping} />
        <Stack.Screen name="Add To Cart" component={AddToCart} />
        <Stack.Screen name="Payment Successful" component={PaymentSuccessful} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
