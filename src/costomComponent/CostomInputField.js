import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CostomInputField = ({ ChangeText, value, placeholder }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => ChangeText(text)}
				value={value}
				placeholder={placeholder}
			/>
		</View>
	);
};

export default CostomInputField;

const styles = StyleSheet.create({
	inputContainer: {
		width: "90%",
		height: 50,
		alignSelf: "center",
		marginVertical: 5,
	},
	input: {
		backgroundColor: "#f5f5f5",
		width: "100%",
		height: "100%",
		borderRadius: 5,
		padding: 10,
	},
});
