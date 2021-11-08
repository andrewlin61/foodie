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
import * as SecureStore from 'expo-secure-store';

var Matches = []

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
			cards: [{imageURL: "https://www.cs.virginia.edu/~dgg6b/Mobile/Images/PodCastImage3.png"},{imageURL: "https://www.cs.virginia.edu/~dgg6b/Mobile/Images/PodCastImage2.png"}],
			swipedAllCards: false,
			swipeDirection: '',
			cardIndex: 0
		}
	}

	componentDidMount() {
	}

	renderCard = (card, index) => {
		console.log( "Card value" + JSON.stringify(card))
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
				source={{uri: card.imageURL}}
				style={styles.bitmapImage}/>
			</View>
		</View>
		)
	  };

	  onSwiped = (type) => {
		this.setState((state)=>{
			return {...state,
				cardIndex: state.cardIndex + 1
			}
		})
		Matches.push(this.state.cardIndex)
		SecureStore.setItemAsync("Matches", JSON.stringify(Matches))
		console.log('on swiped ' + JSON.stringify(this.state.cards[this.state.cardIndex]))
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
				//onSwiped={() => this.onSwiped(this.state.cardIndex)}
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
				backgroundColor={'#ff7b57'}
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
			  </Swiper>
			</View>
		)

	}
}

const styles = StyleSheet.create({
	SwipeView: {
		backgroundColor: "white",
		flex: 1,
	},

	bitmapImage: {
		height: 400,
		width: 200,
	},

	container: {
		flex: 1,
		backgroundColor: '#FAC898'
	  },
	  card: {
		flex: 1,
		borderRadius: 4,
		borderWidth: 2,
		bottom: 20,
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
