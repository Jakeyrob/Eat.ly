import React from 'react';
import Food from './Food.jsx';
import {NutritionCounter} from './NutritionCounter.jsx';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import RaisedButton from 'material-ui/lib/raised-button';

const Meal = ({meal, foods, onRemoveClick, key}) => {
	//When adding a new meal without re-rendering the page, it is initially saved as a number (in milli)
	//The check below corrects for this condition. Getting meals from the server however already have
	//the date as a string, so there's no need to parse them
  let date = typeof meal.eatenAt === "string" ? meal.eatenAt.slice(0,10) : (new Date(meal.eatenAt)).toISOString().slice(0,10);

	let handleClick = (e) => {
		console.log("A button was clicked!",key);
		//onRemoveClick();
  }

	return (
	<div className='meal-element'>

		<Table>
		 	<TableHeader className='meal-title' displaySelectAll={false} >
        <TableRow>
          <TableHeaderColumn><h5>Meal From: {date}</h5></TableHeaderColumn>
        </TableRow>
				<NutritionCounter meals={[meal]} foods={foods} />
      </TableHeader>

      <TableBody displayRowCheckbox={false}>
			{_.keys(meal.foodsEaten).map((foodId) => {
				let name = foods[foodId]['item_name'];
				return (
						<Food className='food-entry'
							key={foodId}
							food={foods[foodId]}
							id={foodId}
							eatenInMeal={meal.foodsEaten[foodId]}
						/>
					);
				})
			}
			</TableBody>
		</Table>

		<div className='remove-button'>
			<br/>
			<RaisedButton label="Remove" style={{margin:"8px"}} onMouseDown={handleClick(key)}/>
			<br/><br/>
		</div>
    <br/>
	</div>
	);
}

export default Meal
