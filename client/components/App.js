
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getUser();
  }

  getUser() {
    $.get('http://localhost:3000/')
    .done((resp)=>{
      console.log(resp);
      this.setState({resp});
    });
  }


  render() {
    if (!this.state.user){
      return (
        <Login />
      )
    } else {
      return (
        <Main />
      )
    }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// var templateData = {
//     "user":{
//         "_id": 000000000,
//         "firstName": "Allen",
//         "lastName": "Price",
//         "birthdate": "01/01/1975",
//         "location": "San Francisco",
//         "weight": 160,
//         "weightGoal": 147,
//         "dietaryRestrictions": {
//             "paleo": true,
//             "vegan": true,
//             "vegetarian": false,
//         },
//         "allergies": {
//             "milk": false,
//             "eggs": false,
//             "fish": false,
//             "shellfish": false,
//             "tree_nuts": false,
//             "peanuts": false,
//             "wheat": false,
//             "soybeans": false,
//             "gluten": false,   
//         },
//     },

//     "meals": { 
//             "mealId":  {
//                 "_id": 0000000001,
//                 "createdAt": 00000000,
//                 "eatenAt": 00000000,
//                 "food": {
//                     "513fc9cb673c4fbc26005252": 3
//                 } //three tacos
//             } ,

//     },

//     "foods":{
//         "513fc9cb673c4fbc26005252": {
//              "old_api_id": "RIyWo6dUX9Fhs84e1TGL",
//              "item_id": "513fc9cb673c4fbc26005252",
//              "item_name": "Chicken Taco",
//              "leg_loc_id": 2316,
//              "brand_id": "513fbc1283aa2dc80c00045c",
//              "brand_name": "King Taco",
//              "item_description": "Tacos - Chicken",
//              "updated_at": "2015-03-18T02:03:07.000Z",
//              "nf_ingredient_statement": "",
//              "nf_water_grams": null,
//              "nf_calories": 120,
//              "nf_calories_from_fat": 35,
//              "nf_total_fat": 4,
//              "nf_saturated_fat": 1.5,
//              "nf_trans_fatty_acid": 0,
//              "nf_polyunsaturated_fat": null,
//              "nf_monounsaturated_fat": null,
//              "nf_cholesterol": null,
//              "nf_sodium": 120,
//              "nf_total_carbohydrate": 13,
//              "nf_dietary_fiber": null,
//              "nf_sugars": null,
//              "nf_protein": 9,
//              "nf_vitamin_a_dv": null,
//              "nf_vitamin_c_dv": null,
//              "nf_calcium_dv": null,
//              "nf_iron_dv": null,
//              "nf_refuse_pct": null,
//              "nf_servings_per_container": null,
//              "nf_serving_size_qty": 57,
//              "nf_serving_size_unit": "g",
//              "nf_serving_weight_grams": null,
//              "allergen_contains_milk": null,
//              "allergen_contains_eggs": null,
//              "allergen_contains_fish": null,
//              "allergen_contains_shellfish": null,
//              "allergen_contains_tree_nuts": null,
//              "allergen_contains_peanuts": null,
//              "allergen_contains_wheat": null,
//              "allergen_contains_soybeans": null,
//              "allergen_contains_gluten": null,
//              "usda_fields": null,
//             }
//     }
// };   

