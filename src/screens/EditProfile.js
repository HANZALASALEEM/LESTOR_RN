import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import CostomHeader from "../costomComponent/CostomHeader";
import CostomInputField from "../costomComponent/CostomInputField";
import CostomButton from "../costomComponent/CostomButton";
import {
	collection,
	addDoc,
	doc,
	getDoc,
	setDoc,
	getDocs,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.config";

const EditProfile = ({ navigation }) => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [website, setWebsite] = useState(null);
	const [Information, setInformation] = useState(null);

	useEffect(() => {
		const readData = async () => {
			const querySnapshot = await getDocs(collection(db, "users"));
			querySnapshot.forEach((doc) => {
				console.log(`${doc.id} => ${doc.data()}`);
				setName(doc.data().name);
				setEmail(doc.data().email);
				setWebsite(doc.data().website);
				setInformation(doc.data().Information);
			});
		};
		readData();
	}, []);

	const saveData = async () => {
		try {
			const docRef = await addDoc(collection(db, "users"), {
				name: name,
				email: email,
				website: website,
				Information: Information,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<View style={styles.container}>
			<CostomHeader
				title={"Edit Profile"}
				leftIcon={require("../images/left-arrow-orange.png")}
				onClickLeftIcon={() => {
					navigation.goBack();
				}}
			/>
			{/* for profile Image */}
			<View style={styles.profileImageContainer}>
				<Image
					source={require("../images/6.jpg")}
					style={styles.profiltImage}
				/>
			</View>
			<View style={styles.formContainer}>
				<Text style={styles.formFieldTitle}>Name</Text>
				<CostomInputField
					value={name}
					placeholder={"Name"}
					ChangeText={(text) => setName(text)}
				/>
				<Text style={styles.formFieldTitle}>Email</Text>
				<CostomInputField
					value={email}
					placeholder={"Example@gmail.com"}
					ChangeText={(text) => setEmail(text)}
				/>
				<Text style={styles.formFieldTitle}>Website</Text>
				<CostomInputField
					value={website}
					placeholder={"abc.com"}
					ChangeText={(text) => setWebsite(text)}
				/>
				<Text style={styles.formFieldTitle}>Information</Text>
				<CostomInputField
					value={Information}
					placeholder={"Better and Better"}
					ChangeText={(text) => setInformation(text)}
				/>
			</View>
			<CostomButton
				title={"Confirm"}
				onClick={() => {
					saveData();
				}}
			/>
		</View>
	);
};

export default EditProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	profileImageContainer: {
		width: "100%",
		height: "12%",
		alignItems: "center",
		justifyContent: "center",
	},
	profiltImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	formContainer: {
		width: "100%",
		height: "70%",
		alignSelf: "center",
	},
	formFieldTitle: {
		fontSize: 16,
		fontWeight: "700",
		paddingHorizontal: 20,
	},
});
