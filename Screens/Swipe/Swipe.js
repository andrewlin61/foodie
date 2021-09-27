//
//  Swipe
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View } from "react-native"


export default class Swipe extends React.Component {

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
				style={styles.SwipeView}>
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
						source={require("./../../assets/images/bitmap-2.png")}
						style={styles.bitmapImage}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						bottom: 0,
						height: 83,
					}}>
					<View
						style={styles.barBlurView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							width: 325,
							bottom: 9,
							height: 48,
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
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
									source={require("./../../assets/images/item-2-3.png")}
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
										source={require("./../../assets/images/fill-17-2.png")}
										style={styles.fill17Image}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/group-5-2.png")}
										style={styles.group5Image}/>
								</View>
							</View>
						</View>
						<View
							style={styles.rectangle24View}/>
					</View>
					<Image
						source={require("./../../assets/images/path-2.png")}
						style={styles.path2Image}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	SwipeView: {
		backgroundColor: "white",
		flex: 1,
	},
	bitmapImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 315,
		height: 271,
	},
	barBlurView: {
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		shadowColor: "rgba(0, 0, 0, 0.12)",
		shadowRadius: 171,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 83,
	},
	group14View: {
		backgroundColor: "transparent",
		width: 325,
		height: 24,
		marginBottom: 19,
	},
	item2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 23,
		height: 22,
	},
	fill17Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 23,
	},
	group5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22,
		height: 24,
	},
	rectangle24View: {
		backgroundColor: "black",
		borderRadius: 2.5,
		width: 134,
		height: 5,
	},
	path2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 106,
		width: 2,
		bottom: 51,
		height: 2,
	},
})
