/** ExampleView Object constructor
 *
 * This object represents the code for one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view Object like this for every view in your UI.
 *
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
var DishDetailView = function (container, model) {
    container.html('<div id="dishDescription" class="d-flex flex-column flex-fill w-50 mx-5 mb-5"></div><div id="dishIngredients" class="d-flex flex-column flex-fill mx-5"></div>');

    var dish = model.getDish(1);
    var description = container.find("#dishDescription");
    var ingredients = container.find("#dishIngredients");
    var sum = 0;

    description.html("<h1>" + dish.name + "</h1><img width='300px' src='images/" + dish.image + "'/><p>" + dish.description + "</p><button type='button' class='btn btn-outline-dark'>Back to search</button>");

    ingredients.append("<h2>Ingredients</h2>");
    var html = "<table class='table w-100'>";
    dish.ingredients.forEach(function(ingredient) {
        html += "<tr><td>" + ingredient.quantity + " " + ingredient.unit + "</td><td>" + ingredient.name + "</td><td>" + ingredient.price + " SEK</td></tr>";
        sum += ingredient.price;
    });
    html += "<tr><td></td><td></td><td>" + sum + " SEK</td></tr>"
    html += "</table>";
    html += "<button type='button' class='btn btn-outline-dark'>Add to menu</button>"
    ingredients.append(html);
}
