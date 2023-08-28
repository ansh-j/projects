let indexes= document.querySelectorAll(".index");
let lines = document.querySelectorAll(".line");
let prev_btn = document.querySelectorAll(".btn")[0];
let next_btn = document.querySelectorAll(".btn")[1];

let i=1;
let j=0;

// console.log(lines);

next_btn.addEventListener("click",()=>{


    if(i<=3)
    {
        prev_btn.classList.add("active_btn");
        indexes[i].classList.add("active");
        lines[j].classList.add("active_line");
        prev_btn.classList.add("active_btn");

        i++;    
        j++;

        if(i==4)
        {
            next_btn.classList.remove("active_btn");
        }
    }
    
});
prev_btn.addEventListener("click",()=>{

    if(i>1)
    {
        i--;
        j--;
        
        indexes[i].classList.remove("active");
        lines[j].classList.remove("active_line");
        next_btn.classList.add("active_btn");

        if(i==1)
        {
            prev_btn.classList.remove("active_btn");
        }

    }
});
