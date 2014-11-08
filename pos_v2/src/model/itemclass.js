//SanCoder 2014-11-01
//TW homework: Pos_v1


function ItemClass(item, count) {
  //parameter validation
  Util.Validate.paraNumValidate(arguments, 2);
  Util.Validate.nullValidate(arguments);
  Util.Validate.zeroValidate(count);

  var _items = [];
  var _originPrice = 0;
  var _itemInfo = item;
  var _price = 0
  var _given = 0;
  var _discountNum = 0;
  var _isEverDiscount = false;

  this.getItemCount = function() { return _items.length};
  this.getItemDiscountCount = function() { return _discountNum;};
  this.getItemCountWithoutDiscount = function() { return _items.length - _discountNum;};
  this.getClassSumPrice = function() { return _price};
  this.getClassSumDiscount = function() { return _originPrice - _price};
  this.getItemName = function() { return _itemInfo.name;};
  this.getItemUnit = function() { return _itemInfo.unit;};
  this.getItemUnitPrice = function() { return _itemInfo.price;};
  this.isItemClassEverDiscount = function() {return _isEverDiscount;};
  this.setDiscountItems = function(discountItemNum, newPrice) {
    if(discountItemNum > this.getItemCountWithoutDiscount())
      throw "setDiscountItems: The number of discount items cannot be more than the number of items without discount.";
    _isEverDiscount = true;
    _discountNum += discountItemNum;
    if(newPrice == 0)
      _given += discountItemNum;
    for(var i = 0; i < _items.length && discountItemNum > 0; i++)
      if(!_items[i].isDiscount()) {
        _items[i].discount(newPrice);
        discountItemNum --;
        _price -= _items[i].getDiscount();
      }
  };

  this.addItems = function(num){
    //parameter validation
    Util.Validate.paraNumValidate(arguments, 1);
    Util.Validate.nullValidate(arguments);
    Util.Validate.zeroValidate(num);

    _originPrice += num * _itemInfo.price;
    _price += num * _itemInfo.price;

    for(var i=0; i< count; i++)
      _items.push(new ItemEntity(_itemInfo, _items.length));
  };

  this.addItems(count);
}
