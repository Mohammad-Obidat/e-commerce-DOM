let _cart = [];
let _products = products;

const contentContainer = document.getElementById('content-container');
contentContainer.style.display = 'flex';

const clear = () => {
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.lastChild);
  }
};

const addToCart = (prodect) => {
  _cart.push(prodect);
};

const deleteFromCart = (prodect) => {
  for (let i = 0; i < _cart.length; i++) {
    if (prodect == _cart[i]) {
      _cart.splice(i, 1);
      renderCart();
    }
  }
};

const renderAboutUs = () => {
  clear();

  const str = document.createElement('h1');
  str.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   It has survived not only five centuries, but also the leap into electronic typesetting, 
                   remaining essentially unchanged. It was popularised in the 1960s 
                   with the release of Letraset sheets containing Lorem Ipsum passages, 
                   and more recently with desktop publishing software like Aldus PageMaker 
                   including versions of Lorem Ipsum.`;
  contentContainer.appendChild(str);
};
renderAboutUs();

const renderProdectList = () => {
  clear();

  for (let prodect = 0; prodect < _products.length; prodect++) {
    let prodectList = document.createElement('div');
    let image = document.createElement('img');
    let addItemToCart = document.createElement('button');
    let cartItems = (prodectList.innerHTML = _products[prodect]);

    prodectList.innerHTML = cartItems.name + ' - Price: $' + cartItems.price;
    prodectList.setAttribute('class', 'pordectList');

    image.setAttribute('src', `${cartItems.img}`);
    image.setAttribute('class', 'img');

    addItemToCart.innerHTML = 'Add To Cart';
    addItemToCart.setAttribute('class', 'cartButton');
    addItemToCart.style.backgroundColor = 'lightgreen';
    addItemToCart.onclick = () => {
      addToCart(cartItems);
    };

    prodectList.appendChild(image);
    prodectList.appendChild(addItemToCart);
    contentContainer.appendChild(prodectList);
  }
};

const renderCart = () => {
  clear();

  for (let item = 0; item < _cart.length; item++) {
    let prodectList = document.createElement('div');
    let image = document.createElement('img');
    let cartItems = (prodectList.innerHTML = _cart[item]);

    prodectList.innerHTML = cartItems.name + ' - Price: $' + cartItems.price;
    prodectList.setAttribute('class', 'pordectList');

    image.setAttribute('src', `${cartItems.img}`);
    image.setAttribute('class', 'img');

    let deleteCartButton = document.createElement('button');
    deleteCartButton.innerHTML = 'Delete From Cart';
    deleteCartButton.setAttribute('class', 'cartButton');
    deleteCartButton.style.backgroundColor = 'rgb(248, 83, 83)';
    deleteCartButton.style.color = 'white';

    deleteCartButton.onclick = () => {
      deleteFromCart(_cart[item]);
    };

    prodectList.appendChild(image);
    prodectList.appendChild(deleteCartButton);
    contentContainer.appendChild(prodectList);
  }
};
