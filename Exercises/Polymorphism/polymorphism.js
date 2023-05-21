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
// const e = new HtmlElement();

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
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const s = new HtmlSelectElement();

// this Polymorphism exercise continues from the Prototypical inheritance exercise
// TASK 1
// Continuing from the Prototypical inheritance exercise above, we’ll be using HtmlSelectElement and we will create HtmlImageElement.
// HtmlSelectElement takes in an array as an argument and has a method called render() which returns a drop down of which each element in the array as an option.
HtmlSelectElement.prototype.render = function () {
     return `
     <select>${this.items
          .map(
               (item) => `
          <option>${item}</option>`
          )
          .join("")}
     </select>
     `;
};

// TASK 2
// create HtmlImageElement which will inherit from HtmlElement and takes in a string (source of the image) as an argument and has its own render() method.
function HtmlImageElement(src = "") {
     this.src = src;
     this.render = function (src) {
          return `<img src="${this.src}" />`;
     };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

// const s = new HtmlSelectElement([1, 2, 3]);
// console.log(s.render());

// const img = new HtmlImageElement();
// img.src = "http://somethingdotcom";
// console.log(img.render());

const elements = [
     new HtmlSelectElement([1, 2, 3]),
     new HtmlImageElement(
          "https://i.ytimg.com/vi/1iae6R8zAoI/maxresdefault.jpg"
     ),
];

for (let element of elements) {
     console.log(element.render());
}
