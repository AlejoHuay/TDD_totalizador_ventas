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
}

export default totalizar;