// const cuerpo = document.querySelector(".cuerpo").content;
// const fragmento = document.createDocumentFragment();
// const contenedor = document.querySelector(".fondo");
// const nav = document.querySelector(".nav");

// aparecerMenu = () => {
// 	cuerpo.querySelector(".header .nav .navegador").style.display = "flex";
// 	const clone = cuerpo.cloneNode(true);
// 	fragment.appendChild(clone);
// 	return contenedor.appendChild(fragment)	
// }

// desaparecerMenu = () => {
// 	cuerpo.querySelector(".header .nav .navegador").style.display = "none";
// 	const clone = cuerpo.cloneNode(true);
// 	fragment.appendChild(clone);
// 	return conteiner.appendChild(fragment)		
// }

// let menuAbiertoCerrado = false;
// let menuCerrado = true;


// nav.addEventListener("click", (e) => {
// 	if(e.target.classList.contains(`span`)) {
// 		aparecerMenu()
// 		if(menuAbiertoCerrado) {
// 			menuAbiertoCerrado = false
// 		}
// 		menuAbiertoCerrado = true

		
// 	}
// })











// const formulario = document.querySelector(".formulario");
// const cuerpo = document.querySelector(".cuerpo");
// const botonAumentar = document.querySelector(".boton");
// const botonBorrar = document.querySelector(".boton2");
// const cardTemplate = document.querySelector("#card").content;

// const conteiner = document.querySelector(".fondo");
// const nav = document.querySelector(".nav");
// // const navegador = document.querySelector(".navegador").style.display =  

// fragment = document.createDocumentFragment()

// let informacionCards = [
// 	{
// 		img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
// 	    title: "Adidas",
// 	    parrafo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non`
	
// 	},
	// {
	// 	img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
	//     title: "Adidas",
	//     parrafo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	// 				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	// 				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	// 				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non`
	
	// },
	// {
	// 	img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
	//     title: "Adidas",
	//     parrafo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	// 				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	// 				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	// 				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non`
	
	// },
	// {
	// 	img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
	//     title: "Adidas",
	//     parrafo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	// 				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	// 				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	// 				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non`
	
	// },
	// {
	// 	img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
	//     title: "Adidas",
	//     parrafo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	// 				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	// 				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	// 				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non`
	
	// },
	// {
	// 	img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
	//     title: "Adidas",
	//     parrafo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	// 				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	// 				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	// 				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	// 				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non`
	
	// }

// ]

// function MostrarMenu () {
// 	const navegador = cardTemplate.querySelector(`.header .nav .navegador`).style.display = "flex"
// 	navegador.style.display = "flex"
// 		// const clone = document.importNode(cardTemplate, true)

// 	const clone = cardTemplate.cloneNode(true);
// 	fragment.appendChild(clone);


// 	return conteiner.appendChild(fragment)	
// }
	
// function OcultarMenu () {
// 	cardTemplate.querySelector(`.header .nav .navegador`).style.display = "none"
// 	const clone = cardTemplate.cloneNode(true);
// 	fragment.appendChild(clone);


// 	return conteiner.appendChild(fragment)
// }



// function borrarCard () {
// 	conteiner.querySelector(`.cuerpo`).remove();
// }

// botonAumentar.addEventListener(`click`, () =>{
// 	card()
// })

// botonBorrar.addEventListener(`click`, () =>{
// 	conteiner.querySelector(`.cuerpo`).remove();
// })

// let mostrarMenuOcultar = false


// nav.addEventListener("click", (e) => {
		
// 	// e.target.classList.contains(`.boton00`) 
// 	// console.log("......")
// 	if (e.target.classList.contains(`span`)) {
// 		if(mostrarMenuOcultar) {
// 			OcultarMenu()
// 			mostrarMenuOcultar = false

// 		} else {
// 			MostrarMenu()
// 		}

// 		mostrarMenuOcultar = true

// 		MostrarMenu()
// 	}

// 	if(e.target.classList.contains(``)) {
// 		OcultarMenu()
		
// 	}
	
// 	// e.stopPropagation()
// })












// const span = contenedor.querySelector(`.cuerpo .header .nav .span`);
// cuerpo.querySelector(`.header .nav .navegador`);
// cuerpo.querySelector(`.header .nav`).content;
// cuerpo.cloneNode(true);
// 	fragment.appendChild(clone);
// console.log(contenedor)

