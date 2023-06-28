import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";

const CostomButton = ({ title, onClick }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onClick()}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CostomButton;

const styles = StyleSheet.create({
	button: {
		width: "90%",
		height: 50,
		alignSelf: "center",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#e5634d",
		marginVertical: 10,
	},
	title: {
		fontSize: 18,
		color: "#ffffff",
	},
});
