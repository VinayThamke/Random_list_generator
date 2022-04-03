
const button = document.querySelector("button");

const randomGenerator = () =>{
    const numbers = [];
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    console.log(end);

  for(let i=0; i<=end-start; i++){
      let x = Math.floor(Math.random() * (end - start + 1 ) + start);
        console.log(x);
        
        if(!numbers.includes(x))
        {
            numbers.push(x);
            const num = document.createElement("h2");
            num.innerText = x;
            document.getElementById('outputrow').appendChild(num);
            
            
        }else{
            i = i - 1;
        }
        
    }

    console.log(numbers);
}
button.addEventListener("click", randomGenerator);

