function rot13(str) { // LBH QVQ VG!
  
  var arr = str.split("");

  var nstaar = new Array(arr.length);
  
  var p = [];
  
  //loop for changing letters into their code
  for(var i = 0; i < arr.length; i++){
    for(var k = 0; k <arr[1].length; k++){
        
      nstaar[i] = arr[i].charCodeAt(k);
      p.push(nstaar[i]);
      k++;

    }
  }
  var nstaar2 = new Array(p.length);
  var p2 = [];
  
   for(var ii = 0; ii < arr.length; ii++){
    for(var ik = 0; ik <p.length; ik++){
      
        if(p[ik]>64 && p[ik]<=77){
      nstaar2[ii] = String.fromCharCode(p[ik]+13);
      p2.push(nstaar2[ii]);
      ii++;
        }
      else if (p[ik]>77 && p[ik]<=90){
        nstaar2[ii] = String.fromCharCode(p[ik]-13);
      p2.push(nstaar2[ii]);
      ii++;
      }else{
          nstaar2[ii] = String.fromCharCode(p[ik]);
      p2.push(nstaar2[ii]);
      ii++;
      }


    }
  }
  
  
  


  p2 = p2.join("");
  p2 = p2.toString();
  
  'ABC'.charCodeAt(0); // returns 65
  String.fromCharCode(65, 66, 67);  // "ABC"
  
  return p2;
}