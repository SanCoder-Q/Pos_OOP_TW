//SanCoder 2014-11-01
//TW homework: Pos_v1

//alert(document.currentScript.src);

//Item class
function ItemEntity(itemInfo, itemID) {
  //parameter validation
  Util.Validate.paraNumValidate(arguments, 2);
  Util.Validate.nullValidate(arguments);

  var _isDiscount = false;
  var _itemInfo = itemInfo;
  var _originPrice = itemInfo.price;
  var _price = itemInfo.price;
  var _discount = 0;
  var _itemID = itemID;
  //#public property:


  this.discount = function(newPrice) {
    //parameter validation
    Util.Validate.paraNumValidate(arguments, 1);
    Util.Validate.nullValidate(arguments);
    if(newPrice < 0)
      console.log('Warning: the item ' + _itemInfo.name + "'s new price is less than 0.");

    _price = newPrice;
    _discount = _originPrice - newPrice;
    _isDiscount = true;
  };

  this.getDiscount = function(){ return _discount;};
  this.isDiscount = function() { return _isDiscount;};
}
