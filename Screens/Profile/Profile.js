//
//  美食个人页
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class 美食个人页 extends React.Component {

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
				style={styles.美食个人页View}>
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
							style={styles.个人中心背景插画Image}/>
						<View
							style={styles.ovalView}/>
						<Image
							source={require("./../../assets/images/group.png")}
							style={styles.groupImage}/>
					</View>
					<View
						style={styles.group4View}>
						<View
							style={styles.group2View}>
							<Image
								source={require("./../../assets/images/bitmap.png")}
								style={styles.bitmapImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.alexSuprunText}>Alex Suprun</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 121,
							marginLeft: 119,
							marginRight: 106,
						}}>
						<View
							style={styles.line2Copy2View}/>
						<View
							style={styles.barBlurView}/>
						<View
							style={styles.group14View}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/item-2-2.png")}
									style={styles.item2Image}/>
							</View>
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
									pointerEvents="box-none"
									style={{
										height: 24,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/fill-17.png")}
										style={styles.fill17Image}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/group-5-3.png")}
										style={styles.group5Image}/>
								</View>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/path-2.png")}
							style={styles.path2Image}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 134,
						top: 45,
						bottom: 9,
						alignItems: "center",
					}}>
					<Text
						style={styles.mineText}>Mine</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.rectangle24View}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	美食个人页View: {
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
	个人中心背景插画Image: {
		backgroundColor: "transparent",
		opacity: 0.65,
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 61,
		height: 563,
	},
	ovalView: {
		backgroundColor: "rgb(8, 61, 119)",
		opacity: 0.44,
		borderRadius: 139.82,
		borderWidth: 1,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		left: 43,
		width: 280,
		top: 0,
		height: 280,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 149,
		width: 24,
		top: 195,
		height: 23,
	},
	group4View: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 91,
		height: 72,
		marginLeft: 238,
		marginTop: 80,
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
	bitmapImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 43,
	},
	alexSuprunText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		opacity: 0,
		alignSelf: "stretch",
		marginBottom: 2,
	},
	line2Copy2View: {
		backgroundColor: "rgb(220, 220, 220)",
		position: "absolute",
		left: 43,
		width: 1,
		bottom: 0,
		height: 121,
	},
	barBlurView: {
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowRadius: 171,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 32,
		height: 83,
	},
	group14View: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 325,
		bottom: 65,
		height: 24,
	},
	item2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 23,
		height: 22,
	},
	fill17Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 23,
	},
	group5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22,
		height: 24,
	},
	path2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 106,
		width: 2,
		bottom: 84,
		height: 2,
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
	rectangle24View: {
		backgroundColor: "black",
		borderRadius: 2.5,
		width: 134,
		height: 5,
	},
})
