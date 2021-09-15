let val;

// document လို႔ ေခၚလိုက္တာနဲ႕ html file တစ္ခုလံုး ပါလာတာေၾကာင့္ 
// js မွာ document.getElementById('') ဆိုၿပီး ျပန္ေခၚသံုးတာ
val = document;
val = document.head;
val = document.body;
val = document.URL;

val = document.forms;//(return array form)
console.log(val);
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;



// js ကေန document နဲ႕ id action method စတဲ့ attribute ေတြအကုန္
// လွမ္းေခၚလို႔ရတယ္ class တစ္ခုပဲ တိုက္႐ိုက္ေခၚလို႔ မရတာ 

// val = document.doctype;

val = document.links; //(html collectin ဆိုတဲ့ array နဲ႕လာတယ္)
val = document.links[3];
val = document.links[3].id;
val = document.links[3].href;
val = document.links[3].className; //(output string )

val = document.links[0];
val = document.links[0].className;//(အကုန္လံဳးပါလာတာ string)
							//dom token list (array)
val = document.links[0].classList;//(တစ္ခုခ်င္း  ဆြဲထုတ္လို႔ရတယ္ array type)
val = document.links[0].classList[0];
val = document.links[0].classList[1];


val = document.images;
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].getAttribute('class');
console.log(val);
val = document.images[0].getAttribute('src');
 val = document.images[0].getAttribute('abc'); //ကိုယ့္ဘာသာ ေပးခ်င္တဲ့ attibute ေပးထားတဲ့ဟာကိုေခၚရင္ get arrribbuteကိုသံဳးတယ္


// console.log(val);

//Change Styling
document.getElementById('task-title').style.background = "grey";
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.padding = "5px";


document.getElementById('task-title').textContent = "My List"; //html tag ေတြ ထည့္ေ၇းလို႔မရ ေ၇းလိုက္တာကို တိုက္႐ိုက္ဘာသာျပန္ၿပီး ေဖာ္ျပ ေပးတယ္
document.getElementById('task-title').innerText = "My Tasks";//html tag ေတြ ထည့္ေ၇းလို႔မရ ေ၇းလိုက္တာကို တိုက္႐ိုက္ဘာသာျပန္ၿပီး ေဖာ္ျပ ေပးတယ္
document.getElementById('task-title').innerHTML = "<span style='color:yellow'> My List </span>"; //Html tag ေတြထည့္ေ၇းလို႔ရတယ္ 

// HTMl collection (array ) //classname လို႔ ေခၚရင္ id က unique ျဖစ္လို႔ တစ္ခုတည္းရွိေတာ့ element မွာ s မပါ class က universal ရွိႏိုင္လို႔ element မွာ s ထည့္ေပးရမယ္
const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items);
items[3].style.color = "violet";
items[3].innerText = "Have to Shop";


// ံHtml collection (array)
const lis = document.getElementsByTagName('li');
// console.log(lis);

lis[0].style.color = "red";
// lis[0].textContent = "Have to Visit";

// document.querySelector(); တစ္ျခား selector ေတြထြက္ powerful ပိုျဖစ္တယ္ tagname/id/class အကုန္
// လံုးေခၚလို႔၇တယ္ ဒါေပမယ့္ css မွာ လို႔ id ကို ေခၚခ်င္ရင္ # ထည့္ေပးရမယ္ class ဆို . ထည့္ေပးရမယ္

//console.log(document.querySelector('h4'));
// console.log(document.querySelector('.task-title'));
// console.log(document.querySelector('#task-title'));

// document.querySelector သည္ id ကိုေခၚေခၚ class ကိုေခၚေခၚ ပေရာဂ်က္ တစ္ခုလံဳးရဲ႕ အပေၚဆံဳးကဟာ တစ္ခု ပဲ အလုပ္လုပ္ပါတယ္
// document.querySelector('li').style.color = "blue";

// document.querySelector('li').style.color = "green";
// document.querySelector('ul li:last-of-type').style.color = "blue"
// document.querySelector('ul li:nth-of-type(3)').style.color = "red"
// document.querySelector('ul li:nth-of-type(3)').innerText = "Have to cook";
// document.querySelector('ul li:nth-child(3)').innerText = "Have to cook";

