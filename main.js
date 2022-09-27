const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIncon = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIncon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);

function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.add("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toogleMobileMenu () {
    const isAsideClosed = aside.classList.add("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive")
    }

    menuMobile.classList.toggle("inactive")
}

function toogleCarritoAside () {
    const isMobileMenuClosed = menuMobile.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        menuMobile.classList.add("inactive")
    }

    aside.classList.toggle("inactive");
}

const productList = [];
let products;

productList.push ({
    name: 'Juego de peces',
    description: 'Contiene 6 peces de diferentes formas y colores con dos cañas en madera con imán',
    price: 1800,
    image: './img/peces.png',
    category: ['Cuerda Frotada', 'Iniciación Musical', 'Todo']
});

productList.push ({
    name: 'Dados numéricos',
    description: 'Dos cubos de madera 4x4 sellados y barnizados a mano',
    price: 700,
    image: './img/dados-numéricos.png',
    category: ['Dados', 'Iniciación Musical', 'Todo']
})

productList.push ({
    name: 'Dado de variaciones',
    description: 'Cubo de madera 5x5 pintado, sellado y barnizado a mano con variaciones de estrellita del método Suzuki. Colores: Verde, amarillo y naranja',
    price: 700,
    image: './img/dado-variaciones.png',
    category: ['Dados', 'Suzuki', 'Iniciación Musical' ,'Todo']
})

productList.push ({
    name: 'Conejo con zanahoria',
    description: 'Dos guantes de diferentes tamaños (grande y chico) para mano derecha confeccionado a mano en jersey set blanco con detalles en pañolenzi. Una zanahoria en polar rellena de vellón',
    price: 2500,
    image: './img/conejo-con-zana.png',
    category: ['Suzuki', 'Cuerda Frotada' ,'Todo']
})

productList.push ({
    name: 'Zanahoria',
    description: 'Zanahoria en polar rellena de vellón',
    price: 700,
    image: './img/zanahorias.png',
    category: ['Suzuki', 'Cuerda Frotada' ,'Todo']
})

productList.push ({
    name: 'Antifaz',
    description: 'Confeccionado a mano en lienzo con bies y doble tela negra por detrás y doble elástico. Pintados con acrílico con diferentes diseños y colores',
    price: 800,
    image: './img/antifaz.png',
    category: ['Iniciación Musical', 'Todo']
})

productList.push ({
    name: 'Tarjetas de Canciones',
    description: 'Caja con 21 tarjetas con diseños originales para las canciones que se trabajan en pre-estrellita y libro 1 de violoncello, violín y viola. Algunas de son del repertorio popular lo que las hace accesibles a otros instrumentos o iniciación musical',
    price: 2000,
    image: './img/originales/tarjetas-canciones.png',
    category: ['Cuerda Frotada', 'Iniciación Musical', 'Todo', 'Suzuki']
})

productList.push ({
    name: 'Cohete',
    description: 'Títere de dos dedos con forma de cohete de elaboración artesanal en polar con diferentes colores. Medidas: 12 cm de alto  y 5 cm de apertura de entrada del arco',
    price: 800,
    image: './img/cohete.png',
    category: ['Cuerda Frotada', 'Iniciación Musical', 'Todo', 'Suzuki']
})

productList.push ({
    name: 'Tarjetas de notación',
    description: 'Cada juego contiene 16 tarjetas (dos octavas) en papel kraft plastificadas en bolsa contenedora en lienzo. Opciones: clave de sol, clave de do en tercera y clave de fa (con una octava en clave de do en cuarta opcional)',
    price: 1000,
    image: './img/originales/tarjetas-notas.png',
    category: ['Cuerda Frotada', 'Iniciación Musical', 'Todo', 'Suzuki']
})

productList.push ({
    name: 'Cancionero',
    description: 'Cuaderno de 80 páginas en tamaño A5, encuadernado artesanalmente con tapa en papel kraf lisa para intervenir. Segmentado en tres partes: letras de canciones, dibujos para colorear con diseños originales en relación con las tarjetas de canciones y páginas en blanco.',
    price: 1300,
    image: './img/cuadernillo.png',
    category: ['Suzuki', 'Todo']
})

productList.push ({
    name: 'Hamburguesa',
    description: 'Cada hamburguesa contiene dos panes, dos hamburguesas, dos lechugas, dos quesos y dos tomates para tener variedad en la construcción de la forma. Elaboradas artesanalmente en tela polar',
    price: 1700,
    image: './img/hamburguesa.png',
    category: ['Iniciación Musical', 'Todo', 'Suzuki']
})

productList.push ({
    name: 'Bloques Pizarra',
    description: ' Cada juego contiene 25 bloques de diferentes formas, algunos de ellos pintados en una de sus caras con pintura pizarrón negra. Reutilización de madera de descarte y cortes específicos. Packaging individual en bolsa de lienzo',
    price: 2500,
    image: './img/bloques.png',
    category: ['Iniciación Musical', 'Todo', 'Suzuki']
})

productList.push ({
    name: 'Dado notación musical',
    description: 'Dado de madera 4x4 pintado, sellado y barnizado a mano. Colores: verde, naranja, amarillo y color madera. Opciones: dado de matices, dado de comapses, dado rítmico binario, dado rítmico ternario',
    price: 650,
    image: './img/dados-notación.png',
    category: ['Iniciación Musical', 'Todo', 'Dados']
})

