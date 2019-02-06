var model = null;

class App {
    constructor() {
        this.views = new Map;
        this.viewsWithSidebar = new Map;
        this.activeView = "";
        this.model = new DinnerModel();
        this.activeData = null;
        this.sidebarView = new SidebarView(document.getElementById("sidebar"), this.model, false);
    }

    addView(name, view, shouldShowSidebar) {
        this.views[name] = new view(document.getElementById("content"), this.model);
        this.viewsWithSidebar[name] = shouldShowSidebar;
        this.model.addObserver((model, changeData) => {
            if (changeData && changeData["onlyUpdateSidebar"]) {
                this.sidebarView.update();
            }
            else {
                if (name == this.activeView) {
                    this.sidebarView.update();
                    this.views[name].update(this.activeData);
                }
            }
        });
    }

    setActiveView(name, data) {
        this.activeView = name;
        this.views[this.activeView].update(data);
        this.activeData = data;

        $(this.sidebarView.container).addClass("forceHide");
        if (this.viewsWithSidebar[this.activeView]) {
            $(this.sidebarView.container).removeClass("forceHide");
        }
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

var app = null; // app as global variable

$(function() {
	//We instantiate our model
    //model = new DinnerModel();
	// And create the instance of ExampleView
	//var exampleView = new ExampleView($("#exampleView"));
    //var selectDishView = new SelectDishView($("#selectDishView"), model);
    //var sidebarView = new SidebarView($("#mydinner"), model);
    //var dishDetailView = new DishDetailView($("#dishDetailView"), model);

    $("#toggleSidebar").click(function() {
        $("#sidebar").toggleClass("hide");
    });

    app = new App();
    app.addView("SelectDish", SelectDishView, true);
    app.addView("DishDetail", DishDetailView, true);
    app.addView("DishOverview", DishOverviewView, false);
    app.addView("Print", PrintView, false);
    app.setActiveView("SelectDish");

    //console.log(app.views["SelectDish"]) --Den här fungerar för att komma åt viewobjektet
    //console.log(app.views["sidebarView"]) --Inte denna. Kanske för att vi skapar view:n inne i en annan klass(DishSelect etc..)


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
