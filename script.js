window.addEventListener('load', function(){
    let submitBtn = document.querySelector(".submitRecipeBtn");

    //Gather the input of user and console.log.
    submitBtn.addEventListener('click', function(){
        let recipeImgInput = document.querySelector("#imgFormFile")
        let recipeImg = recipeImgInput.files[0];
        console.log(recipeImg);
        let recipeImgURL = URL.createObjectURL(recipeImg)
        console.log(recipeImgURL);

        // Rules / Criteria
        


        let recipeNameInput = document.querySelector("input[name='recipeName']");
        let recipeName = recipeNameInput.value;
        console.log(recipeName);

        let introductionInput = document.querySelector("textarea[name='introduction']");
        let introduction = introductionInput.value;
        console.log(introduction);

        let ingredientsInput = document.querySelector("textarea[name='ingredients']");
        let ingredients = ingredientsInput.value;
        console.log(ingredients);

        let methodInput = document.querySelector("textarea[name='method']");
        let method = methodInput.value;
        console.log(method);

    })
    
})