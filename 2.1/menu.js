
function Container() {
  this.id = 'container';
  this.className = 'container';
  //this.classList.remove('container');
}

Container.prototype.render = function() {
  var div = document.createElement('div');
  div.id = this.id;
  div.className = this.className;

  return div;
}

Container.prototype.remov = function() {
  var elem = document.getElementsByName('div');
  elem.remove();
}

function Menu(id, className, items) {
  Container.call(this);
  this.id = id;
  this.className = className;
  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);

Menu.prototype.render = function () {
  var ul = document.createElement('ul');
  ul.className = this.className;
  ul.id = this.id;

  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i] instanceof MenuItem) {
      ul.appendChild(this.items[i].render());
    }
  }

  return ul;
}

function MenuItem(link, label, id) {
  Container.call(this);
  this.link = link;
  this.label = label;
  this.id = id;
}

MenuItem.prototype = Object.create(Container.prototype);

MenuItem.prototype.render = function() {
  var li = document.createElement('li');
  var a = document.createElement('a');

  a.href = this.link;
  a.textContent = this.label;
  li.appendChild(a);

  return li;
}