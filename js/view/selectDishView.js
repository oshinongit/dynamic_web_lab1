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

class SelectDishView extends View {
    constructor(container, model) {
        super(container, model);
    }

    update() {
        super.update();

        // Skapa HTML-strukturen
        var sidebarView = new SidebarView(this.container, this.model);

        var selectDish = document.createElement("div");
        selectDish.className = "d-none d-flex flex-column flex-grow-1";
        this.container.appendChild(selectDish);

        let jqueryContainer = $(selectDish);
        let model = this.model;
        jqueryContainer.append('<div class=" p-2">Find a dish<div class="d-flex flex-row"><input type="text" class="w-25" placeholder="Enter keywords"><select id="typeSelect"><option value="all">All</option><option value="main dish">Main Course</option><option value="side dish">Side Dish</option><option value="dessert">Dessert</option><option value="starter">Appetizer</option></select><button class="btn btn-primary " type="button">Search</button>');
        jqueryContainer.append('<div id="dishList" class="d-flex justify-content-start p-4 flex-wrap"></div>');

        var type = jqueryContainer.find("#typeSelect").val();

        var dishes = this.model.getAllDishes(type, 0);

        if (type == "all") {
            dishes = this.model.getAllDishes("main dish");
            dishes = dishes.concat(this.model.getAllDishes("side dish"));
            dishes = dishes.concat(this.model.getAllDishes("dessert"));
            dishes = dishes.concat(this.model.getAllDishes("starter"));
        }

        var div_id = 0;

        dishes.forEach(function(dish) {
            var element = document.createElement("div");
            var view = new DishItemView(element, model, dish);
            jqueryContainer.find("#dishList").append(element);
        });
    }
}
