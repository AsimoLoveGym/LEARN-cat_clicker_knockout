var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/miaomiao_1.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  this.nicknames = ko.observableArray(['Tabtab','T-Bone','Mr. T','Catty Cat']);

  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10){
      title = "Newborn";
    } else if (clicks < 50){
      title = "Infant";
    } else if (clicks < 100){
      title = "Child";
    } else if (clicks < 200){
      title = "Teen";
    } else if (clicks < 500){
      title = "Adult";
    } else {
      title = "Ninja";
    }
    return title;
  },this);
  // The ",this" is important!
}

var ViewModel = function(){
  this.currentCat = ko.observable(new Cat());
  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  };
}

ko.applyBindings(new ViewModel());
