window.addEventListener('load', function(){
    let createReceipeBtn = document.querySelector(".createRecipeBtn");

    createReceipeBtn.addEventListener('click', function(){eceipe
        let recipeNameInput = document.querySelector("input[name='recipeName']");
        let recipeName = recipeNameInput.value;
        console.log(recipeName);

        let introductionInput = document.querySelector("input[name='introduction']");
        let introduction = introductionInput.value;
        console.log(introduction);

        let ingredientsInput = document.querySelector("input[name='ingredients']");
        let ingredients = ingredientsInput.value;
        console.log(ingredients);

        let methodInput = document.querySelector("input[name='method']");
        let method = methodInput.value;
        console.log(method);

    })
    
})