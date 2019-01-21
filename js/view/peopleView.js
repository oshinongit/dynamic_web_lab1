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
var PeopleView = function (container, model) {
    var numberOfGuests = container.find("#numberOfGuests");
    numberOfGuests.val(model.getNumberOfGuests());

    container.find("#dishSideList").html("<table class='table w-100'><tr><td>Toast</td><td>7 SEK</td></tr><tr><td></td><td>7 SEK</td></tr></table>");
}
