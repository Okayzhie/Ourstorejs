//displaying items dynamically
//from local host
//items

const items = [
  {
    id: 1,
    name: "newbies",
    category: "shoes",
    price: 15.99,
    img: "https://th.bing.com/th/id/OIP.x49AlqSRD8s8vz9EOL11YQAAAA?pid=ImgDet&w=182&h=182&c=7",
    desc: `canvas `,
  },
  {
    id: 2,
    name: "mens runner",
    category: "shoes",
    price: 13.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/0530602/1.jpg?7104",
    desc: `sneakers best runners `,
  },
  {
    id: 3,
    name: "okayzhie shoe",
    category: "shoes",
    price: 6.99,
    img: "https://th.bing.com/th/id/OIP.2r_3pR_W6R9vgIY15zh-NwHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain",
    desc: `black shoes.`,
  },
  {
    id: 4,
    name: "check long sleeve ",
    category: "shirts",
    price: 20.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/4018752/1.jpg?8789",
    desc: `mens fashion check longsleeves. `,
  },
  {
    id: 5,
    name: "polo shirt",
    category: "shirts",
    price: 22.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/8379501/1.jpg?0745",
    desc: `round neck short sleeves. `,
  },
  {
    id: 6,
    name: "short nicker",
    category: "shorts",
    price: 18.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/183227/1.jpg?3265",
    desc: `smart men's sport gym skinny nicker`,
  },
  {
    id: 7,
    name: "beach pants",
    category: "shorts",
    price: 8.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/8233932/1.jpg?4760",
    desc: `men summer beach pants casual running sport short`,
  },
  {
    id: 8,
    name: "cargo pants",
    category: "pants",
    price: 12.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/9003812/1.jpg?3189",
    desc: `classic green cargo pants with button `,
  },
  {
    id: 9,
    name: "joggers",
    category: "pants",
    price: 16.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/529267/1.jpg?5229",
    desc: `mens trouser casual trending sport jogger chinos.`,
  },
  {
    id: 10,
    name: "sweat pants",
    category: "pants",
    price: 22.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/0976781/1.jpg?0737",
    desc: `wide sweatpants black/white stripes.`,
  },
  {
    id: 11,
    name: "black singlets",
    category: "singlets",
    price: 15.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/1766932/1.jpg?7240",
    desc: `3-in-1 male singet`,
  },
  {
    id: 12,
    name: "white singlets",
    category: "singlets",
    price: 15.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/8553722/1.jpg?3355",
    desc: `male underwears `,
  },
  {
    id: 13,
    name: "black jeans",
    category: "jeans",
    price: 18.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/0337112/1.jpg?0462",
    desc: `non faded wash black jeans `,
  },
  {
    id: 14,
    name: "blue jeans",
    category: "jeans",
    price: 17.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/7934371/1.jpg?3735",
    desc: `non faded wash blue jeans `,
  },
  {
    id: 15,
    name: "bratop",
    category: "bratop",
    price: 10.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/1577362/1.jpg?6812",
    desc: `non padded bratop for ladies`,
  },
  {
    id: 16,
    name: "bonestraight ",
    category: "wig",
    price: 175.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/1075582/1.jpg?8727",
    desc: `wig with closure `,
  },
  {
    id: 17,
    name: "short gown",
    category: "gown",
    price: 15.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/3260331/1.jpg?1676",
    desc: `corperate Female Navy-Blue Gown`,
  },
  {
    id: 18,
    name: "bathrobe",
    category: "unisex",
    price: 34.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/8480262/1.jpg?3742",
    desc: `white bathrobe `,
  },
  {
    id: 19,
    name: "long gown",
    category: "gown",
    price: 29.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/268383/1.jpg?9312",
    desc: `casual dressing for female parties`,
  },
  {
    id: 20,
    name: "unisex wrist watch ",
    category: "unisex",
    price: 15.99,
    img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/806118/1.jpg?9452",
    desc: `digital sport led watch for men and women `,
  },
];

const divStoreItems = document.querySelector(".store-items");
const divCartItems = document.querySelector(".cart-items");

const btnContainer = document.querySelector(".btn-container");
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

