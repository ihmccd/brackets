module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  let compareArr=[];

  for (let i=0;i<arr.length; i++){
    let subArr = [];
    
    bracketsConfig.forEach(function(e){
    
    if (e[0]==arr[i] && e[1]!=arr[i]){
    compareArr.splice(i,0,arr[i]);
    compareArr.splice(i+1,0,e[1]);
      }
    
    if (e[0]==arr[i] && e[1]==arr[i]){
      let counter = 0;
      for (let j=0;j<=i;j++){
        if (arr[j]==e[0]){
          counter++
        }
      }
    
    if (counter>0 && counter%2!=0){
    compareArr.splice(i,0,arr[i]);
    compareArr.splice(i+1,0,e[1]);
      }
      }
    
    })

  }

 //console.log(compareArr.join("")==str);
 return compareArr.join("")==str;// your solution
}
