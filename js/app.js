function showSelectDish(model) {
    document.getElementById("content").innerHTML = "";

    var sidebar = document.createElement("div");
    sidebar.className = "d-flex flex-column hide";
    sidebar.style = "min-width:250px; max-width:250px;";
    var sidebarView = new SidebarView($(sidebar), model);
    document.getElementById("content").appendChild(sidebar);

    var selectDish = document.createElement("div");
    selectDish.className = "d-none d-flex flex-column flex-grow-1";

    var selectDishView = new SelectDishView($(selectDish), model);
    document.getElementById("content").appendChild(selectDish);
}

function showDishDetailView(model) {
    document.getElementById("content").innerHTML = "";

    var sidebar = document.createElement("div");
    sidebar.className = "d-flex flex-column hide";
    sidebar.style = "min-width:250px; max-width:250px;";
    var sidebarView = new SidebarView($(sidebar), model);
    document.getElementById("content").appendChild(sidebar);

    var dishDetail = document.createElement("div");
    dishDetail.className = "d-flex flex-row flex-grow-1 py-4 wrap-mobile";

    var dishDetailView = new DishDetailView($(dishDetail), model);
    document.getElementById("content").appendChild(dishDetail);
}

function showDinnerOverview(model) {
    document.getElementById("content").innerHTML = "";

    var dinnerOverview = document.createElement("div");
    dinnerOverview.className = "d-flex flex-column flex-grow-1 py-4";

    var dinnerOverviewView = new DinnerOverviewView($(dinnerOverview), model);
    document.getElementById("content").appendChild(dinnerOverview);
}

function showPrintView(model) {
    document.getElementById("content").innerHTML = "";

    var print = document.createElement("div");
    print.className = "h-100 flex-column flex-grow-1 py-4";

    var printView = new PrintView($(print), model);
    document.getElementById("content").appendChild(print);
}

var model = null;

$(function() {
	//We instantiate our model
    model = new DinnerModel();
    model.addObserver(() => showSelectDish(model));
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"));
    //var selectDishView = new SelectDishView($("#selectDishView"), model);
    //var sidebarView = new SidebarView($("#mydinner"), model);
    //var dishDetailView = new DishDetailView($("#dishDetailView"), model);


    $("#toggleSidebar").click(function() {
        $("#mydinner").toggleClass("hide");
    });

    showSelectDish(model);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
