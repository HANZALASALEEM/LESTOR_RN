import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CostomHeader from "../costomComponent/CostomHeader";
import CostomBottomNavigation from "../costomComponent/CostomBottomNavigation";
import CostomButton from "../costomComponent/CostomButton";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
const Account = ({ navigation }) => {
	const signOutUser = () => {
		signOut(auth)
			.then(() => {
				navigation.navigate("Login");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={"#E5634D"} />
			<CostomHeader
				title={"Profile"}
				rightIcon={require("../images/bell-outline.png")}
			/>
			{/* For Profile pic, name , and email */}
			<View style={styles.avatarAndEmailContainer}>
				{/* for Picture */}
				<View style={styles.avatarContainer}>
					<Image source={require("../images/6.jpg")} style={styles.avatar} />
				</View>
				<View style={styles.emailContainer}>
					<Text style={styles.name}>Pual</Text>
					<Text style={styles.about}>Better and Better</Text>
					<Text style={styles.email}>passionui@gmail.com</Text>
				</View>
			</View>
			{/* for feedback and followers container */}
			<View style={styles.feedbackAndFollowerContainer}>
				{/* for feedback */}
				<View>
					<Text style={styles.feedbackAndFollowerValue}>97.02%</Text>
					<Text style={styles.feedbackAndFollowerTitle}>Feedback</Text>
				</View>
				{/* for item */}
				<View>
					<Text style={styles.feedbackAndFollowerValue}>999</Text>
					<Text style={styles.feedbackAndFollowerTitle}>Items</Text>
				</View>
				{/* for follower */}
				<View>
					<Text style={styles.feedbackAndFollowerValue}>120k</Text>
					<Text style={styles.feedbackAndFollowerTitle}>Followers</Text>
				</View>
			</View>
			{/* for profile page options */}
			<TouchableOpacity
				style={styles.optionsButtonContainer}
				onPress={() => {
					navigation.navigate("EditProfile");
				}}
			>
				<Text style={styles.optionsButtonContainerTitle}>Edit Profile</Text>
				<Image
					source={require("../images/right-arrow-orange.png")}
					style={styles.optionsButtonContainerIcon}
				/>
			</TouchableOpacity>
			{/* to draw a horizontal line */}
			<View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
				<View style={{ flex: 1, height: 1, backgroundColor: "#c7c7c7" }} />
			</View>
			<TouchableOpacity
				style={styles.optionsButtonContainer}
				onPress={() => {
					navigation.navigate("ChangePassword");
				}}
			>
				<Text style={styles.optionsButtonContainerTitle}>Change Password</Text>
				<Image
					source={require("../images/right-arrow-orange.png")}
					style={styles.optionsButtonContainerIcon}
				/>
			</TouchableOpacity>
			{/* to draw a horizontal line */}
			<View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
				<View style={{ flex: 1, height: 1, backgroundColor: "#c7c7c7" }} />
			</View>
			<TouchableOpacity
				style={styles.optionsButtonContainer}
				onPress={() => {
					navigation.navigate("ContactUs");
				}}
			>
				<Text style={styles.optionsButtonContainerTitle}>Contact Us</Text>
				<Image
					source={require("../images/right-arrow-orange.png")}
					style={styles.optionsButtonContainerIcon}
				/>
			</TouchableOpacity>
			{/* to draw a horizontal line */}
			<View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
				<View style={{ flex: 1, height: 1, backgroundColor: "#c7c7c7" }} />
			</View>
			<TouchableOpacity
				style={styles.optionsButtonContainer}
				onPress={() => {
					navigation.navigate("AboutUs");
				}}
			>
				<Text style={styles.optionsButtonContainerTitle}>About Us</Text>
				<Image
					source={require("../images/right-arrow-orange.png")}
					style={styles.optionsButtonContainerIcon}
				/>
			</TouchableOpacity>
			{/* to draw a horizontal line */}
			<View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
				<View style={{ flex: 1, height: 1, backgroundColor: "#c7c7c7" }} />
			</View>
			<TouchableOpacity style={styles.optionsButtonContainer}>
				<Text style={styles.optionsButtonContainerTitle}>Settings</Text>
				<Image
					source={require("../images/right-arrow-orange.png")}
					style={styles.optionsButtonContainerIcon}
				/>
			</TouchableOpacity>
			{/* for sign out button */}
			<View style={{ bottom: "-20%" }}>
				<CostomButton
					title={"Sign Out"}
					onClick={() => {
						signOutUser();
					}}
				/>
			</View>
			<CostomBottomNavigation />
		</View>
	);
};

export default Account;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	avatarAndEmailContainer: {
		width: "100%",
		height: "9%",
		flexDirection: "row",
	},
	avatarContainer: {
		width: "20%",
		alignItems: "center",
		justifyContent: "center",
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	emailContainer: {
		width: "80%",
		padding: 3,
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#2f2f2f",
	},
	about: {
		color: "#282828",
	},
	email: {
		color: "#adadad",
	},
	feedbackAndFollowerContainer: {
		width: "90%",
		height: "7%",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
	},
	feedbackAndFollowerValue: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#222222",
	},
	feedbackAndFollowerTitle: {
		fontSize: 13,
		color: "#c5c5c5",
	},
	optionsButtonContainer: {
		width: "90%",
		height: "7%",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		alignSelf: "center",
	},
	optionsButtonContainerTitle: {
		fontSize: 17,
		color: "#2d2d2d",
	},
	optionsButtonContainerIcon: {
		width: 15,
		height: 15,
	},
});
