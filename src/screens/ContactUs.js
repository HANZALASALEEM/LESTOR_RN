import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import CostomHeader from "../costomComponent/CostomHeader";
import * as MailComposer from "expo-mail-composer";
import CostomInputField from "../costomComponent/CostomInputField";
import CostomButton from "../costomComponent/CostomButton";
const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const send = () => {
		const subject = "Contact Us Form Submission";
		const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

		MailComposer.composeAsync({
			recipients: ["hanzalabutt903@gmail.com"],
			subject,
			body,
		});
	};
	return (
		<View style={styles.container}>
			<CostomHeader
				title={"Contact Us"}
				leftIcon={require("../images/left-arrow-orange.png")}
				onClickLeftIcon={() => {
					navigation.goBack();
				}}
			/>
			<View style={styles.mapView}>
				<MapView
					style={{ flex: 1 }}
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				/>
			</View>
			<View style={styles.formContainer}>
				<Text style={styles.contactDetailsTitle}>Contact Details</Text>
				<CostomInputField
					value={name}
					placeholder={"Name"}
					ChangeText={(text) => setName(text)}
				/>
				<CostomInputField
					value={email}
					placeholder={"Email"}
					ChangeText={(text) => setEmail(text)}
				/>
				<CostomInputField
					value={message}
					placeholder={"Message"}
					ChangeText={(text) => setMessage(text)}
				/>
			</View>
			<CostomButton
				title={"Send"}
				onClick={() => {
					send();
				}}
			/>
		</View>
	);
};

export default ContactUs;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	mapView: {
		width: "90%",
		height: "20%",
		alignSelf: "center",
	},
	formContainer: {
		width: "100%",
		height: "60%",
		backgroundColor: "red",
	},
	contactDetailsTitle: {
		fontSize: 18,
		fontWeight: "300",
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