// nav.addEventListener("click", e => {
// 	if (e.target.classList.contains(`span`)) {
// 		elementosLi.style.display = 'flex';
// 	}
// })


// Menu 1



// const nav = document.querySelector(".nav"); 
// const menuBtn = document.querySelector(".fa-bars");
// const menu = document.querySelector(".menu");
// const subMenu = document.querySelector(".subMenu");
// const menuItemSubMenu =document.querySelector(".menu-item-subMenu");


// let navAbiertoCerrado = true

// menuBtn.addEventListener("click", () => {
// 	// if(e.target.classList.contains(`menu-item-subMenu`)){
// 	if (navAbiertoCerrado) {
// 		menu.classList.toggle("nav-menu_visible")
// 		navAbiertoCerrado = false                  
// 	} else {
// 		menu.classList.toggle("nav-menu_cerrado")
// 		navAbiertoCerrado = true
// 	}
		

// })// menu.classList.toggle("nav-menu_visible");
// 	// if(e.target.classList.contains(`fa-bars`)){
// 	// 	menu.classList.toggle("nav-menu_visible")	
// 	// }
	
// // })
// menuItemSubMenu.addEventListener("click", () =>{
// 	subMenu.classList.toggle("subMenu_visible")
// })



// Menu 2


const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-menu-item")



navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

 if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

 

let imagenes = [
	
	{
		imagen: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/gh4wbxnbnf9wqezb0b6y.jpg"
	},

	{
		imagen: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/c7mkk5qtwdx23srnjzus.jpg"
	},

	{
		imagen: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/voykxa1c0o8esyknz1jf.jpg"
	}



]

 
// const proyectos = document.getElementById("proyectos").content
// const fragment = document.createDocumentFragment()

// // let clone = proyectos.cloneNode(true)

// // 		fragment.appendChild(clone)


// // console.log(proyectos)
// // console.log(fragment)

// if(window.innerWidth < 400) {
// 	imagenes.forEach(img => {
// 		// if(proyectoImg.classList.contains("proyecto-img"))
// 		proyectos.querySelector(".proyecto-img").setAttribute("src", img.imagen);
		
// 		let clone = proyectos.cloneNode(true)

// 		fragment.appendChild(clone)

// 	})
// }


 // navMenuLink.addEventListener("click", () => {
 //  	subMenu.classList.contains("nav-menu-item");
 //  	subMenu.classList.toggle("nav-subMenu_visible")

 //  	if (navMenu.classList.contains("nav-menu-item")){
 //  		subMenu.classList.toggle("nav-subMenu_visible");
 //  		return console.log("hola")
 // 	 }
 // })
// navMenu.addEventListener("click", (e) => {
//   navMenu.classList.contains("nav-menu-item");
//   console.log("falsssss")
//   if (navMenu.classList.contains("nav-menu-item")){
//   	subMenu.classList.toggle("nav-subMenu_visible");
//   	return console.log("hola")
//   }
// });







// const navMenuLink = document.querySelectorAll(".nav-menu-link");
// for (let i = 0; i < navMenuLink.lenght; i++) {
// 	navMenulink[i].addEventListener("click", function(){
// 		if (window.innerWidth < 1024) {
// 			const subMenu = this.nextElementSibling;
// 			const height = subMenu.scrollHeight;
// 			// console.log(subMenu.classList.contains("desplegar"));
// 			if (subMenu.classList.contains("desplegar")) {
// 				subMenu.classList.remove("desplegar");
// 				subMenu.removeAtributte("style");
// 			} else {
// 				subMenu.classList.add("desplegar");
// 				subMenu.style.height = height + "px";
// 			}
			
// 		}
// 	})	
// }

// const navMenuBtn = document.querySelector(".nav-menu-link")
// 	navMenu.addEventListener("click", (e) => {
// 		// console.log("hola")
// 		navItem.classList.toggle("uno")
// 		const navItem = this.nextElementSibling;
// 		const subMenu = navItem.nextElementSibling;
// 		if(navMenu.classList.contains("nav-menu-item")) {
// 			console.log("hola")
			
// 			subMenu.classList.add("desplegar");
			
// 		} else {
// 			console.log("no hola")
// 			subMenu.classList.remove("desplegar")
// 		}
		
			
// 	// const subMenu = document.querySelector(".subMenu");
	
// 	})



// subMenu.classList.contains("desplegar");
// console.log(navMenu.classList.contains("nav-menu-item"));


