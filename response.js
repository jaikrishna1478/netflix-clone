
function  SubmitHandler(e){
    e.preventDefault();
   let name1= e.target.Fname.value;
   let id1=document.getElementById("result");
   id1.innerText=`${name1} your details are send`
      
}; 

