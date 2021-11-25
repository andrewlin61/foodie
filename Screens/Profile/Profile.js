
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { CheckBox } from 'react-native-elements'

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
		this.state = {
			checked1: false,
			checked2: false,
			checked3: false,
			checked4: false,
			checked5: false,
			checked6: false,
			checked7: false,
			checked8: false,
		}
	}

	componentDidMount() {
	}

	// onIconPress = () => {
	// 	this.setState({
	// 	  checked: true,
	// 	})
	//   };
	
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
						<Image
							source={require("./../../assets/images/image.png")}
							style={styles.blob2}/>
					</View>
					<View
						style={styles.ProfileIconLocation}>
						<View
							style={styles.group2View}>
							<Image
								source={require("./../../assets/images/carrot.png")}
								style={styles.ProfileIcon}/>
						</View>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={styles.mineTextStyle}>
					<Text
						style={styles.mineText}>Preferences</Text>
					<CheckBox
						title='Vegetarian'
						checked={this.state.checked1}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked1: !this.state.checked1})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='Vegan'
						checked={this.state.checked2}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked2: !this.state.checked2})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='Pescatarian'
						checked={this.state.checked3}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked3: !this.state.checked3})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='Gluten Free'
						checked={this.state.checked4}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked4: !this.state.checked4})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='Low Calories'
						checked={this.state.checked5}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked5: !this.state.checked5})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='High Calories'
						checked={this.state.checked6}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked6: !this.state.checked6})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='Not Spicy'
						checked={this.state.checked7}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked7: !this.state.checked7})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
					<CheckBox
						title='No Desserts'
						checked={this.state.checked8}
						textStyle={styles.checkboxTextStyle}
						onPress={() => this.setState({checked8: !this.state.checked8})}
						uncheckedColor='#6EACF2'
						checkedColor='green'
						containerStyle={styles.checkboxStyle}
					/>
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
	blob2: {
		backgroundColor: "transparent",
		opacity: 0.65,
		resizeMode: "cover",
		position: "absolute",
		left: -150,
		right: 0,
		top: 650,
		height: 563,
		transform: [{ rotate: '90deg'}]
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
	ProfileIconLocation: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: -50,
		marginTop: -400,
		alignItems: "center",
	},
	group2View: {
		backgroundColor: "transparent",
		borderWidth: 2,
		borderColor: "grey",
		borderStyle: "solid",
		shadowColor: "rgba(0, 0, 0, 0.05)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 38,
		height: 38,
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
		left: -120,
		width: 134,
		top: 85,
		bottom: 9,
		alignItems: "center",
	},
	mineText: {
		color: "#304C72",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textDecorationLine: 'underline',
		textAlign: "center",
		backgroundColor: "transparent",
	},
	checkboxStyle: {
		left: -30,
		top: 30,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		width: 150,
	},
	checkboxTextStyle: {
		color: '#304C72',
	},
})
