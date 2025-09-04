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
}

export default totalizar;