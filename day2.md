DIFFERENCE BETWEEN DOCUMENT AND WINDOW OBJECTS 
 
In the article,we will see the Document object & Window object, their various properties & methods, along with knowing their implementation & the differences between them.

Document Object:

   The document object represents a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.
   
 Syntax:
  document.property_name;  
   
   
Properties of document:

activeElement: It returns the currently active elements in the document.

body: It returns the contents of the body element.

anchors: It returns all <a> elements that have a name attribute.

baseURI: It returns a string value that represents the base URI of the document.

cookie: It returns the cookie of the current document.

charSet: It returns a string, representing the document’s character encoding.

defaultView: It returns the current Window Object.

designMode: It is used to set documents as editable or read-only

Methods of Document:

Syntax:
document.method_name;

addEventListener(): It is used to attach an event handler to the specified element.
createComment(): It is used to create a comment node with some text.
createDocumentFragment(): It is used to create the document fragment to change the content of the document.
createElement(): It is used to create HTML element .
createEvent(): It is used to create a new events object.
createTextNode(): It is used to create a textnode.



Window Object:

The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 

Syntax:

window.property_name;

The properties of Window objects :

Properties of the window:

Closed: It holds a Boolean value that represents whether the window is closed or not.
console: It returns a reference to the console object which provides access to the browser’s debugging console.
defaultStatus: It is used to define the default message that will be displayed in the status bar when no activity is carried on by the browser.
Document: It returns a reference to the document object of that window.
DOMMatrix: It returns a reference to a DOMMatrix object, which represents 4×4 matrices, suitable for 2D and 3D operations.
frames[]: It represents an array that contains all the frames of a given window.
History: It provides information on the URLs visited in the current window.
Length: It represents the number of frames in the current window.

Methods of Window:

Syntax:

window.method_name;

The methods of Window objects :

alert(): It is used to display an alert box. It displays a specified message along with an OK button and is generally used to make sure that the information comes through the user.
atob(): It is used for decoding a base-64 encoded string. It is used to decode a string of data that has been encoded using the btoa() method.
blur(): It is used to remove focus from the current window.
btoa(): It is used for encoding a string in base-64 format.