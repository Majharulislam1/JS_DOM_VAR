
const input = document.querySelectorAll('.controls input');



 input.forEach(my_fun);

 function my_fun(i){
    
    i.addEventListener('change',handleMouse);

 }

 function handleMouse(){
      
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
 }