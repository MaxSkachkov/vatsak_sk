const articleImg = document.querySelectorAll('.auto-anim, .main-img, .side-img, .prefooter-img'); //img, which will be animated
const TextHidden = document.querySelectorAll('.text-hidden');
//menu targets ---------------------------------------------
const menuBtn = document.querySelector('.header-menu-btn');
const menuDiv = document.querySelector('.menu');
const menuText = document.querySelector('.menu-btn-text');
const headerLogo = document.querySelector('.header-logo');
const filterBtn = document.querySelectorAll('.filter-btn');
//dont touch :D --------------------------------------------
menuDiv.style.opacity = "0";
function menuSwipe() {
	menuBtn.classList.toggle('menu-opened');
	if(menuBtn.classList.contains('menu-opened')){
		menuDiv.style.transform = "translateY(0)"
		menuText.innerHTML = 'X';
		menuBtn.style.transform = 'scale(0.5)';
		menuDiv.style.opacity = "1";
	} else {
		menuDiv.style.transform = "translateY(-100%)"
		setTimeout(() => {
			menuText.innerHTML = 'MENU';
		},25)
		menuBtn.style.transform = 'scale(1)';
		setTimeout(() => menuDiv.style.opacity = "0", 300)
		;
	}
}

menuBtn.addEventListener('click', menuSwipe);


//----------------------------------------------------------


	window.addEventListener('scroll', animOnScroll); // when someone do scroll, function is started animOnScroll
	function animOnScroll(){
		for(let index = 0; index < articleImg.length; index++){
			const animItem = articleImg[index]; //  const animItem - every element of the array
			const animItemHeight = animItem.offsetHeight; // height of the object
			const animItemOffset = offset(animItem).top; //objects position, accaroding to the top (due to the fact that the object is situated lower than the top of the page)
			const animStart = 4; //coefficient, which regulates moment of the start of animation
			
			let animItemPoint = window.innerHeight - animItemHeight / animStart; //point of start: height of the browsers window - height of the object / coefficient
			if(animItemHeight > window.innerHeight) { //if the object's height is bigger , than height of browser's window
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			//pageYOffset - variable, in which data comes about quantity of already scrolled pixels
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){ //moment, in which we change features of the object
				animItem.style.transform = "scale(1.2)"
			} else {
				animItem.style.transform = "scale(1)"
			}
		}
		for(let index = 0; index < TextHidden.length; index++){
			const animItem = TextHidden[index]; //  const animItem - every element of the array
			const animItemHeight = animItem.offsetHeight; // height of the object
			const animItemOffset = offset(animItem).top; //objects position, accaroding to the top (due to the fact that the object is situated lower than the top of the page)
			const animStart = 4; //coefficient, which regulates moment of the start of animation

			let animItemPoint = window.innerHeight - animItemHeight / animStart; //point of start: height of the browsers window - height of the object / coefficient
			if(animItemHeight > window.innerHeight) { //if the object's height is bigger , than height of browser's window
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			//pageYOffset - variable, in which data comes about quantity of already scrolled pixels
			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){ //moment, in which we change features of the object
				animItem.style.transform = "translateY(0)";
			}
		}
	}
	function offset(el) { //function,which determines object's position , regarding to top of the left side
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
