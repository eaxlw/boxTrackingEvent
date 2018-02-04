// 1.Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color.
// Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

var bx = document.querySelector("div");
console.log("tjisssss",bx);

bx.addEventListener('mousemove', function(evnt) {
    // console.log(evnt);
    var x = -50+evnt.clientX;
    var y = -50+evnt.clientY;
    bx.style.left= x +"px";
    bx.style.top= y +"px";
});
