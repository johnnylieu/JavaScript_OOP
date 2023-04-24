// object literals
// const circle = {
//     radius: 1,
//     location: {
//         y: 1,
//         x: 1
//     },
//     draw: () =>{
//         console.log("draw");
//     }
// };

// factory function
createCircle = (radius, x=null, y=null) => {
    return {
        radius,
        draw: ()=> {
            console.log('draw');
        }
        // location: {
        //     x,
        //     y
        // }
    };
};

// const cirle = createCircle(1);
// circle.draw();

// Constructor function
function Circle(radius) {
    this.raidus = radius;
    this.draw = () => {
        console.log('draw');
    }
};

// const another = new Circle(1);
// another.draw();