// const listitems = document.querySelector('ul').getElementsByTagName('li');
const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems);

// document.querySelector('ul li:nth-of-type(odd)').style.background = "silver";
// document.querySelector('ul li:nth-of-type(even)').style.background = "silver";

// Cover  HTML Collection Array

// document.getElementByIdပဲျဖစ္ျဖစ္ document.getElementsByClassName နဲ႕ပဲျဖစ္ျဖစ္ ေခၚသံုးထားၿပီး console ထုတ္ၾကည့္တဲ့အခါ 
// HTML Collection လို႔ ျပ ေနရင္ အဲ့ဒီ Array သည္ looping တိုက္႐ိုက္  ပတ္လို႔ ရတဲ့ array မဟုတ္ပါ။ Looping ပတ္ခ်င္ရင္ 
// Array ဆိုတဲ့ keywords ကိုသံဳးၿပီး .from( ) ဆိုတဲ့ method ထဲကိုထည့္ေပးရပါတယ္ အဲ့တာမွ pure array ျဖစ္ၿပီး looping ပတ္လို႔ရမွာပါ

const lists = document.getElementsByTagName('li');
// console.log(lists);
// console.log(lists.length);
// console.log(lists[2]);

const arrlis = Array.from(lists);

// forEach ရဲ႕ function မွာ parameter 3 ခုရွီတယ္ ပထမတစ္ခုက value , index , array 
arrlis.forEach(function(arrli,idx){
	// console.log(arrli);
	// console.log(arrli.className);
	// arrli.innerText = "Hello";
	//arrli.textContent = `${idx} : Hello Myanmar`;
});

// document.querySelectorAll() (nodelist array type)
let itsqs = document.querySelector('.collection .collection-item');
// console.log(itsqs);
let itsqsas = document.querySelectorAll('.collection .collection-item');

// console.log(itsqsas);
// console.log(itsqsas.length);
// console.log(itsqsas[2]);

itsqsas.forEach(function(itsqsa,idx){
	// console.log(itsqsa);
	// console.log(itsqsa.className);
	// itsqsa.textContent = "Hello World";
	// itsqsa.innerText = `${idx} : Hello Myanmar`;
});

// array type node list မို႔လို႔ looping ပတ္လို႔ရတာ
const liodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(liodds);
const lievens = document.querySelectorAll('li:nth-child(even)');
console.log(lievens);

liodds.forEach(function(liodd){
	// console.log(liodd);
	liodd.style.background = "gold";
})

for(let i=0; i < lievens.length; i++){
	lievens[i].style.background = "orange";
}

// children
let chil;
 
const getul = document.querySelector('ul.collection');
// console.log(getul);

// combinator အတိုင္းပဲ
const getli = document.querySelector('li.collection-item');

// console.log(getli);


chil = document.getElementsByClassName('collection-item');
chil = document.getElementsByTagName('li');
chil = document.querySelector('ul').getElementsByClassName('collection-item');

// get children Element

// ul li ကိုတိုက္႐ိုက္ ဆြဲမထုတ္ပဲနဲ႕ အပေၚမွာ variable နဲ႕ 
// သပ္သပ္ဆြဲထုတ္ထားၿပီးေတာ့ .children ဆိုတဲ့ keyword ေလး
// ကပ္ေပးၿပီး အဲ့ ထဲက child ေတြကို ဆြဲထုတ္လို႔ရတယ္
chil = getul.children;

// chil = getul.children[1]

// children of children (html collection)

// children ရွိေနရင္ .children နဲ႕ဆက္တိုက္ဆြဲေခၚထုတ္သြားလိ္ု႔ရတယ္
chil = getul.children[1].children;

chil = getul.children[1].children[0];

chil = getul.children[1].children[0].children;

chil = getul.children[1].children[0].children[0].className;


// First Child(အဲ့လိုမဟုတ္ရင္ေတာ့ array type ျဖစ္လို႔ index number နဲ ေခၚလို႔ရတယ္)
chil = getul.firstElementChild;

// Last Child 
chil = getul.lastElementChild;

// Count child elements
// chil = getul.children.length;

// chil = getul.childElementCount;

