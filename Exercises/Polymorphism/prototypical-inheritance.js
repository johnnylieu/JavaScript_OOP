// TASK 1
// a) create HtmlElement that has a function of click which console logs 'click'
// b) tmlElement's protoype will have a function of focused which console logs 'focused'

// creating a constructor function with the click function
function HtmlElement() {
     this.click = function () {
          console.log("clicked");
     };
}
// adding focus function to HtmlElement()'s prototype
HtmlElement.prototype.focus = function () {
     console.log("focused");
};

// e will now inherit the click function from HtmlElement()
// and it will also have the focus function which inherited from HtmlElement() which inherited from its prototype.
const e = new HtmlElement();

// TASK 2
function HtmlSelectElement(items = []) {
     this.items = items;

     this.addItem = function (item) {
          this.items.push(item);
     };

     this.removeItem = function (item) {
          this.items.splice(this.items.indexOf(item), 1);
     };
}

// setting HtmlSelectElement's prototype to HtmlElement
HtmlSelectElement.prototype = new HtmlElement();

const s = new HtmlSelectElement();
