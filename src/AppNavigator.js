import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./bottomTabs/Home";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Account from "./bottomTabs/Account";
import Wishlist from "./bottomTabs/Wishlist";
import Catagory from "./bottomTabs/Catagory";
import Messenger from "./bottomTabs/Messenger";
import EditProfile from "./screens/EditProfile";
import ChangePassword from "./screens/ChangePassword";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
const Stack = createStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Profile">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Signup"
					component={SignupScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Wishlist"
					component={Wishlist}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Catagory"
					component={Catagory}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Messenger"
					component={Messenger}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Profile"
					component={Account}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="EditProfile"
					component={EditProfile}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ChangePassword"
					component={ChangePassword}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ContactUs"
					component={ContactUs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="AboutUs"
					component={AboutUs}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});
