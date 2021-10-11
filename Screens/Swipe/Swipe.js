//
//  Swipe
//  Foodie
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React, { Component } from "react"
import { Button, Text, Image, StyleSheet, View } from "react-native"
import Swiper from 'react-native-deck-swiper'

function * range (start, end) {
	for (let i = start; i <= end; i++) {
	  yield i
	}
  }

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
		this.state = {
			cards: [...range(1, 50)],
			swipedAllCards: false,
			swipeDirection: '',
			cardIndex: 0
		}
	}

	componentDidMount() {
	
	}

	renderCard = (card, index) => {
		return (
		//   <View style={styles.card}>
		// 	<Text style={styles.text}>{card} - {index}</Text>
		//   </View>
		<View style={styles.card}>
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
		</View>
		)
	  };

	//not working on rendering navigation bar. try to fix
	renderNavigation = () => {
		return(
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
			</View>)
	};

	  onSwiped = (type) => {
		console.log(`on swiped ${type}`)
	  }
	
	  onSwipedAllCards = () => {
		this.setState({
		  swipedAllCards: true
		})
	  };
	
	  swipeLeft = () => {
		this.swiper.swipeLeft()
	  };

	  swipeBack = () => {
		this.swiper.swipeBack()
	  };
	  
	  
	render() {
		return (
			<View style={styles.container}>
			  <Swiper
				ref={swiper => {
				  this.swiper = swiper
				}}
				onSwiped={() => this.onSwiped('general')}
				onSwipedLeft={() => this.onSwiped('left')}
				onSwipedRight={() => this.onSwiped('right')}
				onSwipedTop={() => this.onSwiped('top')}
				onSwipedBottom={() => this.onSwiped('bottom')}
				onTapCard={this.swipeBack}
				cards={this.state.cards}
				cardIndex={this.state.cardIndex}
				cardVerticalMargin={80}
				renderCard={this.renderCard}
				onSwipedAll={this.onSwipedAllCards}
				stackSize={3}
				stackSeparation={15}
				overlayLabels={{
				  bottom: {
					title: 'Not sure what to do with this yet',
					style: {
					  label: {
						backgroundColor: 'yellow',
						borderColor: 'yellow',
						color: 'black',
						borderWidth: 1
					  },
					  wrapper: {
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					  }
					}
				  },
				  left: {
					title: 'NOPE',
					style: {
					  label: {
						backgroundColor: 'red',
						borderColor: 'red',
						color: 'white',
						borderWidth: 1
					  },
					  wrapper: {
						flexDirection: 'column',
						alignItems: 'flex-end',
						justifyContent: 'flex-start',
						marginTop: 30,
						marginLeft: -30
					  }
					}
				  },
				  right: {
					title: 'LIKE',
					style: {
					  label: {
						backgroundColor: 'green',
						borderColor: 'green',
						color: 'white',
						borderWidth: 1
					  },
					  wrapper: {
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						marginTop: 30,
						marginLeft: 30
					  }
					}
				  },
				  top: {
					title: 'SUPER LIKE',
					style: {
					  label: {
						backgroundColor: 'blue',
						borderColor: 'blue',
						color: 'white',
						borderWidth: 1
					  },
					  wrapper: {
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center'
					  }
					}
				  }
				}}
				animateOverlayLabelsOpacity
				animateCardOpacity
				swipeBackCard
			  >
				<Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
			  </Swiper>
			  <View
			  //FOR NAVIGATION BAR
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
		)
		// return <View
		// 		style={styles.SwipeView}>
		// 		<View
		// 			pointerEvents="box-none"
		// 			style={{
		// 				position: "absolute",
		// 				alignSelf: "center",
		// 				top: 0,
		// 				bottom: 0,
		// 				justifyContent: "center",
		// 			}}>
		// 			<Image
		// 				source={require("./../../assets/images/bitmap-2.png")}
		// 				style={styles.bitmapImage}/>
		// 		</View>
		// 		<View
		// 			pointerEvents="box-none"
		// 			style={{
		// 				position: "absolute",
		// 				left: 0,
		// 				right: 0,
		// 				bottom: 0,
		// 				height: 83,
		// 			}}>
		// 			<View
		// 				style={styles.barBlurView}/>
		// 			<View
		// 				pointerEvents="box-none"
		// 				style={{
		// 					position: "absolute",
		// 					alignSelf: "center",
		// 					width: 325,
		// 					bottom: 9,
		// 					height: 48,
		// 					justifyContent: "flex-end",
		// 					alignItems: "center",
		// 				}}>
		// 				<View
		// 					style={styles.group14View}>
		// 					<View
		// 						pointerEvents="box-none"
		// 						style={{
		// 							position: "absolute",
		// 							alignSelf: "center",
		// 							top: 0,
		// 							bottom: 0,
		// 							justifyContent: "center",
		// 						}}>
		// 						<Image
		// 							source={require("./../../assets/images/item-2-3.png")}
		// 							style={styles.item2Image}/>
		// 					</View>
		// 					<View
		// 						pointerEvents="box-none"
		// 						style={{
		// 							position: "absolute",
		// 							left: 0,
		// 							right: 0,
		// 							top: 0,
		// 							bottom: 0,
		// 							justifyContent: "center",
		// 						}}>
		// 						<View
		// 							pointerEvents="box-none"
		// 							style={{
		// 								height: 24,
		// 								flexDirection: "row",
		// 								alignItems: "center",
		// 							}}>
		// 							<Image
		// 								source={require("./../../assets/images/fill-17-2.png")}
		// 								style={styles.fill17Image}/>
		// 							<View
		// 								style={{
		// 									flex: 1,
		// 								}}/>
		// 							<Image
		// 								source={require("./../../assets/images/group-5-2.png")}
		// 								style={styles.group5Image}/>
		// 						</View>
		// 					</View>
		// 				</View>
		// 				<View
		// 					style={styles.rectangle24View}/>
		// 			</View>
		// 			<Image
		// 				source={require("./../../assets/images/path-2.png")}
		// 				style={styles.path2Image}/>
		// 		</View>
		// 	</View>
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

	container: {
		flex: 1,
		backgroundColor: '#FAC898'
	  },
	  card: {
		flex: 1,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#E8E8E8',
		justifyContent: 'center',
		backgroundColor: 'white'
	  },
	  text: {
		textAlign: 'center',
		fontSize: 50,
		backgroundColor: 'transparent'
	  },
	  done: {
		textAlign: 'center',
		fontSize: 30,
		color: 'white',
		backgroundColor: 'transparent'
	  }
})
