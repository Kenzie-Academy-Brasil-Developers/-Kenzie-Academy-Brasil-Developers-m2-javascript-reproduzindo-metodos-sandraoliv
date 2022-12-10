
const numbers2=[5,3,4,9,11,4,7,9,8,1] 
const newNumbers=[]
const numbers=[61,9,36,94,81,26,76,11,75,89]


// Metodo Map

//Função callback
function callBackMap(number,index,array){ 
    return number*2
    
}
// O método
function newMap(array,callBack){
    let arrayCallBack=[]
    for (let i =0;i<numbers.length;i++){
       arrayCallBack.push( callBack(numbers[i],i,array))
    
    }

    return arrayCallBack
}
    console.log(newMap(numbers, callBackMap))
    
    // Método filter
 
function callBackFilter(number,index,array){

     return number>10
}

    function newFilter(array,callback){
        let filteredNumbers=[]
     
        for(let i=0;i<array.length;i++){

  if(callback(array[i],i,array)){
    filteredNumbers.push(array[i])
  }
        
        }
        return filteredNumbers

    }
console.log( newFilter(numbers, callBackFilter));


//Método find
function newFindCallback(element){
 return element

}

function newFind(array,callback){
  

    for(let i=0;i<array.length;i++){ 
        if(array[i] >callback(61)){
           
            return  array[i]
        }
    
    }
   
}
console.log( newFind(numbers,newFindCallback));
       


// Método reduce

function callBackReduce(acumulador,element){
   
return acumulador + element

}

function newReduce( array,callback ){
let cont=0
for(let i=0;i<array.length;i++){
    
   
   cont=callback(cont,array[i])
   
}
return cont

}
console.log (newReduce(numbers,callBackReduce));



//Método includes


function newIncludes(element,array){

    for(let i=0;i<array.length;i++){
       if(array[i]===element){
       return true
       }
    }
    return false
}
     console.log(newIncludes(61,numbers)) ;

     //Método indexOf
    
     function newIndexOf (array,element){
        for (let i=0;i<array.length;i++){
             if(array[i]== element){
                    return i 
                        }
        }

        return -1
    }
    console.log(newIndexOf(numbers,81));



