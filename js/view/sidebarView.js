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

class SidebarView extends View {
    constructor(container, model) {

        super(container, model);

        this.plusButton = "fisk";
    }



    update() {
        super.update();

        var sidebar = document.createElement("div");
        this.container.appendChild(sidebar);
        sidebar.className = "d-flex flex-column hide";
        sidebar.style = "min-width:250px; max-width:250px;";
        let container = $(sidebar);
        let model = this.model;

        var our_menu = model.getFullMenu();
        var html = '<div class="container"><p>My Dinner</p><div class="d-flex flex-column"><p>People:</p><div id="buttons_people"><div class="input-group"><input disabled type="text" class="w-25" value="' + model.getNumberOfGuests() + '" id="numberOfGuests"><div class="input-group-append"><button id="plusbutton" class="btn btn-outline-dark" type="button">+</button><button id="minusbutton" class="btn btn-outline-dark" type="button">-</button></div></div></div><div id="dishSideList" class="mt-5"></div></div></div>';
        html += "<table class='table w-100'>";

        our_menu.forEach(function(dish){
          var dish_price = 0;
          html += "<tr><td>" + dish.name + "</td>";
          var dish_ingredients = dish.ingredients;
          dish_ingredients.forEach(function(ingredient) {
            dish_price += ingredient.price * model.getNumberOfGuests();
          });

          html += "<td>" + dish_price + " SEK</td></tr>"

        });

        html += "<tr><td></td><td>"+ model.getTotalMenuPrice() + " SEK</td></tr></table><button id='confirm_button' class='btn btn-outline-dark' type='button'>Confirm Dinner</button>"

        container.html(html);

        this.controller = new SideBarViewController(this.model); //Modellen uppdateras men inte viewen. Något observer-relaterat som jag inte fattar.
    }
}
