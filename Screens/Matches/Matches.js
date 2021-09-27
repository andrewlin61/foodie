//
//  Matches
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Matches extends React.Component {

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
				style={styles.MatchesView}>
				<View
					style={styles.rectangleBlurView}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 205,
						marginLeft: 30,
						marginRight: 30,
						marginTop: 16,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.group2View}>
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
								style={styles.group10View}>
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
										style={styles.group8View}>
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
												style={styles.viewView}>
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
													<Image
														source={require("./../../assets/images/mask-7.png")}
														style={styles.maskImage}/>
												</View>
												<Text
													style={styles.aa3c1Text}>6AA3C1</Text>
												<Text
													style={styles.aa3c1TwoText}>6AA3C1</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/ww-4.png")}
											style={styles.wwImage}/>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 9,
										width: 85,
										top: 5,
										bottom: 32,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.parcelsText}>Parcels</Text>
									<Text
										style={styles.natnudoBeefText}>Natnudo Beef</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.cattyText}>$ 20.9/bag</Text>
								</View>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/group-6.png")}
							style={styles.group6Image}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group2TwoView}>
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
								style={styles.group10TwoView}>
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
										style={styles.group8TwoView}>
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
												style={styles.viewTwoView}>
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
													<Image
														source={require("./../../assets/images/mask-7.png")}
														style={styles.maskTwoImage}/>
												</View>
												<Text
													style={styles.aa3c1ThreeText}>6AA3C1</Text>
												<Text
													style={styles.aa3c1FourText}>6AA3C1</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/ww.png")}
											style={styles.wwTwoImage}/>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 9,
										width: 54,
										top: 5,
										bottom: 32,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.parcelsTwoText}>Parcels</Text>
									<Text
										style={styles.natnudoBeefTwoText}>Marbay</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.cattyTwoText}>$ 9.9/bag</Text>
								</View>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/group-6.png")}
							style={styles.group6TwoImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 205,
						marginLeft: 30,
						marginRight: 30,
						marginTop: 14,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						style={styles.group2ThreeView}>
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
								style={styles.group10ThreeView}>
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
										style={styles.group8ThreeView}>
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
											<Image
												source={require("./../../assets/images/44.png")}
												style={styles.imageImage}/>
										</View>
										<Image
											source={require("./../../assets/images/-4.png")}
											style={styles.图层4Image}/>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 9,
										width: 66,
										top: 5,
										bottom: 32,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.parcelsThreeText}>Parcels</Text>
									<Text
										style={styles.miniHojasText}>Mini Hojas</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.bagText}>$ 13.9/bag</Text>
								</View>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/group-6.png")}
							style={styles.group6ThreeImage}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group2FiveView}>
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
								style={styles.group10FiveView}>
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
										style={styles.group8FiveView}>
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
												style={styles.viewFourView}>
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
													<Image
														source={require("./../../assets/images/mask-7.png")}
														style={styles.maskFourImage}/>
												</View>
												<Text
													style={styles.aa3c1SevenText}>6AA3C1</Text>
												<Text
													style={styles.aa3c1EightText}>6AA3C1</Text>
											</View>
										</View>
										<Image
											source={require("./../../assets/images/ww-3.png")}
											style={styles.wwFourImage}/>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 9,
										width: 105,
										top: 5,
										bottom: 32,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.parcelsFiveText}>Parcels</Text>
									<Text
										style={styles.natnudoBeefFourText}>Krewetkl Shrimps</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.cattyFourText}>$ 15.9/bag</Text>
								</View>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/group-6.png")}
							style={styles.group6FiveImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					pointerEvents="box-none"
					style={{
						height: 270,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 30,
							bottom: 65,
							height: 205,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.group2FourView}>
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
									style={styles.group10FourView}>
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
											style={styles.group8FourView}>
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
													style={styles.viewThreeView}>
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
														<Image
															source={require("./../../assets/images/mask-7.png")}
															style={styles.maskThreeImage}/>
													</View>
													<Text
														style={styles.aa3c1FiveText}>6AA3C1</Text>
													<Text
														style={styles.aa3c1SixText}>6AA3C1</Text>
												</View>
											</View>
											<Image
												source={require("./../../assets/images/ww-5.png")}
												style={styles.wwThreeImage}/>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 9,
											width: 64,
											top: 5,
											bottom: 32,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.parcelsFourText}>Parcels</Text>
										<Text
											style={styles.natnudoBeefThreeText}>Ryazanski</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.cattyThreeText}>$ 10.9/bag</Text>
									</View>
								</View>
							</View>
							<Image
								source={require("./../../assets/images/group-6.png")}
								style={styles.group6FourImage}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group2SixView}>
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
									style={styles.group10SixView}>
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
											style={styles.group8SixView}>
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
													style={styles.viewFiveView}>
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
														<Image
															source={require("./../../assets/images/mask-7.png")}
															style={styles.maskFiveImage}/>
													</View>
													<Text
														style={styles.aa3c1NineText}>6AA3C1</Text>
													<Text
														style={styles.aa3c1TenText}>6AA3C1</Text>
												</View>
											</View>
											<Image
												source={require("./../../assets/images/ww-2.png")}
												style={styles.wwFiveImage}/>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 9,
											width: 68,
											top: 5,
											bottom: 32,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.parcelsSixText}>Parcels</Text>
										<Text
											style={styles.natnudoBeefFiveText}>Yate Komo</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.cattyFiveText}>$ 12.9/Barrel</Text>
									</View>
								</View>
							</View>
							<Image
								source={require("./../../assets/images/group-6.png")}
								style={styles.group6SixImage}/>
						</View>
					</View>
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
									source={require("./../../assets/images/item-2.png")}
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
	MatchesView: {
		backgroundColor: "white",
		flex: 1,
	},
	rectangleBlurView: {
		backgroundColor: "rgba(255, 255, 255, 0.9)",
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 75,
		shadowOpacity: 1,
		height: 88,
	},
	group2View: {
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	group10View: {
		backgroundColor: "transparent",
		height: 204,
	},
	group8View: {
		backgroundColor: "transparent",
		height: 204,
	},
	viewView: {
		backgroundColor: "transparent",
		height: 204,
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 203,
	},
	aa3c1Text: {
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	aa3c1TwoText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	wwImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(96, 134, 153, 0.59)",
		shadowRadius: 10,
		shadowOpacity: 1,
		resizeMode: "center",
		position: "absolute",
		left: 32,
		width: 81,
		top: 25,
		height: 101,
	},
	parcelsText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	natnudoBeefText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
		marginTop: 122,
	},
	cattyText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
	},
	group6Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 17,
		width: 16,
		bottom: 30,
		height: 15,
	},
	group2TwoView: {
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	group10TwoView: {
		backgroundColor: "transparent",
		height: 204,
	},
	group8TwoView: {
		backgroundColor: "transparent",
		height: 204,
	},
	viewTwoView: {
		backgroundColor: "transparent",
		height: 204,
	},
	maskTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 203,
	},
	aa3c1ThreeText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	aa3c1FourText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	wwTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(96, 134, 153, 0.59)",
		shadowRadius: 10,
		shadowOpacity: 1,
		resizeMode: "center",
		position: "absolute",
		left: 43,
		width: 59,
		top: 25,
		height: 101,
	},
	parcelsTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	natnudoBeefTwoText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginTop: 122,
	},
	cattyTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
	},
	group6TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 17,
		width: 16,
		bottom: 30,
		height: 15,
	},
	group2ThreeView: {
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	group10ThreeView: {
		backgroundColor: "transparent",
		height: 204,
	},
	group8ThreeView: {
		backgroundColor: "transparent",
		height: 204,
	},
	imageImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 204,
	},
	图层4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 25,
		width: 96,
		top: 37,
		height: 92,
	},
	parcelsThreeText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	miniHojasText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
		marginTop: 122,
	},
	bagText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
	},
	group6ThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 17,
		width: 16,
		bottom: 30,
		height: 15,
	},
	group2FiveView: {
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	group10FiveView: {
		backgroundColor: "transparent",
		height: 204,
	},
	group8FiveView: {
		backgroundColor: "transparent",
		height: 204,
	},
	viewFourView: {
		backgroundColor: "transparent",
		height: 204,
	},
	maskFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 203,
	},
	aa3c1SevenText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	aa3c1EightText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	wwFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(96, 134, 153, 0.59)",
		shadowRadius: 10,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 60,
		top: 25,
		height: 101,
	},
	parcelsFiveText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	natnudoBeefFourText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginTop: 122,
	},
	cattyFourText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
	},
	group6FiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 17,
		width: 16,
		bottom: 30,
		height: 15,
	},
	group2FourView: {
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	group10FourView: {
		backgroundColor: "transparent",
		height: 204,
	},
	group8FourView: {
		backgroundColor: "transparent",
		height: 204,
	},
	viewThreeView: {
		backgroundColor: "transparent",
		height: 204,
	},
	maskThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 203,
	},
	aa3c1FiveText: {
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	aa3c1SixText: {
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	wwThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(96, 134, 153, 0.59)",
		shadowRadius: 10,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 78,
		top: 19,
		height: 113,
	},
	parcelsFourText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	natnudoBeefThreeText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginTop: 122,
	},
	cattyThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
	},
	group6FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 17,
		width: 16,
		bottom: 30,
		height: 15,
	},
	group2SixView: {
		backgroundColor: "transparent",
		width: 150,
		height: 205,
	},
	group10SixView: {
		backgroundColor: "transparent",
		height: 204,
	},
	group8SixView: {
		backgroundColor: "transparent",
		height: 204,
	},
	viewFiveView: {
		backgroundColor: "transparent",
		height: 204,
	},
	maskFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 203,
	},
	aa3c1NineText: {
		backgroundColor: "transparent",
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	aa3c1TenText: {
		color: "rgb(102, 102, 102)",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 35,
		top: 94,
	},
	wwFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(96, 134, 153, 0.59)",
		shadowRadius: 10,
		shadowOpacity: 1,
		position: "absolute",
		left: 32,
		width: 82,
		top: 25,
		height: 101,
	},
	parcelsSixText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	natnudoBeefFiveText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginTop: 122,
	},
	cattyFiveText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 10,
	},
	group6SixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 17,
		width: 16,
		bottom: 30,
		height: 15,
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