productList.push ({
    name: 'Pre-arco',
    description: 'Tarugo de 10 mm por 30cm de largo finamente lijado y liviano con terminación de taquito en madera',
    price: 1000,
    image: './img/prearco.png',
    category: ['Cuerda Frotada', 'Todo', 'Suzuki']
})

productList.push ({
    name: 'Correa cuadrada',
    description: 'Correa sostén de violoncello o contrabajo con cuerda extensible negra de 2m de longitud para ser cortada de ser necesario.',
    price: 1000,
    image: './img/correa-cuadrada.png',
    category: ['Cuerda Frotada', 'Todo']
})

productList.push ({
    name: 'Correa con forma',
    description: 'Correa sostén de violoncello o contrabajo con cuerda extensible negra de 2m de longitud para ser cortada de ser necesario.',
    price: 1300,
    image: './img/correa-forma.png',
    category: ['Cuerda Frotada', 'Todo']
})

productList.push ({
    name: 'Memotest Musical',
    description: 'El juego incluye 50 fichas de madera 4x4 cm barnizadas y selladas con tinta indeleble. Contiene las siguientes figuras rítmicas binarias y ternarias: dos corcheas, redonda, negra, blanca, cuatro semicorcheas, silencio de negra, negra con puntillo, silencio de negra con puntillo, blanca con puntillo, negra-corchea, corchea-negra y tres corcheas. También los matices pp, p, mp, mf, f, ff, los compases: 2/4, 3/4, 4/4, 6/8, 9/8 y 12/8 y dos fichas en blanco.',
    price: 2000,
    image: './img/memotest.png',
    category: ['Iniciación Musical', 'Todo']
})

productList.push ({
    name: 'Dado Pizarra',
    description: 'Cubo de madera de 7x7cm lijado con puntas redondeadas, pintado con pintura pizarrón negra en 5 caras dejando una libre como “comodín”',
    price: 700,
    image: './img/dado-pizarra.png',
    category: ['Iniciación Musical', 'Todo', 'Dados']
})

productList.push ({
    name: 'Pizarra imantada',
    description: 'Pizarra de 25x31 cm de chapa blanca con dos pentagramas con pie para ser sostenida en forma vertical, y 32 figuras con imán de madera negro en bolsa de lienzo. En caja contenedora negra',
    price: 5500,
    image: './img/pizarra-imantada.png',
    category: ['Iniciación Musical', 'Todo']
})

productList.push ({
    name: 'Rompecabezas',
    description: 'Rompecabezas de 30 piezas tamaño A4 con diseños originales para instrumentos. Opciones: violinista, guitarrista, pianista, cellista',
    price: 1300,
    image: './img/chellista.png',
    category: ['Iniciación Musical', 'Todo']
})

productList.push ({
    name: 'Set de dados',
    description: 'Incluye todos los dados de Mulú, el dado de variaciones, los numéricos, dado pizarra y las cuatro variables de dados de notación: binario, ternario, matices y compases',
    price: 4000,
    image: './img/set-dados.png',
    category: ['Iniciación Musical', 'Todo', 'Dados']
})

productList.push ({
    name: 'Kit instrumentista de cuerda',
    description: 'Contiene: juego de peces, dados numéricos, dado de notación a elección, antifaz, tarjetas de notas, tarjetas de canciones, cuadernillo, dado de variaciones, cohete, prearco, conejos con zanahoria, hamburguesa completa, correa (para cello o contrabajo), pelota anti-stress, squishy, 4 brochecitos y stickers.Packaginig en bolsa de lienzo',
    price: 15000,
    image: './img/originales/kit-instrumentos.png',
    category: ['Suzuki', 'Todo', 'Cuerda Frotada']
})

productList.push ({
    name: 'Kit instrumentista de cuerda en caja',
    description: 'Contiene: juego de peces, dados numéricos, dado de notación a elección, antifaz, tarjetas de notas, tarjetas de canciones, cuadernillo, dado de variaciones, cohete, prearco, conejos con zanahoria, hamburguesa completa, correa (para cello o contrabajo), pelota anti-stress, squishy, 4 brochecitos y stickers.Packaginig en caja de madera artesanal de fenólico y terciado fabricada a mano de 18x33 con tres compartimentos diferenciados. Incluye pizarra imantada pentagramada y notas en madera negra y un rompecabezas de instrumento en imán tamaño A4 para recortar',
    price: 25000,
    image: './img/kit.png',
    category: ['Suzuki', 'Todo', 'Cuerda Frotada']
})

function renderProducts (arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoPrincipal = document.createElement('div');
        productInfo.classList.add('product-info-principal');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;
        const figureCarro = document.createElement('figure');
        const iconCarrito = document.createElement('img');
        iconCarrito.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        figureCarro.appendChild(iconCarrito);
        productInfoPrincipal.append(productPrice, figureCarro, productName);
        productInfo.append(productInfoPrincipal, productDescription);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

// productList.forEach((product) => {
//     products = `<div class="product-card">
//     <img src=${product.image} alt=${product.name}>
//     <div class="product-info">
//       <div>
//         <div class="product-info-principal">
//             <p>$${product.price}</p>
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="agregar al carrito">
//             </figure>
//             <p>${product.name}</p>
//         </div>
//         <p>${product.description}</p>
//       </div>
//     </div>
//   </div>
//     `
//     cardsContainer.innerHTML += products;
// })



