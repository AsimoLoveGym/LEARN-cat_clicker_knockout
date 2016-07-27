var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

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
  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/miaomiao_1.jpg',
    imgAttribution: 'https://www.flickr.com/photos/big',
    nicknames: ['Tabtab','T-Bone','Mr. T','Catty Cat'],
  }));
  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  };
}

ko.applyBindings(new ViewModel());