// Get Parent Element
chil = getli.parentElement;

// Get Next Sibling
chil = getli.nextElementSibling;

chil = getli.nextElementSibling.nextElementSibling;

// Get Previous Silbling(ေနာက္ကိုျပန္ သြားခ်င္ရင္ သံုးလို႔ရတယ္)
chil = getli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(chil);

// Creat Element (not html from js )

const li = document.createElement('li');

// Add Id 
li.id = "new-item";

// Add Class 
// li.className = 'collection-item';
li.classList.add('collection-item');

// ယူမယ္ဆို get သြားထည့္မယ္ဆို set 

// setAttribute မွာ paramiter 2ခုရွိတယ္ 
// ပထမတစ္ခုက attribute name ,ေနာက္က ထည့္ခ်င္တဲ့ 
// value  
				// (att name,value)
li.setAttribute('title','new-item');

// Create Text Node 
// li.innerText = "abc";
// li.textContent = "efg";
// li.innerHTML = "hij";

const newnode = document.createTextNode('Hello Mandalay');
// append = ျဖည့္ စြက္လိုက္တာ overwrite လုပ္တာမဟုတ္ 
li.appendChild(newnode);



// console.log(li);
// create element for new link 

const link = document.createElement('a');

// add attribute 
link.setAttribute('href','#');

// add Id 
link.id = "delete-item6";

// add class 
link.className = "delete-item";
// link.classList.add('delete-item'); 

link.innerHTML = `<i class="far fa-trash-alt"></i>`;
// console.log(link);

// Append link into li 
li.appendChild(link);
// console.log(li);

// Append li as child into ul 
document.querySelector('ul.collection').appendChild(li);

// Replace Element 
const newheading = document.createElement('h2');

// add id
newheading.id = "task-title";

// add class 
//newheading.className = "task-title"
newheading.classList.add('task-title');

// create text node 
newheading.appendChild(document.createTextNode('Task List'));

// console.log(newheading);

// get old heading 
const oldheading = document.getElementById('task-title');
// console.log(oldheading);

// get parent 
const cardaction = document.querySelector('.card-action');

// Replace replaceChild(new,old);
cardaction.replaceChild(newheading,oldheading);

// Remove Element  ဖ်က္ထုတ္ခ်င္ရင္ remove() ဆိုတဲ့ method ေလးထည့္ေပးရတယ္ 
const lts = document.querySelectorAll('li');

// console.log(lts);

// lts[5].remove();

// Remove child Element 
const ullts = document.querySelector('ul');
// console.log(ullts.children);

// ullts.removeChild(ullts.children[4]);

// ullts.removeChild(lts[5]);


// Class 
const firstli = document.querySelector('li');
// console.log(firstli.children[0]);

const flink = firstli.children[0];

let lk = flink.className;

lk= flink.classList;
// console.log(lk);
// console.log(lk[0]);
// console.log(lk[1]);

// Change Class Selector Name 
// flink.className = "delete-item disable";

// Replace Class (old,new) နဲ႕သံုးၿပီး ခ်ိန္းရင္ array type မို႔ replace method ေလး သံ့ုးေပးရတယ္

// flink.classList.replace('active','disable');

// Add Class 
//flink.className = "delete-item active";
// flink.classList.add('disable');

//Attribute
let lia = flink.getAttribute('href');
// console.log(lia);

// lia = flink.setAttribute('href','https://google.com');
// console.log(flink.getAttribute('href'));

// addEventListener(type,function);
let clearbtn = document.querySelector('.cleartasks');
// console.log(clearbtn);

//Method 1
// clearbtn.addEventListener('click',function(e){
// 	console.log('hay');
// 	e.preventDefault();
// });

// Method2
clearbtn.addEventListener('click',myclick);

function myclick(e){
	// console.log('hay myanamar');

	// console.log(e);

	let val;

	// val = 0
	val = e.target;
	val = e.target.className;
	val= e.target.classList;
	val = e.target.href;
	val = e.target.getAttribute('href');
	val = e.target.id;

	// e.target.innerHTML = "Click Me";

	// Event type 
	val = e.type;

	// Coordinate Event 

	val = e.clientY;
	val = e.clientX;

	// Coordinate event 
	val = e.offsetY;
	val = e.offsetX;

	// console.log(val);

	e.preventDefault();
}

