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

    var numberOfGuests = container.find("#numberOfGuests");
    numberOfGuests.val(model.getNumberOfGuests());

    var myDish = model.getDish(1);
    var totalprice = 0;

    var our_menu = model.getFullMenu();
    var html = "<table class='table w-100'>";

    our_menu.forEach(function(dish){
      var dish_price = 0;
      html += "<tr><td>" + myDish.name + "</td>";
      var dish_ingredients = myDish.ingredients;
      dish_ingredients.forEach(function(ingredient) {
        totalprice += ingredient.price;
        dish_price += ingredient.price;
      });

      html += "<td>" + dish_price + "</td></tr>"

    });

    html += "<tr><td>"+ totalprice + "</td></tr>""</table>"

    container.find("#dishSideList").html(html);


    //container.find("#dishSideList").html("<table class='table w-100'><tr><td>" + myDish.name + "</td><td>" + totalprice + " SEK</td></tr><tr><td></td><td>"+ "TOTAL PRICE FOR ALL DISHES" +" SEK</td></tr></table>");
}
