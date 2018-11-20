var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

for (const key in btnList) {
    if (btnList.hasOwnProperty(key)) {
        const element = btnList[key];
        switch(element.name){
            case 'increase':element.addEventListener('click',increaseValue);break;
            case 'decrease':element.addEventListener('click',decreaseValue);break;
            case 'addToCart':element.addEventListener('click',addToCart);break;
        }        
    }
}
function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}
localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量


class Product{
    constructor(id,title,imgSrc,price){
        this.id=id;
        this.title=title;
        this.imgSrc=imgSrc;
        this.price=price;
    }
}


class Order{
    constructor(product,qty,selectStatus){
        this.id=product.id;
        this.title=product.title;
        this.imgSrc=product.imgSrc;
        this.price=product.price;
        this.qty=qty;
        this.selectStatus=selectStatus;
    }
}

class CartData{
    constructor(){
        this.orderList=new Array();
        this.totalQty=0;
        this.totalAmount=0;
        this.units=0;
    }
}

class ShoppingCart{

    getDataFromLocalStorage(){

        let lzzyCart=localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if(lzzyCart==null||lzzyCart==''){
            return new cartData();
        }

        else{
            return JSON.parse(lzzyCart);
        }
        // return localStorage.getItem('test');

    }


    setDataToLocalStorage(cartData){

        // var cartDataString=JSON.stringify(cartData);
        // localStorage.setItem('test',cartDataString);

        // localStorage.setItem('test',JSON.stringify(cartDate));

        localStorage.removeItem('lzzyCart');
        localStorage.setItem('lzzyCart',JSON.stringify(cartData));
       
    }
}