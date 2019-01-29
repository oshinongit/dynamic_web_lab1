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
var DinnerOverviewView = function (container, model) {
    container.html('<div id="dinnerOverviewView" class="d-flex flex-column flex-grow-1 py-4"><div id="dinnerOverviewList" class="d-flex justify-content-between mx-5"><h2>My Dinner: 3 people</h2><button type="button" class="btn btn-primary mx-5">Go back and edit dinner</button></div>');

    var html = '<div id="dinnerOverviewList" class="d-flex justify-content-center p-4 flex-wrap my-5">';

    var menu = model.getFullMenu();
    var totalPrice = 0;

    menu.forEach(function(dish) {
        var ingredients = dish.ingredients;
        var dishPrice = 0;

        ingredients.forEach(function(ingredient) {
            dishPrice += ingredient.price;
        });

        html += "<div class='text-center mx-2'><img src='images/" + dish.image + "' alt='bla bla'/><p>" + dish.name + "</p><p>" + dishPrice + " SEK</p></div>";

        totalPrice += dishPrice;
    });

    html += "<div style='border-left: 2px solid black; height: 200px;' class='mx-3'></div><div class='text-center mx-2 d-flex align-items-end'><div><p>Total</p><p>" + totalPrice + " SEK</p></div></div></div>";
    html += '<button type="button" class="btn btn-primary mx-5 btn-lg">Print full recipe</button></div>';

    container.append(html);
}
