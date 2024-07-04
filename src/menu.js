import PortraitBox from "./images/portrait_box.png";
import BakedFish from "./images/baked_fish.png";
import BeanHotpot from "./images/bean_hotpot.png";
import Beer from "./images/beer.png";
import Bread from "./images/bread.png";
import Coffee from "./images/coffee.png";
import CrispyBass from "./images/crispy_bass.png";
import EggplantParm from "./images/eggplant_parmesan.png";
import FriedEel from "./images/fried_eel.png";
import PepperPopper from "./images/pepper_poppers.png";
import Pizza from "./images/pizza.png";
import RhubarbPie from "./images/rhubarb_pie.png";
import Salad from "./images/salad.png";
import Spaghetti from "./images/spaghetti.png";
import TroutSoup from "./images/trout_soup.png";

function createMenuItem(itemName, itemImgPath) {
  const menuItem = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgBG = document.createElement("img");
  const imgFood = document.createElement("img");
  const text = document.createElement("span");

  text.classList.add("menu-item", "text");
  text.textContent = itemName;

  imgFood.classList.add("menu-item", "img-portrait");
  imgFood.setAttribute("src", itemImgPath);
  imgFood.setAttribute("alt", itemName);

  imgBG.classList.add("menu-item", "img-bg");
  imgBG.setAttribute("src", PortraitBox);

  imgContainer.classList.add("menu-item", "img-container");

  menuItem.classList.add("menu-item", "container");

  imgContainer.appendChild(imgBG);
  imgContainer.appendChild(imgFood);

  menuItem.appendChild(imgContainer);
  menuItem.appendChild(text);

  return menuItem;
}

export default function generateMenuPage() {
  const menuItems = {
    "Baked Fish": BakedFish,
    "Bean Hotpot": BeanHotpot,
    Beer: Beer,
    Bread: Bread,
    Coffee: Coffee,
    "Crispy Bass": CrispyBass,
    "Eggplant Parm": EggplantParm,
    "Fried Eel": FriedEel,
    "Pepper Popper": PepperPopper,
    Pizza: Pizza,
    "Rhubarb Pie": RhubarbPie,
    Salad: Salad,
    Spaghetti: Spaghetti,
    "Trout Soup": TroutSoup,
  };
  const heading = document.createElement("h2");
  const container = document.createElement("div");

  heading.classList.add("menu", "heading");
  heading.textContent = "Menu";

  container.classList.add("menu", "container");

  Object.keys(menuItems).forEach((itemName) => {
    container.appendChild(createMenuItem(itemName, menuItems[itemName]));
  });

  return [heading, container];
}
