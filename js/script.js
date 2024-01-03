document.addEventListener('keydown', function(event) {
    console.log(event);
    if (event.key == 'Tab') {
        var element = document.getElementById('window');
        var element2 = document.getElementById('termwindow');
        // Toggle the display property
        console.log(element.style.display);
        if (element.style.display === 'block') {
            element.style.display = 'none'; // Show the element
            element2.style.display = 'none'; // Show the element
        } else {
            element.style.display = 'block'; // Hide the element
            element2.style.display = 'block'; // Show the element
            // gsap.to(content, { x: -1000, duration: 1 });
            // gsap.to(content, {opacity: 1, duration: 1}); //wait 2 seconds
        }
    }
 });

// these are the buttons ----

// window --------------
document.addEventListener('DOMContentLoaded', function () {
// Get references to the button and content
const toggleButton = document.getElementById('close');
var content = document.getElementById('window');

// Add click event listener to the button
toggleButton.addEventListener('click', function (event) {
    console.log(event);
    // Toggle the display property of the content element
    if (content.style.display === 'block') {
    content.style.display = 'none';
    } else {
    content.style.display = 'block';
    }
});
});


document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and content
    const toggleButton = document.getElementById('mini');
    var content = document.getElementById('window');
    
    // Add click event listener to the button
    toggleButton.addEventListener('click', function (event) {
        console.log(event);
        // Toggle the display property of the content element
        if (content.style.display === 'block') {
        
            // gsap.to(content, { y: 1000, duration: 1 });
            // gsap.to(content, { opacity: 0, duration: 1, delay: 1 }); //wait 2 seconds
            // gsap.to(content, { y: 0, duration: 1, delay: 2 }); 

            content.style.display = 'none';
            //wait 1 second
            // gsap.to(content, { opacity: 0, duration: 1, delay: 2 }); //wait 2 seconds

        } else {
            content.style.display = 'block';
        }
});
});

document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and content
    const toggleButton = document.getElementById('exp');
    var content = document.getElementById('window');
    
    // Add click event listener to the button
    toggleButton.addEventListener('click', function (event) {
        console.log(event);
        // Toggle the display property of the content element
        if (content.style.height === '100%' && content.style.width === '100%')
        {
            console.log("big");
            content.style.height = '600px';
            content.style.width = '700px';
            content.style.left = '100px';
            content.style.top = '200px';
        } else {
            console.log("small");
            content.style.left = '0px';
            content.style.top = '0px';
            content.style.height = '100%';
            content.style.width = '100%';
        }
});
});

// terminal --------------


document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and content
    const toggleButton = document.getElementById('closet');
    var content = document.getElementById('termwindow');
    
    // Add click event listener to the button
    toggleButton.addEventListener('click', function (event) {
        console.log(content.style.display);
        // Toggle the display property of the content element
        if (content.style.display === 'none') {
        content.style.display = 'block';
        } else {
        content.style.display = 'none';
        }
    });
    });
    
    
    document.addEventListener('DOMContentLoaded', function () {
        // Get references to the button and content
        const toggleButton = document.getElementById('minit');
        var content = document.getElementById('termwindow');
        
        // Add click event listener to the button
        toggleButton.addEventListener('click', function (event) {
            console.log(event);
            // Toggle the display property of the content element
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
    });
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        // Get references to the button and content
        const toggleButton = document.getElementById('expt');
        var content = document.getElementById('termwindow');
        
        // Add click event listener to the button
        toggleButton.addEventListener('click', function (event) {
            console.log(event);
            // Toggle the display property of the content element
            if (content.style.height === '100%' && content.style.width === '100%')
            {
                console.log("big");
                content.style.height = '400px';
                content.style.width = '600px';
                content.style.left = '25px';
                content.style.top = '50px';
            } else {
                console.log("small");
                content.style.left = '0px';
                content.style.top = '0px';
                content.style.height = '100%';
                content.style.width = '100%';
            }
    });
    });
// these are the buttons ---- 


// this is the terminal window ----
var maxLevel = 11;

const elt = document.getElementById("termheader");
const wint = document.getElementById("termwindow");
// const edit = document.getElementsByClassName("window");

elt.addEventListener("mousedown", mousedownt);

function mousedownt(e) {
//   wint.style.zIndex = maxLevel.toString();
//   maxLevel = maxLevel +1;
  window.addEventListener("mousemove", mousemovet);
  window.addEventListener("mouseup", mouseupt);


  let prevX = e.clientX;
  let prevY = e.clientY;
  function mousemovet(e) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;
      
      
      const rect = wint.getBoundingClientRect();

      wint.style.left = rect.left - newX + "px";
      wint.style.top = rect.top - newY + "px";
      console.log("terminal");
      console.log(elt.style.left);
      console.log(elt.style.top);


      prevX = e.clientX;
      prevY = e.clientY;
  }
  function mouseupt() {
    window.removeEventListener("mousemove", mousemovet);
    window.removeEventListener("mouseup", mouseupt);
  }
}

wint.addEventListener("mousedown", newlevelt);
function newlevelt(e) {
  wint.style.zIndex = maxLevel.toString();
  maxLevel = maxLevel +1;
}

// this is the terminal window ----




// this is the pro window ----

const el = document.getElementById("windowheader");
const win = document.getElementById("window");
// const edit = document.getElementsByClassName("window");

el.addEventListener("mousedown", mousedown);

function mousedown(e) {
  win.style.zIndex = maxLevel.toString();
  maxLevel = maxLevel +1;
  console.log(maxLevel);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);


  let prevX = e.clientX;
  let prevY = e.clientY;
  function mousemove(e) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;
      
      
      const rect = win.getBoundingClientRect();

      win.style.left = rect.left - newX + "px";
      win.style.top = rect.top - newY + "px";
      console.log("window");
      console.log(el.style.left);
      console.log(el.style.top);


      prevX = e.clientX;
      prevY = e.clientY;
  }
  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

win.addEventListener("mousedown", newlevel);
function newlevel(e) {
  win.style.zIndex = maxLevel.toString();
  maxLevel = maxLevel +1;
}


// this is the pro window ----




// date

// Get current date and time
var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;