import React from 'react';
import Food from './Food.jsx';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const Search = ({foodList, queryFoods, selectFood}) => {
  //Will store user's search query
  let query;

  //On submit, send a query to the server to match possible foods
  let handleSubmit = (e) => {
    e.preventDefault();
    queryFoods(query.getValue());
  }

  //clicking a food in the results should add it to selectedFoods
  let onFoodClick = (food) => {
    selectFood(food);
  }


  return (
    <div className='search'>
      <div className="search-header">
        <h2>What did you eat?</h2>
        <TextField hintText="enter food item" ref={(ref) => { if (ref) query = ref}} />
        <RaisedButton label="Submit" style={{margin:"8px"}} onMouseDown={handleSubmit}/>
        <br/>
      </div>

       <Table>
        <TableHeader displaySelectAll={false} >
          <TableRow>
            <TableHeaderColumn><h6>Description</h6></TableHeaderColumn>
            <TableHeaderColumn><h6>Serving Size</h6></TableHeaderColumn>
            <TableHeaderColumn><h6>Add to Meal</h6></TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody displayRowCheckbox={false} >
        {_.values(foodList).map( (food, i) => {
          return (
              <Food
                food={food}
                key={i}
                buttonAction = {onFoodClick.bind(this,food)}
                buttonIcon = "add"
              />
          );
        })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Search;
