import { combineReducers } from 'redux';
import QueryReducer from './QueryReducer';
import RecipesReducer from './RecipesReducer';
import SelectRecipeReducer from './SelectRecipeReducer';
import FetchingReducer from './FetchingReducer';

export default combineReducers({
	fetchingRecipe: FetchingReducer,
	query: QueryReducer,
	recipes: RecipesReducer,
	selectedRecipe: SelectRecipeReducer
});
