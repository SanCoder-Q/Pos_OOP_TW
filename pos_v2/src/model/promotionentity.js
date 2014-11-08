//SanCoder 2014-11-01
//TW homework: Pos_v1
//Happy halloween!

//alert(document.currentScript.src);

//Promotion class
function PromotionEntity(promotionStr, promotionType, promotionPriority, countPriceCallBack) {
  //parameter validation
  Util.Validate.paraNumValidate(arguments, 4);
  Util.Validate.nullValidate(arguments);
  Util.Validate.classValidate(countPriceCallBack, Function);

  //#public property:
  this.name = promotionStr;
  this.type = promotionType;
  this.priority = promotionPriority;
  //#public method:
  this.countPrice = countPriceCallBack; //parameter is a itemClass in ShoppingCart
}
