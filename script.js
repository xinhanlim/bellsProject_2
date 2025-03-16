window.addEventListener('load', function(){
    let createReceipeBtn = document.querySelector(".createReceipeBtn");

    createReceipeBtn.addEventListener('click', function(){
        let receipeNameInput = document.querySelector("input[name='receipeName']");
        let receipeName = receipeNameInput.value;
        console.log(receipeName);

        let introductionInput = document.querySelector("input[name'introduction']");
        let introduction = introductionInput.value;
        console.log(introduction);

        

    })
    
})