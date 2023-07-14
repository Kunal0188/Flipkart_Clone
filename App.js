
    // Search
    let input_search = document.getElementById("text-search");
    let form_search = document.getElementById("search_form");
    let recent_SearchElement = document.querySelector(".recent-Search");

    let recentArray = [];
    form_search.addEventListener("submit", (e)=>{
        e.preventDefault();
        recentArray.unshift(input_search.value);
        console.log(recentArray);
    })

    let recent_search = "";
    recentArray.forEach(e =>{
        
        recent_search += `
            <div class="recent-list">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p class="recent-list-text" id="search_items">${e}</p>
            </div>
        `
    })

    recent_SearchElement.innerHTML = recent_search;


//     function onsubmitHandler(event){
//     let recentArray = [];
//     let input_search = document.querySelector(".text-search");
//     let form_search = document.getElementById("search_form");
//     event.preventDefault();
//     alert("Hii");
//     recentArray.unshift(input_search.value);
//     console.log(recentArray);
// }



    // Login 
    









    // items-List

    function mouseoverHandler1(){
        let product1 = document.getElementById("product1");
        product1.style.color = "#2874f0"; 
    }
    function mouseoverHandler2(){
        let product2 = document.getElementById("product2");
        product2.style.color = "#2874f0"; 
    }
    function mouseoverHandler3(){
        let product3 = document.getElementById("product3");
        product3.style.color = "#2874f0"; 
    }
    function mouseoverHandler4(){
        let product4 = document.getElementById("product4");
        product4.style.color = "#2874f0"; 
    }
    function mouseoverHandler5(){
        let product5 = document.getElementById("product5");
        product5.style.color = "#2874f0"; 
    }
    function mouseoverHandler6(){
        let product6 = document.getElementById("product6");
        product6.style.color = "#2874f0"; 
    }
    function mouseoverHandler7(){
        let product7 = document.getElementById("product7");
        product7.style.color = "#2874f0"; 
    }
    function mouseoverHandler8(){
        let product8 = document.getElementById("product8");
        product8.style.color = "#2874f0"; 
    }
    function mouseoverHandler9(){
        let product9 = document.getElementById("product9");
        product9.style.color = "#2874f0"; 
    }
    function mouseoverHandler10(){
        let product10 = document.getElementById("product10");
        product10.style.color = "#2874f0"; 
    }

    
    function mouseoutHandler1(){
        let product1 = document.getElementById("product1");
        product1.style.color = "black"; 
    }
    function mouseoutHandler2(){
        let product2 = document.getElementById("product2");
        product2.style.color = "black"; 
    }
    function mouseoutHandler3(){
        let product3 = document.getElementById("product3");
        product3.style.color = "black"; 
    }
    function mouseoutHandler4(){
        let product4 = document.getElementById("product4");
        product4.style.color = "black"; 
    }
    function mouseoutHandler5(){
        let product5 = document.getElementById("product5");
        product5.style.color = "black"; 
    }
    function mouseoutHandler6(){
        let product6 = document.getElementById("product6");
        product6.style.color = "black"; 
    }
    function mouseoutHandler7(){
        let product7 = document.getElementById("product7");
        product7.style.color = "black"; 
    }
    function mouseoutHandler8(){
        let product8 = document.getElementById("product8");
        product8.style.color = "black"; 
    }
    function mouseoutHandler9(){
        let product9 = document.getElementById("product9");
        product9.style.color = "black"; 
    }
    function mouseoutHandler10(){
        let product10 = document.getElementById("product10");
        product10.style.color = "black"; 
    }