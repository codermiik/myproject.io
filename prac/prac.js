/*---counts---*/
const counters=document.querySelectorAll('.count');
const speed=100;
counters.forEach((counter)=>{
    const updateCount=()=>{
        const target=parseInt(counter.getAttribute('data-target'));
        const count=parseInt(+counter.innerText);
        const increment=Math.trunc(target/speed);
        console.log(increment);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            count.innerText = target;
          }
        };
        updateCount();
    
})
 

/*
function validateForm(){
  var name=document.contactForm.name.value;
  var email=document.contactForm.email.value;
  var subject=document.contactForm.subject.value;
  var message=document.contactForm.message.value;

  var nameErr= emailErr =subjectErr =messageErr=true 
   //validate name
   if(name==''){
   alert('please enter name')
  }
}*/




//practise codes


 let arr=[2,3,4,5,6,7,8,9]
 let arr2=arr.pop()
 console.log(arr2)

