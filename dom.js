// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.querySelectorAll);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.textContent); 
// difference between textcontent and inner text is one of them pays attention to styling, for example when we use span  to add 123 and  an attrubute display = none then
// text content shows the 123 in the console but innerText will pay attention to the styling and not show 123   
// headerTitle.innerHTML = '<h3>Hello</h3>';

//header.style.borderBottom = 'solid 3px #000'
//  var items = document.getElementsByClassName('list-group-item');

// console.log(items[1]);
// //items[1].textContent = 'Hello 2';
// items[2].style.color = 'green';

// var additems = document.getElementsByClassName('title');
// //console.log(additems);
// // additems[0].textContent = 'DaaloIdhar'
// additems[0].style.fontWeight = 'bold';
// additems[0].style.color = 'green';

// for(let i =0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

// Get element by tag name

// var items = document.getElementsByClassName('list-group-item');

// console.log(items[1]);
// //items[1].textContent = 'Hello 2';
// items[2].style.color = 'green';

// var li = document.getElementsByTagName('li');
// //console.log(additems);
// li[2].textContent = 'manoyanamano'
// li[2].style.fontWeight = 'bold';
// li[2].style.color = 'red';

// for(let i =0; i<li.length; i++){
//     li[i].style.backgroundColor = 'lightblue';
// }

// Query Selector//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//  thirdItem.style.color = 'white';

// //querySelectorAll
// var titles = document.querySelectorAll('.title');

// //console.log(titles);
// titles[0].textContent = 'Hello';
// var Items = document.querySelectorAll('.list-group-item');
// Items[1].style.backgroundColor = 'green';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = '#ccc';
// }
// Traversing the Dom//
// var itemList = document.querySelector('#items');

// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes

// console.log(itemList.childNodes);


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);

// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// nextSibling

// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

//Create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attribute
// newDiv.setAttribute('title','Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div

// newDiv.appendChild(newDivText);

// var  container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

// // Now go head and add HEllo word before Item 1

// // create a li
// var newLi = document.createElement('li');
// newLi.className = 'list-group-item';
// var newLiText = document.createTextNode('Hello World');
// newLi.appendChild(newLiText);


// var bucket = document.querySelector('div .list-group');
// var item1 = document.querySelector('div li')

// console.log(newLi);

// bucket.insertBefore(newLi, item1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
itemList.addEventListener('click', removeItem);
// filter element and its function

function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //Get li's
    var items = itemList.getElementsByTagName('li');
    //Convert to array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });

}
filter.addEventListener('keyup', filterItems);



//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // Append button to li

    li.appendChild(deleteBtn);

    // Append li to list

    itemList.appendChild(li);

    

}