//cartAddbtn.addEventListener("click", editItem);
//cartRemovebtn.addEventListener("click", deleteItem);

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  //listen for click closebtn once click close sidebar
  sidebar.classList.remove("show-sidebar");
});
//filter items

window.addEventListener("DOMContentLoaded", function () {
  displayStoreItems(items);
  displayStoreButtons();
  setupItems();
});

const displayStoreItems = function (storeItems) {
  let displayItems = storeItems.map(function (item) {
    //console.log(items);

    return `<article class="store-items-details">
        <img
          src=${item.img}
          class="photo"
          alt=${item.name}
        />
        <div class="item-details" >
       
          <header >
            <h3>${item.name} </h3>
            <h3 class="price"> $${item.price}</h3>
            
          </header>
          <h5>${item.desc}</h5>
          <button type="button" class="add-2-cart" data-id="${item.id}">Add to Cart</button>
        </div>
      </article>;`;
  });
  displayItems = displayItems.join("");
  //join to remove the commas from the article code
  divStoreItems.innerHTML = displayItems;

  //linking to html

  const add2Cartbtn = document.querySelectorAll(".add-2-cart");

  add2Cartbtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log("added to cart");

      const id = e.currentTarget.dataset.id;
      const cartItems = items.filter(function (cartItem) {
        if (cartItem.id == id) {
          const addbtn = e.target;
          addbtn.innerText = "In Cart";
          addbtn.disabled = true;
          return cartItem;
        }
      });

      //creating cart items

      cartItems.map(function (cart) {
        //console.log(cart.name);
        //add amount manually
        cart = { ...cart, amount: 1 };
        const id = cart.id;
        const name = cart.name;
        const price = cart.price;
        const img = cart.img;
        let amount = cart.amount;
        //new Date().getTime().toString()
        //console.log(id);
        getLocalStorage();
        createListItems(id, name, price, img, amount);
        updateCartTotal();

        //show sidebar
        sidebar.classList.add("show-sidebar");
        //add to local storage
        addToLocalStorage(
          `${cart.id}`,
          `${cart.name}`,
          `${cart.price}`,
          `${cart.img}`,
          amount
        );
      });
    });
  });
};

function displayStoreButtons() {
  const categories = items.reduce(
    function (values, item) {
      //if items category isnt selected push all
      if (!values.includes(item.category)) {
        values.push(item.category);
      }

      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
      ${category}
    </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  //added buttons dynamically

  const filterbtn = document.querySelectorAll(".filter-btn");

  filterbtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      //console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const storeCategory = items.filter(function (storeItem) {
        // console.log(storeItem.category);
        if (storeItem.category === category) {
          return storeItem;
        }
      });
      if (category === "all") {
        displayStoreItems(items);
      } else {
        displayStoreItems(storeCategory);
      }
    });
  });
}

/*
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  });
}
*/
function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-items")[0];
  const cartItems = cartItemContainer.getElementsByClassName("cart-item");
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    const cartitem = cartItems[i];
    const priceElement = cartitem.getElementsByClassName("cart-item-price")[0];
    const quantityElement =
      cartitem.getElementsByClassName("cart-item-amount")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));

    var quantity = quantityElement.innerText;

    total = total + quantity * price;
  }

  document.getElementsByClassName("cart-total text-slanted")[0].innerText =
    "$" + total.toFixed(2);
}

