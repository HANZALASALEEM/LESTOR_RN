import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const CostomHeader = ({
	title,
	leftIcon,
	rightIcon,
	onClickLeftIcon,
	onClickRightIcon,
}) => {
	return (
		<View style={styles.header}>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					onClickLeftIcon();
				}}
			>
				<Image source={leftIcon} style={styles.icon} />
			</TouchableOpacity>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					onClickRightIcon();
				}}
			>
				<Image source={rightIcon} style={styles.icon} />
			</TouchableOpacity>
		</View>
	);
};

export default CostomHeader;

const styles = StyleSheet.create({
	header: {
		width: width,
		height: 60,
		backgroundColor: "#fff",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	btn: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		width: 24,
		height: 24,
	},
	title: {
		color: "#000000",
		fontSize: 18,
	},
});
