class totalizar{
  constructor(cant, precio, estado){
    this.cantItems = cant;
    this.precioItem = precio;
    this.codEstado = estado 
  }
  showCantItems(){
    return this.cantItems;
  }
  showPrizeItem(){
    return this.precioItem; 
  } 
  showStateCode(){
    return this.codEstado; 
  }
  showPrecioNeto(){
    return this.cantItems * this.precioItem; 
  }
  showStateTaxe(){
    switch(this.codEstado){
        case "CA":
            return 8.25;
        case "TX":
            return 6.25;
        case "AL":
            return 4;
        case "NV":
            return 8;
        case "UT":
            return 6.65;
    }
  }
  showStateTaxeValue(){
    return this.showPrecioNeto()*(this.showStateTaxe()/100);  
  }
  showCantDiscount(){
    switch (true) {
       case this.cantItems >= 30000: return 15;
       case this.cantItems >= 10000: return 10;
       case this.cantItems >= 7000:  return 7;
       case this.cantItems >= 3000:  return 5;   
       case this.cantItems >= 1000:  return 3;
       default: return 0;
    }
  }

  showCantDiscountValue(){
    return this.showPrecioNeto()*(this.showCantDiscount()/100)  
  }

  showPrecioTotal(){
    return this.showPrecioNeto() + this.showStateTaxeValue() - this.showCantDiscountValue(); 
  }
}


export default totalizar;