class SideBarViewController{
 constructor(model) {
    document.getElementById("plusbutton").addEventListener("click",
        () => model.setNumberOfGuests(model.getNumberOfGuests() + 1) );
    document.getElementById("minusbutton").addEventListener("click",
        () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
        document.getElementById("confirm_button").addEventListener("click",
            () => app.setActiveView("DishOverview") );
  }
}

class SelectDishViewController{
 constructor(model) {
       document.getElementById("searchbutton").addEventListener("click",
           () => {
               
               model.notifyObservers();
           });
       $(".dishItem").click(function(e) {
           let id = e.currentTarget.id.slice(9)
           app.setActiveView("DishDetail", id);
       });
  }
}

class DishDetailViewController{
 constructor(model) {
       document.getElementById("buttonAddToMenu").addEventListener("click",
           (e) => {
               model.addDishToMenu(e.target.dataset.dishid);
           });

       document.getElementById("backToSearchButton").addEventListener("click",
           (e) => {
               app.setActiveView("SelectDish");
           });
  }
}

class DishOverviewViewController{
 constructor(model) {
       document.getElementById("buttonBackToEditDinner").addEventListener("click",
           (e) => {
               app.setActiveView("SelectDish");
           });

       document.getElementById("printButton").addEventListener("click",
           (e) => {
               app.setActiveView("Print");
           });
  }
}

class PrintViewController{
 constructor(model) {
       document.getElementById("buttonBackToEditDinner").addEventListener("click",
           (e) => {
               app.setActiveView("SelectDish");
           });
  }
}
