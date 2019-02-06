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
        this.test = 33;
    }

    update() {
        var type = $(document.getElementById("typeSelect")).val();
        var search = document.getElementById("searchfield") ? document.getElementById("searchfield").value : "";
        if (type == undefined) {type = "all";}

        super.update();

        // Skapa HTML-strukturen
        var selectDish = document.createElement("div");
        selectDish.className = "d-none d-flex flex-column flex-grow-1";
        this.container.appendChild(selectDish);

        let jqueryContainer = $(selectDish);
        let model = this.model;
        jqueryContainer.append('<form><div class=" p-2">Find a dish<div class="d-flex flex-row"><input id="searchfield" type="text" class="w-25" placeholder="Enter keywords"><select id="typeSelect"><option value="all">All</option><option value="main course">Main Course</option><option value="side dish">Side Dish</option><option value="dessert">Dessert</option><option value="starter">Appetizer</option></select><button id="searchbutton" class="btn btn-primary " type="submit">Search</button></form>');
        jqueryContainer.append('<div id="dishList" class="d-flex justify-content-start p-4 flex-wrap"></div>');

        jqueryContainer.find("#dishList").html('<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>');

        this.model.getAllDishes(type, search).then(dishes => {
            jqueryContainer.find("#dishList").html("");

            if (dishes.length == 0) {
                jqueryContainer.find("#dishList").html("<p>Could not find any recipes.</p>");
            }

            dishes.forEach(function(dish) {
                var element = document.createElement("div");
                var view = new DishItemView(element, model, dish);
                jqueryContainer.find("#dishList").append(element);
            });

            this.controller = new SelectDishViewController(this.model);
        }).catch(error => {
            jqueryContainer.find("#dishList").html("<p>Could not retrieve recipes.</p>");
        });

        document.getElementById("searchfield").value = search;

        /*var dishes = [];

        if (type == "all") {
            dishes = this.model.getAllDishes("main dish", search);
            dishes = dishes.concat(this.model.getAllDishes("side dish", search));
            dishes = dishes.concat(this.model.getAllDishes("dessert", search));
            dishes = dishes.concat(this.model.getAllDishes("starter", search));
        }*/
    }
}
