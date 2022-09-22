import Accordion from "./accordion.js";
import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownsMenu) {
    this.dropdownMenus = document.querySelectorAll(dropdownsMenu);
    // define touchestar e click como argumento padrão
    // de events caso o usuários não defina
    if (events === undefined) this.events = ["touchsta{rt", "click"];

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    event.currentTarget.classList.add(this.activeClass);
    outsideClick(event.currentTarget, this.events, () => {
      event.currentTarget.classList.remove("active");
    });
  }
  // adiciona oos eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
