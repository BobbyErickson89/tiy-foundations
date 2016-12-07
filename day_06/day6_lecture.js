// **********The DOM*********
// -Browsers come with a set of built-in objects that represent things like the
//  browser window and the current web page shown in that window.  These built in
//  objects act like a tool kit for creating interactive web pages.
//
// -We can view some of these using the built-in window object.
// console.log(window);
// -This window object contains other objects that represent the current browser or tab.
// -It contains objects that model things like browser history and the device's screen.
// -W3 Schools has some great documentation on what objects are available and what they
//  represent.

// -We will be concentrating on the Document Object Model (The DOM)
// -The DOM uses objects to create a representation of the current page.
// -It creates a new object for each elements (and each individual section of
//  text) within the page.
// console.log(window.document);
// OR
// console.log(document);

// When looking at the DOM, each part of it is called a Node.  There are four
// main types of nodes.
// 1.  The Document node.  This is the entire document.
//       [Yellow in example]
// 2.  Element Nodes.  These are the HTML element tags (ex.  <h1>, <section>, etc.)
//       [Green in example]
// 3.  Attribute Nodes.  Any attributes that we have in our HTML.  They are not
//      children of Element nodes, they are part of that element.
//       [Red in example]
// 4.  Text Nodes.  Any text inside of an element/attribute.
//       [Purple in example]


// ******** jQuery *********
// -JavaScript allows us to access elements in the DOM.  While this is typically
//  easy to do, there are certain cross-browser inconsistencies that can lead to
//  mistakes.
// -This is where jQuery comes in.  jQuery is a JS library that allows us to avoid
// some of those issues, while also making it easier to grab elements in the DOM
// with much less typing.
// -A JS library is pre-written JavaScript that allows for easier development
// of javascript applications.
// var my_heading_js = document.getElementsByTagName('h1');
// console.log(my_heading_js);
// OR
// var my_heading_jquery = $('h1');
// console.log(my_heading_jquery);


// ****** Selecting Elements ********
// -Selecting HTML elements and classes will work the same way in jQuery as it
//  does in CSS.  For example:
// var first_paragraph = $('.first-paragraph');
// OR
// var my_paragraphs = $('section p');





// ******** Adding and Removing elements *******
// jQuery makes it simple to add and remove elements to the DOM.  jQuery has some
// built-in functions that makes manipulating the DOM very easy.  .append() and
// .prepend() allow us to add elements to the beginning or end of an element.
// var new_paragraph = "<p class='my-new-paragraph'>Here is my new paragraph</p>";
// $('section').append(new_paragraph);

// We are also able to remove elements with the .remove() function that comes with
// jQuery.
// $('.my-new-paragraph').remove();


// ******** Modifying Elements ********
// Along with adding and removing elements, jQuery is also used to modify existing
// elements.  Some commonly used functions are .addClass(), .removeClass()
// $('.second-section p').addClass('');
// You can also go ahead and change defined CSS properties with jQuery
// var html_body = $('body')
// html_body.css('background-color', 'green');


// ******* jQuery Traversal *******
// jQuery can also be used to search down the DOM.  For example:
// var my_sections = $('body').find('section');
// console.log(my_sections);


// ******* jQuery Events *******
// jQuery can also be used to have functions happen when doing a certain event on
// the page, like clicking.
// function changing_color(){
//   $('.second-section').append('<p>Here is a new paragraph</p>');
// }
//
// $('.event_button').click(changing_color);
