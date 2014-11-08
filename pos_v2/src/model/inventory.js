//SanCoder 2014-10-31
//TW homework: Pos_v1
//Happy halloween!

//alert(document.currentScript.src);

//Invertory class
function Inventory(shoppingCart) {
  //parameter validation
  Util.Validate.paraNumValidate(arguments, 1);
  Util.Validate.nullValidate(arguments);
  Util.Validate.classValidate(shoppingCart, ShoppingCart);

  //private field
  var _shoppingCart = shoppingCart;
  var _shopName = '没钱赚商店';
  var _outputStr = '';

  function getFormattedCurrentTime() {
    function FixNumberTwoDigitStr(number){ return number < 10 ? '0' + number : number.toString(); }

    var currentDate= new Date(),
        year = FixNumberTwoDigitStr(currentDate.getFullYear()),
        month = FixNumberTwoDigitStr(currentDate.getMonth() + 1),
        date = FixNumberTwoDigitStr(currentDate.getDate()),
        hour = FixNumberTwoDigitStr(currentDate.getHours()),
        minute = FixNumberTwoDigitStr(currentDate.getMinutes()),
        second = FixNumberTwoDigitStr(currentDate.getSeconds()),
        dateStr = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return dateStr;
  }

  //public method
  this.getOutput = function() {
    return _outputStr;
  };

  this.print = function() {
    console.log(_outputStr);;
  };

  function printTitle() {
    _outputStr += '***<' + _shopName + '>购物清单***\n';
  };

  function printDivider() {
    _outputStr += '----------------------\n';
  };

  function printEndLine() {
    _outputStr += '**********************';
  };

  function printPromotionTitle() {
    _outputStr += '挥泪赠送商品：\n';
  };

  function printTime() {
    _outputStr += '打印时间：' + getFormattedCurrentTime() + '\n';
  };

  function printItemPart() {
    var shoppingList = _shoppingCart.getShoppingList();
    for(var i in shoppingList) {
      var itemClass = shoppingList[i];
      _outputStr +=
        '名称：' + itemClass.getItemName() +
        '，数量：' + itemClass.getItemCount() + itemClass.getItemUnit() +
        '，单价：' + itemClass.getItemUnitPrice().toFixed(2) +
        '(元)，小计：' + itemClass.getClassSumPrice().toFixed(2) + '(元)\n';
    }
  };

  function printPromotionPart() {
    var shoppingList = _shoppingCart.getShoppingList();
    for(var i in shoppingList) {
      var itemClass = shoppingList[i];
      if(itemClass.isItemClassEverDiscount())
        _outputStr +=
          '名称：' + itemClass.getItemName() +
          '，数量：' + itemClass.getItemDiscountCount() + itemClass.getItemUnit() + '\n';
    }
  };

  function printSummationPart() {
    _outputStr += '总计：' + _shoppingCart.getSumPrice().toFixed(2) + '(元)\n';
    _outputStr += '节省：' + _shoppingCart.getSumDiscount().toFixed(2) + '(元)\n';
  };

  function combine() {
    printTitle();
    printTime();
    printDivider();
    printItemPart();
    printDivider();
    printPromotionTitle();
    printPromotionPart();
    printDivider();
    printSummationPart();
    printEndLine();
  }

  combine();
}
