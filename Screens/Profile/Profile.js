
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Profile extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.ProfileView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: -119,
						right: -106,
						top: -150,
						bottom: -32,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 624,
						}}>
						<View
							style={styles.rectangleBlurView}/>
						<Image
							source={require("./../../assets/images/image.png")}
							style={styles.blob}/>
						<View
							style={styles.ovalView}/>
						{/* <Image
							source={require("./../../assets/images/group.png")}
							style={styles.gear}/> */}
					</View>
					<View
						style={styles.ProfileIconLocation}>
						<View
							style={styles.group2View}>
							<Image
								source={require("./../../assets/images/bitmap.png")}
								style={styles.ProfileIcon}/>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={styles.mineTextStyle}>
					<Text
						style={styles.mineText}>Profile</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	ProfileView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleBlurView: {
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowRadius: 171,
		shadowOpacity: 1,
		position: "absolute",
		left: 119,
		right: 106,
		top: 150,
		height: 88,
	},
	blob: {
		backgroundColor: "transparent",
		opacity: 0.65,
		resizeMode: "cover",
		position: "absolute",
		left: -150,
		right: 0,
		top: 250,
		height: 563,
	},
	ovalView: {
		backgroundColor: "rgb(8, 61, 119)",
		opacity: 0.24,
		borderRadius: 139.82,
		borderWidth: 1,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		left: -150,
		width: 280,
		top: 0,
		height: 280,
	},
	// gear: {
	// 	resizeMode: "center",
	// 	backgroundColor: "transparent",
	// 	position: "absolute",
	// 	left: 149,
	// 	width: 24,
	// 	top: 195,
	// 	height: 23,
	// },
	ProfileIconLocation: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: -50,
		marginTop: -435,
		alignItems: "center",
	},
	group2View: {
		backgroundColor: "transparent",
		borderWidth: 2,
		borderColor: "white",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 40,
		height: 43,
		marginTop: 1,
		justifyContent: "center",
	},
	ProfileIcon: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 43,
	},
	mineTextStyle: {
		position: "absolute",
		alignSelf: "center",
		right: 20,
		width: 134,
		top: 45,
		bottom: 9,
		alignItems: "center",
	},
	mineText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})
