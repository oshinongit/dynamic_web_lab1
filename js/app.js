function showSelectDish(model) {
    model.removeAllObservers();
    model.addObserver(() => showSelectDish(model));
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
    model.removeAllObservers();
    model.addObserver(() => showDishDetailView(model));
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
    model.removeAllObservers();
    model.addObserver(() => showDinnerOverview(model));
    document.getElementById("content").innerHTML = "";

    var dinnerOverview = document.createElement("div");
    dinnerOverview.className = "d-flex flex-column flex-grow-1 py-4";

    var dinnerOverviewView = new DinnerOverviewView($(dinnerOverview), model);
    document.getElementById("content").appendChild(dinnerOverview);
}

function showPrintView(model) {
    model.removeAllObservers();
    model.addObserver(() => showPrintView(model));
    document.getElementById("content").innerHTML = "";

    var print = document.createElement("div");
    print.className = "h-100 flex-column flex-grow-1 py-4";

    var printView = new PrintView($(print), model);
    document.getElementById("content").appendChild(print);
}

var model = null;

class App {
    constructor() {
        this.views = new Map;
        this.activeView = "";
        this.model = new DinnerModel();
    }

    addView(name, view) {
        this.views[name] = new view(document.getElementById("content"), this.model);
        this.model.addObserver(() => { if (name == this.activeView) { this.views[name].update(); } });
    }

    setActiveView(name) {
        this.activeView = name;
        this.views[this.activeView].update();
    }

    getActiveView() {
        return this.activeView;
    }

    getModel() {
        return this.model;
    }
}

class View {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.update();
    }

    update() {
        this.container.innerHTML = "";
    }
}

class TestView extends View {
    constructor(container, model) {
        super(container, model);
    }

    update() {
        super.update();

        this.container.innerHTML = "<p>Hej!</p><button onclick='app.setActiveView(\"SelectDish\")'>Tillbaka</button>";
    }
}

class SideBarViewController{
 constructor(model) {
    document.getElementById("plusbutton").addEventListener("click",
        () => model.setNumberOfGuests(model.getNumberOfGuests() + 1) );
    document.getElementById("minusbutton").addEventListener("click",
        () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
  }
}

class SelectDishViewController{
 constructor(model) {

   let filter =  getElementById("searchfield").innerHTML;
   let type = getElementById("typeSelect").val();

   document.getElementById("searchbutton").addEventListener("click",
       () => model.setNumberOfGuests(type, filter) );

  }
}




var app = null;

$(function() {
	//We instantiate our model
    model = new DinnerModel();
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"));
    //var selectDishView = new SelectDishView($("#selectDishView"), model);
    //var sidebarView = new SidebarView($("#mydinner"), model);
    //var dishDetailView = new DishDetailView($("#dishDetailView"), model);

    $("#toggleSidebar").click(function() {
        $("#sidebar").toggleClass("hide");
    });

    app = new App();
    app.addView("SelectDish", SelectDishView);
    app.addView("DishDetail", DishDetailView);
    app.addView("Test", TestView);
    app.setActiveView("SelectDish");

    var SideBar_control = new SideBarViewController(model) //Modellen uppdateras men inte viewen. Något observer-relaterat som jag inte fattar.
    //console.log(app.views["SelectDish"]) --Den här fungerar för att komma åt viewobjektet
    //console.log(app.views["sidebarView"]) --Inte denna. Kanske för att vi skapar view:n inne i en annan klass(DishSelect etc..)


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
