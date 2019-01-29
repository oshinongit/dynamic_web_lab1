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

var SelectDishView = function (container, model) {
    var type = container.find("#typeSelect").val();

    var dishes = model.getAllDishes(type, 0);

    if (type == "all") {
        dishes = model.getAllDishes("main dish");
        console.log(dishes);
        dishes = dishes.concat(model.getAllDishes("side dish"));
        console.log(dishes);
        dishes = dishes.concat(model.getAllDishes("dessert"));
        console.log(dishes);
        dishes = dishes.concat(model.getAllDishes("starter"));
        console.log(dishes);
    }

    var div_id = 0;

    dishes.forEach(function(dish) {

        div_id++;
        var new_div = document.createElement("div");
        new_div.id = "dish_" + div_id;
        new_div.classList.add('text-center');
        var innerData = document.createElement("img");
        innerData.src = "images/" + dish.image;
        innerData.alt = "Missing image";

        new_div.append(innerData);
        container.find("#dishList").append(new_div);

        //container.find("#dishList").append("<div class='text-center'><img src='images/" + dish.image + "' alt='bla bla'/><p>" + dish.name + "</p></div>");
    });
}