// Mouse Event 

clearbtn = document.querySelector('.cleartasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');

// click
// clearbtn.addEventListener('click',runevent);

// double click
// clearbtn.addEventListener('dblclick',runevent);

// Mousedown 
//clearbtn.addEventListener('mousedown',runevent);

// Mouseup
// clearbtn.addEventListener('mouseup',runevent);

// mouseenter
// card.addEventListener('mouseenter',runevent);

// mouseleave
// card.addEventListener('mouseleave',runevent);

// mousemove
// card.addEventListener('mousemove',runevent);



// function runevent(e){
// 	// console.log(`Event type = ${e.type}`);
// 	heading.textContent = `MouseX : ${e.offsetX} MouseY :${e.offsetY}`;
// 	document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1)`;
// 	// e.preventDefault();
// }

let taskinput = document.getElementById('task');
// console.log(taskinput);

const form = document.querySelector('form');
// console.log(form);

// Get Value by submit 
// form.addEventListener('submit',runevent2);

// function runevent2(e){
// 	console.log(`Event Type = ${e.type}`);

// 	// Get Input Value
// 	console.log(taskinput.value);

// 	e.preventDefault();
// }


// Get value by typing 
// keydown 
// taskinput.addEventListener('keydown',runevent2);


// keyup 
// taskinput.addEventListener('keyup',runevent2);

// input (=keyup but input is a little faster)
// taskinput.addEventListener('input',runevent2);

// keypress (=keydown)
// taskinput.addEventListener('keypress',runevent2);

// blue 
// taskinput.addEventListener('blur',runevent2);

// focus 
taskinput.addEventListener('focus',runevent2);

// cut 
// taskinput.addEventListener('cut',runevent2);

//paste
// taskinput.addEventListener('paste',runevent2);

// copy 
// taskinput.addEventListener('copy',runevent2);
function runevent2(e){
	console.log(`Event Type = ${e.type}`);

	// get input value 
	console.log(taskinput.value);
	// e.preventDefault();
}

// Event Bubbling vs Event Delegation 

// Event Bubblin  တိုက္႐ိုက္လွမ္းေခၚတာ
// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 		console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('i am card');
// });

// Event Delegation သြယ္ဝိုက္ေသာနည္း
const delitem = document.querySelector('.delete-item'),
	  showerror = document.querySelector('.showerror'),
	  display = document.querySelector('.display');

document.body.addEventListener('click',deleteitem);

function deleteitem(e){
	// console.log(e.target);
	// console.log(e.target.className);

	// if(e.target.className === "far fa-trash-alt"){
	// 	console.log('hay');
	// }

		// i      a
	// if(e.target.parentElement.className === "delete-item"){
	// 	console.log('hay');
	// }

	// if(e.target.parentElement.className === "delete-item disable"){
	// 	console.log('hay');

		
	// }

		// i   	a 
	if(e.target.parentElement.classList.contains('disable')){
		// console.log('hay');

		// console.log(e.target.parentElement)

			// i   a 
		// e.target.parentElement.remove();

		// i      a  			li
		e.target.parentElement.parentElement.remove();
	}
}

// Storage 
document.querySelector('.form').addEventListener('submit',(e)=>{
	// console.log('hay');

	const newtask = document.getElementById('task').value;
	// console.log(newtask);
	// localStorage.setItem('tasks','newtask');

	let myworks;
	// console.log(myworks);

	if(localStorage.getItem('tasks') === null){
		myworks = [];
	}else{
		myworks = JSON.parse(localStorage.getItem('tasks'));
		// console.log(myworks);
		// console.log(typeof myworks);
	}

	myworks.push(newtask);

	localStorage.setItem('tasks',JSON.stringify(myworks));

	window.alert('New Task Saved');



	e.preventDefault();
});

let mytasks = JSON.parse(localStorage.getItem('tasks'));

// console.log(mytasks);
// console.log(typeof mytasks);
// console.log(mytasks.length);
// console.log(mytasks[1]);

// mytasks.forEach(function(mytask){
// 	console.log(mytask);
// });