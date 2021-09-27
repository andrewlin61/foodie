//
//  SignIn
//  Foodie
//
//  Created by [Author].
//  Copyright Â© 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class SignIn extends React.Component {

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
				style={styles.signInView}>
				<Image
					source={require("./../../assets/images/bitmap-3.png")}
					style={styles.bitmapImage}/>
				<View
					style={styles.edittextIconView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 81,
							height: 23,
							marginLeft: 8,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/icon-2.png")}
							style={styles.iconImage}/>
						<Text
							style={styles.PlaceholderText}>Email</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle3View}/>
				</View>
				<View
					style={styles.edittextIconCopyView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 113,
							height: 23,
							marginLeft: 8,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/icon.png")}
							style={styles.iconTwoImage}/>
						<Text
							style={styles.PlaceholderTwoText}>Password</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle3TwoView}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 241,
						height: 49,
						marginLeft: 67,
						marginTop: 46,
					}}>
					<Text
						style={styles.signInText}>Sign In</Text>
					<View
						style={styles.rectangleView}/>
					<Text
						style={styles.signInTwoText}>Sign In</Text>
				</View>
				<Text
					style={styles.forgotPasswordText}>Forgot password?</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.loginfbView}>
					<View
						style={styles.rectangle5View}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.rectangle5CopyView}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 16,
							right: 10,
							top: 16,
							height: 39,
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/facebook.png")}
							style={styles.facebookImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.signInWithFacebooText}>Sign in with facebook</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	signInView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	bitmapImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 299,
		marginTop: 7,
	},
	edittextIconView: {
		backgroundColor: "transparent",
		width: 218,
		height: 34,
		marginTop: 46,
		alignItems: "flex-start",
	},
	iconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 15,
	},
	PlaceholderText: {
		backgroundColor: "transparent",
		color: "rgb(212, 212, 212)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.34,
		marginLeft: 20,
		marginTop: 5,
	},
	rectangle3View: {
		backgroundColor: "rgb(212, 212, 212)",
		alignSelf: "stretch",
		height: 1,
	},
	edittextIconCopyView: {
		backgroundColor: "transparent",
		width: 218,
		height: 34,
		marginTop: 32,
		alignItems: "flex-start",
	},
	iconTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 14,
		height: 20,
	},
	PlaceholderTwoText: {
		color: "rgb(212, 212, 212)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.34,
		backgroundColor: "transparent",
		marginLeft: 26,
		marginTop: 5,
	},
	rectangle3TwoView: {
		backgroundColor: "rgb(212, 212, 212)",
		alignSelf: "stretch",
		height: 1,
	},
	signInText: {
		color: "white",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 80,
		top: 17,
	},
	rectangleView: {
		backgroundColor: "rgb(56, 80, 132)",
		opacity: 0.92,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 241,
		top: 0,
		height: 49,
	},
	signInTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.2,
		position: "absolute",
		left: 88,
		top: 15,
	},
	forgotPasswordText: {
		color: "rgb(101, 99, 99)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 164,
		marginTop: 26,
	},
	loginfbView: {
		backgroundColor: "transparent",
		width: 232,
		height: 58,
		marginBottom: 131,
	},
	rectangle5View: {
		backgroundColor: "rgba(56, 80, 132, 0.8)",
		borderRadius: 4,
		position: "absolute",
		left: 11,
		right: 12,
		top: 8,
		height: 50,
	},
	rectangle5CopyView: {
		backgroundColor: "rgb(56, 80, 132)",
		borderRadius: 4,
		height: 56,
	},
	facebookImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	signInWithFacebooText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 166,
		marginTop: 3,
	},
})