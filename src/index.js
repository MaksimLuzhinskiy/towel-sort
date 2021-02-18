
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
     let arr = new Array();
      if(!Array.isArray(matrix)){ return arr}
      matrix.map((x,i)=>{
          if((i+1) %2 == 0 ){arr=arr.concat(x.reverse())}else{arr=arr.concat(x);}
      });
      return arr;
}
