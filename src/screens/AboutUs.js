import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const AboutUs = () => {
	const teamData = [
		{
			id: 1,
			name: "John Doe",
			position: "CEO",
			image: require("./images/john_doe.jpg"),
		},
		{
			id: 2,
			name: "Jane Smith",
			position: "CTO",
			image: require("./images/jane_smith.jpg"),
		},
		// Add more team members here
	];

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Image
					source={require("./images/background.jpg")}
					style={styles.backgroundImage}
				/>
				<Text style={styles.aboutUsTitle}>About Us</Text>
				<Text style={styles.aboutUsText}>Some text about your company.</Text>
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.sectionHeading}>Who We Are</Text>
				<Text style={styles.sectionText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
					velit vitae ligula porta condimentum.
				</Text>
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.sectionHeading}>What We Do?</Text>
				<Text style={styles.sectionText}>
					- Service 1 {"\n"}- Service 2 {"\n"}- Service 3 {"\n"}- Service 4{" "}
					{"\n"}
				</Text>
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.sectionHeading}>Meet Our Team</Text>
				<View style={styles.teamContainer}>
					<FlatList
						data={teamData}
						numColumns={2}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<View style={styles.cardContainer}>
								<Image source={item.image} style={styles.teamImage} />
								<View style={styles.teamTextContainer}>
									<Text style={styles.teamName}>{item.name}</Text>
									<Text style={styles.teamPosition}>{item.position}</Text>
								</View>
							</View>
						)}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		height: "20%",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
		position: "absolute",
		resizeMode: "cover",
	},
	aboutUsTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#ffffff",
		textAlign: "center",
	},
	aboutUsText: {
		fontSize: 16,
		color: "#ffffff",
		textAlign: "center",
		marginTop: 10,
	},
	sectionContainer: {
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	sectionHeading: {
		fontSize: 16,
		fontWeight: "bold",
	},
	sectionText: {
		fontSize: 14,
		width: "90%",
		alignSelf: "center",
		marginTop: 10,
	},
	teamContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	cardContainer: {
		width: "48%",
		marginBottom: 20,
		backgroundColor: "#f2f2f2",
		borderRadius: 10,
		elevation: 2,
	},
	teamImage: {
		width: "100%",
		height: 150,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		resizeMode: "cover",
	},
	teamTextContainer: {
		padding: 10,
	},
	teamName: {
		fontSize: 16,
		fontWeight: "bold",
	},
	teamPosition: {
		fontSize: 14,
		marginTop: 5,
	},
});

export default AboutUs;
