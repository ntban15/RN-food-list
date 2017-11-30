import React, { Component } from 'react';
import { View, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import reducers from './reducers';
import RecipeSearch from './components/RecipeSearch';

class App extends Component {
	componentWillMount() {
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && 
			UIManager.setLayoutAnimationEnabledExperimental(true);
		}
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Header headerText={'FoodList v2'} />
					<RecipeSearch />
				</View>
			</Provider>
		);
	}
}

export default App;