function createListItems(id, name, price, img, amount) {
  const element = document.createElement("div");
  element.classList.add("cart-item");
  //create attr
  const attr = document.createAttribute("data-id");
  attr.value = id;

  element.setAttributeNode(attr);

  element.innerHTML = `
    <img
      class="cart-item-img"
      src="${img}"
      alt="${name}"
    /> 
    <header class="cart-header">
    <h4 class="cart-item-name">${name}</h4>
    <button class="removeBtn" data-id="${id}" >remove</button>
    <h4 class="cart-item-price">$${price}</h4>
    
    </header>
    <div class="btn-group">
  
     <button onclick="increase(this,${id})" class="cart-item-increase-btn" data-id="${id}">+</button>
     <p class="cart-item-amount" data-id="${id}">${amount}</p>
     <button onclick="decrease(this,${id})" class="cart-item-decrease-btn" data-id="${id}">-</button>
    </div>
  `;

  //const elementClassName = (element.className = `${id}`);
  //const cartItemNames = document.getElementsByClassName(`${id}`);
  //console.log(divCartItems.childNodes);
  //console.log(divCartItems.children);

  divCartItems.appendChild(element);

  // i want to turn to function
  inCart();
  const removeBtn = document.querySelectorAll(".removeBtn");

  for (var i = 0; i < removeBtn.length; i++) {
    var rbtn = removeBtn[i];

    rbtn.addEventListener("click", function (e) {
      const clicked = e.target;
      const itemid = e.currentTarget.dataset.id;
      //console.log(clicked);
      //remove the parent elements the cart item div

      clicked.parentElement.parentElement.remove();
      removeFromLocalStorage(itemid);
      updateCartTotal();
      inCart();
    });
  }
  const checkOutBtn = document.querySelector(".cart-checkout-btn");
  checkOutBtn.addEventListener("click", function (e) {
    element.remove();
    clearItems();
    inCart();
    updateCartTotal();
  });
}

function inCart() {
  const add2Cartbtn = document.querySelectorAll(".add-2-cart");
  let cartedItems = document.getElementsByClassName("cart-item");
  let cartArray = Array.from(cartedItems);
  //console.log([...cartedItems]);
  //var arr = [].slice.call(cartedItems);
  //console.log(arr);

  add2Cartbtn.forEach(function (btn) {
    let btnid = btn.dataset.id;
    let inCart = cartArray.find((item) => item.dataset.id === btnid);

    if (inCart) {
      btn.innerText = "In Cart";
      btn.disabled = true;
    } else {
      btn.innerText = "Add To Cart";
      btn.disabled = false;
    }

    updateCartTotal();
  });
}

function increase(e, id) {
  let items = getLocalStorage();
  let amtid = id;

  var tempItem = items.find((cart) => cart.id == amtid);
  //console.log(tempItem.amount);
  tempItem.amount = tempItem.amount + 1;
  editLocalStorage(
    tempItem.id,
    tempItem.name,
    tempItem.price,
    tempItem.img,
    tempItem.amount
  );
  e.nextElementSibling.innerText = tempItem.amount;
  updateCartTotal();
  inCart();
}

let decrease = (e, id) => {
  let items = getLocalStorage();
  let amtid = id;
  var tempItem = items.find((cart) => cart.id == amtid);
  //console.log(tempItem.amount);
  tempItem.amount = tempItem.amount - 1;
  editLocalStorage(
    tempItem.id,
    tempItem.name,
    tempItem.price,
    tempItem.img,
    tempItem.amount
  );
  e.previousElementSibling.innerText = tempItem.amount;

  if (e.previousElementSibling.innerText < 1) {
    e.parentElement.parentElement.remove();
    removeFromLocalStorage(amtid);
    inCart();
    updateCartTotal();
  }
  updateCartTotal();
  inCart();
};

//items set up
function setupItems() {
  let items = getLocalStorage();
  let amount = 1;

  if (items.length > 0) {
    items.forEach(function (item) {
      // giving it new value while in cart
      amount = item.amount;
      createListItems(item.id, item.name, item.price, item.img, amount);
    });
  }
}

function addToLocalStorage(id, name, price, img, amount) {
  const cart = { id, name, price, img, amount };
  let items = getLocalStorage();
  items.push(cart);

  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  var items = getLocalStorage();

  for (var i = 0; i < items.length; i++) {
    //stringify items using for instead of filter
    var item = items[i];
    //console.log(item);
    if (item.id == id) {
      items.splice(i, 1);
    }
  }
  localStorage.setItem("list", JSON.stringify(items));
}
// edit to change amount
function editLocalStorage(id, name, price, img, amount) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id == id) {
      item.name = name;
      item.price = price;
      item.img = img;
      item.amount = amount;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
//localStorage.removeItem("list");

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function clearItems() {
  const items = document.querySelectorAll("cart-items");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  localStorage.removeItem("list");

  sidebar.classList.remove("show-sidebar");
}
