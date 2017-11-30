//Import libraries 
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
//Make header receive argument props
const Header = (props) => {
	const { textStyle, viewStyle } = styles; //destructuring referencing from object
	//multiline JSX -> parentheses ( )
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	); 
	//get headerText from argument props. put JS objects in curly braces 
	//use prop to use referenced style in component
};

const styles = {
	viewStyle: {
		backgroundColor: '#4CAF50',
		justifyContent: 'center', /* vertical */
		alignItems: 'flex-start', /* horizontal */
		height: 56,
		paddingLeft: 15,
		/*shadow for android*/
		elevation: 3,
		/*for iOS, use shadowColor, shadowOffset and shadowOpacity*/
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

//Make the Component available to other parts of the apps
//this is required when using export trick in index.js
export { Header };
