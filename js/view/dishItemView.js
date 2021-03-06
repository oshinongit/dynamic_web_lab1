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

var DishItemView = function (container, model, dish) {
    if (dish.image == "") {
        dish.image = "/images/dish.jpg"
    }

    container.innerHTML = "<div id='dishItem_" + dish.id + "' class='dishItem text-center'><img src='https://spoonacular.com/recipeImages/" + dish.image + "' alt='" + dish.title + "'/><p>" + dish.title + "</p></div>";
}
