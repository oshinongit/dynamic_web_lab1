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

 class DishDetailView extends View {
     constructor(container, model) {
         super(container, model);
     }

     update(id) {
         super.update();

         //var sidebarView = new SidebarView(this.container, this.model);
         var dishDetail = document.createElement("div");
         dishDetail.className = "d-flex flex-row flex-grow-1 py-4 wrap-mobile";

         this.container.appendChild(dishDetail);

         let container = $(dishDetail);
         container.html('<div id="dishDescription" class="d-flex flex-column flex-fill w-50 mx-5 mb-5"></div><div id="dishIngredients" class="d-flex flex-column flex-fill mx-5"></div>');

         if (id == null) {
             return;
         }

         container.find("#dishDescription").html('<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>');
         var dish = this.model.getDish(id).then(dish => {
             var description = container.find("#dishDescription");
             var ingredients = container.find("#dishIngredients");
             var sum = 0;

             var instructions = dish.instructions == null ? "No instructions." : dish.instructions;

             description.html("<h1>" + dish.title + "</h1><img width='300px' src='" + dish.image + "'/><p>" + instructions + "</p><button id='backToSearchButton' type='button' class='btn btn-outline-dark'>Back to search</button>");

             ingredients.append("<h2>Ingredients</h2>");
             var html = "<table class='table w-100'>";
             dish.extendedIngredients.forEach(function(ingredient) {
                 html += "<tr><td>" + ingredient.amount + " " + ingredient.unit + "</td><td>" + ingredient.name + "</td><td>1 SEK</td></tr>";
                 sum += 1;
             });
             html += "<tr><td></td><td></td><td>" + sum + " SEK</td></tr>"
             html += "</table>";
             html += "<button id='buttonAddToMenu' data-dishid='" + id + "' type='button' class='btn btn-outline-dark'>Add to menu</button>"
             ingredients.append(html);

             this.controller = new DishDetailViewController(this.model);
         }).catch(error => {
             container.html("<p>Could not retrieve recipe.</p>");
         });
     }
 }
