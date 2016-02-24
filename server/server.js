var express = require('express');
var mongoose = require('mongoose');
var Foods = require('./models/foods.js');
var app = express();

require(__dirname + '/serverConfig/middleware.js')(app, express);
require(__dirname + '/serverConfig/routes.js')(app, express);

mongoose.connect('mongodb://127.0.0.1/photogenicFood');
//Above files configure everyting on the server. Clientside is configured in app.js in public

var foodStr = '{"old_api_id":null,"item_id":"513fceb375b8dbbc210000f3","item_name":"1% Milk - 1 cup","leg_loc_id":328,"brand_id":"513fcc648110a4cafb90ca5e","brand_name":"USDA","item_description":null,"updated_at":"2015-01-13T18:36:23.000Z","nf_ingredient_statement":null,"nf_water_grams":220.03,"nf_calories":105.35,"nf_calories_from_fat":21.39,"nf_total_fat":2.38,"nf_saturated_fat":1.48,"nf_trans_fatty_acid":null,"nf_polyunsaturated_fat":0.09,"nf_monounsaturated_fat":0.69,"nf_cholesterol":9.8,"nf_sodium":127.4,"nf_total_carbohydrate":12.18,"nf_dietary_fiber":0,"nf_sugars":null,"nf_protein":8.53,"nf_vitamin_a_dv":10,"nf_vitamin_c_dv":4,"nf_calcium_dv":31,"nf_iron_dv":1,"nf_refuse_pct":null,"nf_servings_per_container":null,"nf_serving_size_qty":1,"nf_serving_size_unit":"cup","nf_serving_weight_grams":245,"allergen_contains_milk":null,"allergen_contains_eggs":null,"allergen_contains_fish":null,"allergen_contains_shellfish":null,"allergen_contains_tree_nuts":null,"allergen_contains_peanuts":null,"allergen_contains_wheat":null,"allergen_contains_soybeans":null,"allergen_contains_gluten":null,"usda_fields":{"WATER":{"value":220.0345,"desc":"Water","uom":"g"},"ENERC_KCAL":{"value":105.35000000000001,"desc":"Energy","uom":"kcal"},"ENERC_KJ":{"value":436.1,"desc":"Energy","uom":"kJ"},"PROCNT":{"value":8.526,"desc":"Protein","uom":"g"},"FAT":{"value":2.3765,"desc":"Total lipid (fat)","uom":"g"},"ASH":{"value":1.8865000000000003,"desc":"Ash","uom":"g"},"CHOCDF":{"value":12.1765,"desc":"Carbohydrate, by difference","uom":"g"},"FIBTG":{"value":0,"desc":"Fiber, total dietary","uom":"g"},"CA":{"value":313.6,"desc":"Calcium, Ca","uom":"mg"},"FE":{"value":0.12250000000000001,"desc":"Iron, Fe","uom":"mg"},"MG":{"value":34.300000000000004,"desc":"Magnesium, Mg","uom":"mg"},"P":{"value":245.00000000000003,"desc":"Phosphorus, P","uom":"mg"},"K":{"value":396.90000000000003,"desc":"Potassium, K","uom":"mg"},"NA":{"value":127.4,"desc":"Sodium, Na","uom":"mg"},"ZN":{"value":0.9800000000000001,"desc":"Zinc, Zn","uom":"mg"},"CU":{"value":0.0245,"desc":"Copper, Cu","uom":"mg"},"MN":{"value":0.004900000000000001,"desc":"Manganese, Mn","uom":"mg"},"SE":{"value":5.635,"desc":"Selenium, Se","uom":"µg"},"VITC":{"value":2.45,"desc":"Vitamin C, total ascorbic acid","uom":"mg"},"THIA":{"value":0.098,"desc":"Thiamin","uom":"mg"},"RIBF":{"value":0.42385,"desc":"Riboflavin","uom":"mg"},"NIA":{"value":0.2205,"desc":"Niacin","uom":"mg"},"PANTAC":{"value":0.8232000000000002,"desc":"Pantothenic acid","uom":"mg"},"VITB6A":{"value":0.11025,"desc":"Vitamin B-6","uom":"mg"},"FOL":{"value":12.25,"desc":"Folate, total","uom":"µg"},"FOLAC":{"value":0,"desc":"Folic acid","uom":"µg"},"FOLFD":{"value":12.25,"desc":"Folate, food","uom":"µg"},"FOLDFE":{"value":12.25,"desc":"Folate, DFE","uom":"µg"},"VITB12":{"value":0.931,"desc":"Vitamin B-12","uom":"µg"},"VITA_RAE":{"value":144.55,"desc":"Vitamin A, RAE","uom":"µg"},"RETOL":{"value":142.10000000000002,"desc":"Retinol","uom":"µg"},"VITA_IU":{"value":499.8,"desc":"Vitamin A, IU","uom":"IU"},"VITD":{"value":98,"desc":"Vitamin D","uom":"IU"},"FASAT":{"value":1.4798,"desc":"Fatty acids, total saturated","uom":"g"},"F4D0":{"value":0.07595,"desc":"4:0","uom":"g"},"F6D0":{"value":0.04655,"desc":"6:0","uom":"g"},"F8D0":{"value":0.02695,"desc":"8:0","uom":"g"},"F10D0":{"value":0.058800000000000005,"desc":"10:0","uom":"g"},"F12D0":{"value":0.06615,"desc":"12:0","uom":"g"},"F14D0":{"value":0.24010000000000004,"desc":"14:0","uom":"g"},"F16D0":{"value":0.62475,"desc":"16:0","uom":"g"},"F18D0":{"value":0.2891,"desc":"18:0","uom":"g"},"FAMS":{"value":0.6860000000000002,"desc":"Fatty acids, total monounsaturated","uom":"g"},"F16D1":{"value":0.0539,"desc":"16:1 undifferentiated","uom":"g"},"F18D1":{"value":0.5978,"desc":"18:1 undifferentiated","uom":"g"},"F20D1":{"value":0,"desc":"20:1","uom":"g"},"F22D1":{"value":0,"desc":"22:1 undifferentiated","uom":"g"},"FAPU":{"value":0.0882,"desc":"Fatty acids, total polyunsaturated","uom":"g"},"F18D2":{"value":0.0539,"desc":"18:2 undifferentiated","uom":"g"},"F18D3":{"value":0.034300000000000004,"desc":"18:3 undifferentiated","uom":"g"},"F18D4":{"value":0,"desc":"18:4","uom":"g"},"F20D4":{"value":0,"desc":"20:4 undifferentiated","uom":"g"},"F20D5":{"value":0,"desc":"20:5 n-3 (EPA)","uom":"g"},"F22D5":{"value":0,"desc":"22:5 n-3 (DPA)","uom":"g"},"F22D6":{"value":0,"desc":"22:6 n-3 (DHA)","uom":"g"},"CHOLE":{"value":9.8,"desc":"Cholesterol","uom":"mg"},"TRP_G":{"value":0.12005000000000002,"desc":"Tryptophan","uom":"g"},"THR_G":{"value":0.38465000000000005,"desc":"Threonine","uom":"g"},"ILE_G":{"value":0.51695,"desc":"Isoleucine","uom":"g"},"LEU_G":{"value":0.8354500000000001,"desc":"Leucine","uom":"g"},"LYS_G":{"value":0.6762000000000001,"desc":"Lysine","uom":"g"},"MET_G":{"value":0.21315,"desc":"Methionine","uom":"g"},"CYS_G":{"value":0.07840000000000001,"desc":"Cystine","uom":"g"},"PHE_G":{"value":0.4116000000000001,"desc":"Phenylalanine","uom":"g"},"TYR_G":{"value":0.4116000000000001,"desc":"Tyrosine","uom":"g"},"VAL_G":{"value":0.5708500000000001,"desc":"Valine","uom":"g"},"ARG_G":{"value":0.30870000000000003,"desc":"Arginine","uom":"g"},"HISTN_G":{"value":0.2303,"desc":"Histidine","uom":"g"},"ALA_G":{"value":0.294,"desc":"Alanine","uom":"g"},"ASP_G":{"value":0.6468,"desc":"Aspartic acid","uom":"g"},"GLU_G":{"value":1.7860500000000001,"desc":"Glutamic acid","uom":"g"},"GLY_G":{"value":0.18130000000000002,"desc":"Glycine","uom":"g"},"PRO_G":{"value":0.8256500000000001,"desc":"Proline","uom":"g"},"SER_G":{"value":0.46305,"desc":"Serine","uom":"g"},"ALC":{"value":0,"desc":"Alcohol, ethyl","uom":"g"}}}';
var foodObj = JSON.parse(foodStr);

Foods.create(foodObj, function(err, newFood) {
	console.log('uccess i think');
});

app.listen(3000, function() {
	console.log('listening on 3000');
});
