// Android Client ID :- 714691076071-7tuk3pn74c7qcs7mgu6c7njmume0uo1g.apps.googleusercontent.com
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import CostomBottomNavigation from "../costomComponent/CostomBottomNavigation";
import CostomInputField from "../costomComponent/CostomInputField";
import CostomButton from "../costomComponent/CostomButton";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import CostomHeader from "../costomComponent/CostomHeader";
import "expo-dev-client";
//import * as Google from "expo-google-app-auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				navigation.replace("Profile");
				// ...
			}
		});
	}, []);

	const signUpUser = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				navigation.replace("Profile");
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	const signInWithGoogle = async () => {
		try {
			const config = {
				clientId:
					"714691076071-7tuk3pn74c7qcs7mgu6c7njmume0uo1g.apps.googleusercontent.com",
				scopes: ["profile", "email"],
			};

			const { type, accessToken, refreshToken, user } = await Google.logInAsync(
				config
			);

			if (type === "success") {
				const credential = auth.GoogleAuthProvider.credential(
					null,
					accessToken
				);
				await auth().signInWithCredential(credential);
			} else {
				console.log("Google sign-in canceled.");
			}
		} catch (error) {
			console.error("Error signing in with Google:", error);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={"#E5634D"} />
			{/* header */}
			<CostomHeader
				title={"Login"}
				leftIcon={require("../images/left-arrow-orange.png")}
				onClickLeftIcon={() => {
					navigation.navigate("Home");
				}}
			/>
			{/* logo */}
			<View style={styles.logoContainer}>
				<Image
					source={require("../images/profile-user-orange.png")}
					style={styles.logo}
				/>
			</View>
			{/* signup form */}
			<View style={styles.formField}>
				<CostomInputField
					value={email}
					placeholder={"Email"}
					ChangeText={(text) => setEmail(text)}
				/>

				<CostomInputField
					value={password}
					placeholder={"Password"}
					ChangeText={(text) => setPassword(text)}
				/>
				<CostomButton
					title={"Login"}
					onClick={() => {
						signUpUser();
					}}
				/>
				{/* Sign in Line */}
				<View
					style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
				>
					<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
					<View>
						<Text style={{ width: 100, textAlign: "center" }}>
							or sign in with
						</Text>
					</View>
					<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
				</View>
				{/* Facebook And Google Icon */}
				<View style={styles.signUpWithSocialIconContainer}>
					{/* for Google icon */}
					<View
						style={{
							width: "50%",

							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<TouchableOpacity
							style={styles.socialIconContainer}
							onPress={signInWithGoogle}
						>
							<Image
								source={require("../images/google.png")}
								style={styles.socialIcon}
							/>
							<Text style={{ fontSize: 16 }}>Google</Text>
						</TouchableOpacity>
					</View>
					{/* for Facebook icon */}
					<View
						style={{
							width: "50%",

							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<TouchableOpacity style={styles.socialIconContainer}>
							<Image
								source={require("../images/facebook.png")}
								style={styles.socialIcon}
							/>
							<Text style={{ fontSize: 16 }}>FaceBook</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logoContainer: {
		width: "100%",
		height: "30%",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	formField: {
		width: "100%",
		height: "70%",
		backgroundColor: "#fff",
	},
	logo: {
		width: "50%",
		height: "50%",
		padding: 100,
	},
	inputLable: {
		paddingLeft: 20,
	},
	socialIcon: {
		resizeMode: "contain",
		width: 24,
		height: 24,
		marginHorizontal: 5,
	},
	socialIconContainer: {
		flexDirection: "row",
		backgroundColor: "#F3F9FA",
		width: "80%",
		height: "80%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	signUpWithSocialIconContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		width: "100%",
		height: 40,
		marginTop: 16,
	},
});
