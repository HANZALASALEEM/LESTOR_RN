import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Home from "../bottomTabs/Home";
import Wishlist from "../bottomTabs/Wishlist";
import Catagory from "../bottomTabs/Catagory";
import Messenger from "../bottomTabs/Messenger";
import Account from "../bottomTabs/Account";

const CostomBottomNavigation = ({ navigation }) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

	// useEffect(() => {
	// 	const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
	// 		setIsKeyboardOpen(true);
	// 	});
	// 	const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
	// 		setIsKeyboardOpen(false);
	// 	});

	// 	return () => {
	// 		showSubscription.remove();
	// 		hideSubscription.remove();
	// 	};
	// }, []);

	// return (
	// 	<View style={styles.container}>
	// 		{selectedTab == 0 ? (
	// 			<Home />
	// 		) : selectedTab == 1 ? (
	// 			<Wishlist />
	// 		) : selectedTab == 2 ? (
	// 			<Catagory />
	// 		) : selectedTab == 3 ? (
	// 			<Messenger />
	// 		) : (
	// 			<Account />
	// 		)}
	// 		{!isKeyboardOpen && (
	// 			<View style={styles.bottomNav}>
	// 				<TouchableOpacity
	// 					style={styles.bottomTabs}
	// 					onPress={() => {
	// 						setSelectedTab(0);
	// 					}}
	// 				>
	// 					<Image
	// 						style={styles.tabIcon}
	// 						source={
	// 							selectedTab == 0
	// 								? require("../images/home-orange.png")
	// 								: require("../images/home.png")
	// 						}
	// 					/>
	// 				</TouchableOpacity>
	// 				<TouchableOpacity
	// 					style={styles.bottomTabs}
	// 					onPress={() => {
	// 						setSelectedTab(1);
	// 					}}
	// 				>
	// 					<Image
	// 						style={styles.tabIcon}
	// 						source={
	// 							selectedTab == 1
	// 								? require("../images/bookmark-orange.png")
	// 								: require("../images/bookmark.png")
	// 						}
	// 					/>
	// 				</TouchableOpacity>
	// 				<TouchableOpacity
	// 					style={styles.bottomTabs}
	// 					onPress={() => {
	// 						setSelectedTab(2);
	// 					}}
	// 				>
	// 					<Image
	// 						style={styles.tabIcon}
	// 						source={
	// 							selectedTab == 2
	// 								? require("../images/clipboard-orange.png")
	// 								: require("../images/clipboard.png")
	// 						}
	// 					/>
	// 				</TouchableOpacity>
	// 				<TouchableOpacity
	// 					style={styles.bottomTabs}
	// 					onPress={() => {
	// 						setSelectedTab(3);
	// 					}}
	// 				>
	// 					<Image
	// 						style={styles.tabIcon}
	// 						source={
	// 							selectedTab == 3
	// 								? require("../images/envelope-orange.png")
	// 								: require("../images/envelope.png")
	// 						}
	// 					/>
	// 				</TouchableOpacity>
	// 				<TouchableOpacity
	// 					style={styles.bottomTabs}
	// 					onPress={() => {
	// 						setSelectedTab(4);
	// 					}}
	// 				>
	// 					<Image
	// 						style={styles.tabIcon}
	// 						source={
	// 							selectedTab == 4
	// 								? require("../images/profile-user-orange.png")
	// 								: require("../images/profile-user.png")
	// 						}
	// 					/>
	// 				</TouchableOpacity>
	// 			</View>
	// 		)}
	// 	</View>

	return (
		<View style={styles.bottomNav}>
			<TouchableOpacity
				onPress={() => {
					navigation.replace("Home");
					setSelectedTab(0);
				}}
				style={styles.bottomTabs}
			>
				{selectedTab === 0 ? (
					<Image
						source={require("../images/home-orange.png")}
						style={styles.tabIcon}
					/>
				) : (
					<Image
						source={require("../images/home.png")}
						style={styles.tabIcon}
					/>
				)}
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomTabs}
				onPress={() => {
					navigation.replace("Wishlist");
					setSelectedTab(1);
				}}
			>
				{selectedTab === 1 ? (
					<Image
						source={require("../images/bookmark-orange.png")}
						style={styles.tabIcon}
					/>
				) : (
					<Image
						source={require("../images/bookmark.png")}
						style={styles.tabIcon}
					/>
				)}
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomTabs}
				onPress={() => {
					navigation.replace("Catagory");
					setSelectedTab(2);
				}}
			>
				{selectedTab === 2 ? (
					<Image
						source={require("../images/clipboard-orange.png")}
						style={styles.tabIcon}
					/>
				) : (
					<Image
						source={require("../images/clipboard.png")}
						style={styles.tabIcon}
					/>
				)}
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomTabs}
				onPress={() => {
					navigation.replace("Messenger");
					setSelectedTab(3);
				}}
			>
				{selectedTab === 3 ? (
					<Image
						source={require("../images/envelope-orange.png")}
						style={styles.tabIcon}
					/>
				) : (
					<Image
						source={require("../images/envelope.png")}
						style={styles.tabIcon}
					/>
				)}
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.replace("Profile");
					setSelectedTab(4);
				}}
				style={styles.bottomTabs}
			>
				{selectedTab === 4 ? (
					<Image
						source={require("../images/profile-user-orange.png")}
						style={styles.tabIcon}
					/>
				) : (
					<Image
						source={require("../images/profile-user.png")}
						style={styles.tabIcon}
					/>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default CostomBottomNavigation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
	},
	bottomNav: {
		width: "100%",
		height: 70,
		backgroundColor: "#f5f5f5",
		position: "absolute",
		bottom: 0,
		justifyContent: "space-evenly",
		alignItems: "center",
		flexDirection: "row",
	},
	bottomTabs: {
		width: "20%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	tabIcon: {
		width: 25,
		height: 25,
	},
});
