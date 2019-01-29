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
var SidebarView = function (container, model) {

    var totalprice = 0;

    var our_menu = model.getFullMenu();
    var html = '<div class="container"><p>My Dinner</p><div class="d-flex flex-column"><p>People:</p><div id="buttons_people"><div class="input-group"><input type="text" class="w-25" value="' + model.getNumberOfGuests() + '" id="numberOfGuests"><div class="input-group-append"><button class="btn btn-outline-dark" type="button">+</button><button class="btn btn-outline-dark" type="button">-</button></div></div></div><div id="dishSideList" class="mt-5"></div></div></div>';
    html += "<table class='table w-100'>";

    our_menu.forEach(function(dish){
      var dish_price = 0;
      html += "<tr><td>" + dish.name + "</td>";
      var dish_ingredients = dish.ingredients;
      dish_ingredients.forEach(function(ingredient) {
        totalprice += ingredient.price;
        dish_price += ingredient.price;
      });

      html += "<td>" + dish_price + " SEK</td></tr>"

    });

    html += "<tr><td></td><td>"+ totalprice + " SEK</td></tr></table>"

    container.html(html);


    //container.find("#dishSideList").html("<table class='table w-100'><tr><td>" + myDish.name + "</td><td>" + totalprice + " SEK</td></tr><tr><td></td><td>"+ "TOTAL PRICE FOR ALL DISHES" +" SEK</td></tr></table>");
}
