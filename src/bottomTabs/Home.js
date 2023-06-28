import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CostomBottomNavigation from "../costomComponent/CostomBottomNavigation";
import CostomHeader from "../costomComponent/CostomHeader";

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<CostomHeader
				title={"Home"}
				leftIcon={require("../images/left-arrow-orange.png")}
			/>
			<Text>Home screen we will be Able to Connect. </Text>
			<CostomBottomNavigation />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
