var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/miaomiao_1.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  this.nicknames = ko.observableArray(['Tabtab','T-Bone','Mr. T','Catty Cat']);

  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  };
}

ko.applyBindings(new ViewModel());
