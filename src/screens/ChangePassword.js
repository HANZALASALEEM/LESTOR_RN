import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import CostomHeader from "../costomComponent/CostomHeader";
import CostomInputField from "../costomComponent/CostomInputField";
import CostomButton from "../costomComponent/CostomButton";
import { auth } from "../../firebase/firebase.config";
const ChangePassword = ({ navigation }) => {
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const changePassword = () => {
		const user = auth.currentUser;
		if (password === confirmPassword) {
			const newPassword = password;

			updatePassword(user, newPassword)
				.then(() => {
					// Update successful.
				})
				.catch((error) => {
					// An error ocurred
					// ...
				});
		}
	};

	return (
		<View style={styles.container}>
			<CostomHeader
				title={"Change Password"}
				leftIcon={require("../images/left-arrow-orange.png")}
				onClickLeftIcon={() => {
					navigation.goBack();
				}}
			/>
			<View style={styles.upperGap} />
			<View>
				<Text style={styles.formFieldTitle}>Password</Text>
				<CostomInputField
					value={password}
					placeholder={"Password"}
					ChangeText={(text) => setPassword(text)}
				/>
				<Text style={styles.formFieldTitle}>Re-Password</Text>
				<CostomInputField
					value={confirmPassword}
					placeholder={"Password Confirm"}
					ChangeText={(text) => setConfirmPassword(text)}
				/>
				<CostomButton
					title={"Confirm"}
					onClick={() => {
						changePassword();
					}}
				/>
			</View>
			<View style={styles.lowerGap} />
		</View>
	);
};

export default ChangePassword;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	upperGap: {
		width: "100%",
		height: "30%",
	},
	lowerGap: {
		width: "100%",
		height: "30%",
	},
	formFieldTitle: {
		fontSize: 16,
		fontWeight: "700",
		paddingHorizontal: 20,
	},
});
