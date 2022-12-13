
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
    for (let i =0;i<array.length;i++){
       arrayCallBack.push(callBack(array[i],i,array))
    
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
  function newFindCallback(element,index,array){
 
     if(element>70){
        return element
     }
       return false
   }
   
   function newFind(array,callback){
     
   
       for(let i=0;i<array.length;i++){ 


          const result= callback(array[i] ,i,array)
          
          if(result){

           
            return result

            
          }

         
       }
      
   }
   console.log( newFind(numbers,newFindCallback));
       
// Método reduce

function callBackReduce(acumulador,element){
   
    return  acumulador + element
}

function newReduce( array,callback,valorInicial ){
let cont=valorInicial
for(let i=0;i<array.length;i++){
    
   
   cont=callback(cont,array[i])
   
}
return cont

}
console.log (newReduce(numbers,callBackReduce,0));

//Método includes


function newIncludes(element,array,indexFrom){
    if(!indexFrom){
        indexFrom=0
    }

    for(indexFrom;indexFrom<array.length;indexFrom++){
       if(array[indexFrom]===element ){
       return true
       }
    }
    return false
}
     console.log(newIncludes(61,numbers,0)) ;

     //Método indexOf
    
     function newIndexOf (array,element,index){
        if(!index){
            index=0
        }

        for (index;index<array.length;index++){
             if(array[index]== element ){
                    return index 
                        }
        }

        return -1
    }
    
    console.log(newIndexOf(numbers,81,0));



