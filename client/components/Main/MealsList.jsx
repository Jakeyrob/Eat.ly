import React from 'react';
import Meal from './Meal.jsx';
import { connect } from 'react-redux';
import NutritionCounter from './NutritionCounter.jsx';


const MealsList = ({meals, foods}) => {	
	return (
		<div className='meals-list'>
		  {meals.map((meal,i) => <Meal meal={meal} foods={foods} key={i} />)}	
		</div>

	);
}

export default MealsList
