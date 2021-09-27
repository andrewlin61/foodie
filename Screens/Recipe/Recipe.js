//
//  Recipe
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Recipe extends React.Component {

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
				style={styles.RecipeView}>
				<View
					style={styles.ovalView}/>
				<Image
					source={require("./../../assets/images/ojingeo-muchim-3.png")}
					style={styles.ojingeoMuchim3Image}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 57,
						height: 755,
					}}>
					<Image
						source={require("./../../assets/images/group-4.png")}
						style={styles.group4Image}/>
					<View
						style={styles.rectangleCopyView}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 29,
						right: 29,
						top: 250,
						bottom: 9,
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.ojingeoMuchimText}>Ojingeo Muchim</Text>
					<View
						pointerEvents="box-none"
						style={{
							width: 102,
							height: 30,
							marginLeft: 1,
							marginTop: 6,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-5.png")}
							style={styles.group5Image}/>
						<Text
							style={styles.textText}>5.0</Text>
					</View>
					<Text
						style={styles.introductionText}>Introduction</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 31,
							marginTop: 70,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.ingredientsText}>Ingredients</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.viewAllText}>View all</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.oneClickPurchaseText}>One-click purchase</Text>
					<View
						style={styles.rectangle24View}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						right: 20,
						width: 326,
						top: 335,
						height: 380,
						alignItems: "flex-end",
					}}>
					<Text
						style={styles.ojingeoMuchimIsAText}>Ojingeo muchim is a spicy, sweet and tangy dish that’s made with boiled squid and fresh vegetables. The perfect blend of spicy, sweet, and sour tastes in this dish will surely increase your appetite.{"\n"}</Text>
					<Text
						style={styles.mediumSquidAboutText}>1 medium squid about 14 ounces{"\n"}1 kirby cucumber or 1/2 Korean cucumber thinly sliced{"\n"}1/4 medium red onion thinly sliced{"\n"}a few stalks minari water dropwort, cut into 2-inch pieces{"\n"}1 green or red chili pepper thinly sliced{"\n"}1 scallion finely chopped{"\n"}2 teaspoons gochugaru Korean red chili pepper flakes{"\n"}1 tablespoon gochujang Korean red chili pepper paste{"\n"}2 teaspoons soy sauce{"\n"}1 teaspoon sesame oil{"\n"}1 tablespoon sugar{"\n"}1 teaspoon corn syrup{"\n"}2 tablespoons vinegar{"\n"}1 teaspoon minced garlic{"\n"}pinch salt and pepper{"\n"}</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	RecipeView: {
		backgroundColor: "white",
		flex: 1,
	},
	ovalView: {
		backgroundColor: "rgb(255, 66, 77)",
		borderRadius: 3.36,
		borderWidth: 1,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		right: 31,
		width: 7,
		top: 67,
		height: 7,
	},
	ojingeoMuchim3Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: -10,
		right: -10,
		top: -159,
		height: 589,
	},
	group4Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 41,
		height: 41,
		marginLeft: 30,
	},
	rectangleCopyView: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		height: 580,
		marginTop: 135,
	},
	ojingeoMuchimText: {
		color: "rgb(48, 56, 67)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 24,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	group5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 76,
		height: 12,
		marginTop: 1,
	},
	textText: {
		color: "rgb(88, 88, 88)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 15,
		marginLeft: 11,
	},
	introductionText: {
		color: "rgb(48, 56, 67)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 2,
	},
	ingredientsText: {
		color: "rgb(48, 56, 67)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	viewAllText: {
		color: "rgb(245, 166, 35)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 36,
		marginTop: 1,
	},
	oneClickPurchaseText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 66,
		marginBottom: 43,
	},
	rectangle24View: {
		backgroundColor: "black",
		borderRadius: 2.5,
		alignSelf: "center",
		width: 134,
		height: 5,
	},
	ojingeoMuchimIsAText: {
		backgroundColor: "transparent",
		color: "rgb(153, 153, 153)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		alignSelf: "center",
		width: 316,
	},
	mediumSquidAboutText: {
		color: "rgb(153, 153, 153)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 18,
		backgroundColor: "transparent",
		marginTop: 2,
	},
})
