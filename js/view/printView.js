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

 class PrintView extends View {
     constructor(container, model) {
         super(container, model);
     }



     update() {
        super.update();
        let container = $(this.container);
        var html = '<div id="dinnerOverviewView" class="d-flex flex-column flex-grow-1 py-4"><div id="dinnerOverviewList" class="d-flex justify-content-between mx-5"><h2>My Dinner: ' + this.model.getNumberOfGuests() + ' people</h2><button id="buttonBackToEditDinner" type="button" class="btn btn-primary mx-5">Go back and edit dinner</button></div>';

        html += '<div id="dinnerOverviewList" class="d-flex flex-column">';

        this.model.getFullMenu().forEach(function(dish) {
            html += "<div class='d-flex m-5'><div class='text-center mx-2'>"
            html += "<img src='images/" + dish.image + "' alt='bla bla'/></div>"

            html += "<div class='ml-3'><h1>" + dish.name + "</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id fermentum sem, quis feugiat enim. Quisque nulla diam, semper a velit sit amet, porttitor porttitor libero. Nullam pharetra cursus rutrum. Nam sed pulvinar sapien, auctor congue sapien. Nullam lorem tortor, porta ut elit sit amet, commodo consequat sapien. Suspendisse malesuada arcu condimentum justo volutpat laoreet. Maecenas pretium non tortor eget fringilla. Sed suscipit turpis et dolor pretium, a ornare lacus vestibulum. Ut ullamcorper sit amet tellus ut ornare. Nulla consectetur eleifend mi et gravida. Phasellus porttitor eros sed mollis imperdiet.</p>";
            html += "</div></div>"
        });

        html += "</div>";

        container.append(html);

        this.controller = new PrintViewController(this.model);
    }
}
