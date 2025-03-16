window.addEventListener('load', function(){
    let submitBtn = document.querySelector(".submitRecipeBtn");

    //Gather the input of user and console.log.
    submitBtn.addEventListener('click', function(){

        // Rules / Criteria
        // recipeImg : need a photo to upload
        // recipeName : (1) cannot be blank (2) must be more than 5 letters
        let recipeNameIsBlank = false;
        let recipeNameIsShort = false;
        // introduction : (1) must be more than 10 words (2) cannot be blank 
        let introductionIsShort = false;
        let introductionIsBlank = false;
        // ingredients: (1) must be more than 20 words (2) cannot be blank 
        let ingredientsIsShort = false;
        let ingredientsIsBlank = false;
        // method : (1) must be more than 10 words (2) cannot be blank 
        let methodIsShort = false;
        let methodIsBlank = false;

        let recipeImgInput = document.querySelector("#imgFormFile")
        let recipeImg = recipeImgInput.files[0];
        
        let recipeImgURL = URL.createObjectURL(recipeImg)
        console.log(recipeImgURL);
        if (recipeImgIsBlank = recipeImg.length === 0) {
            console.log("No image uploaded.");
        } else {
            let recipeImg = recipeImgInput.files[0]; // Get the uploaded file
            console.log("Uploaded file:", recipeImg);
        }

        let recipeNameInput = document.querySelector("input[name='recipeName']");
        let recipeNameText = recipeNameInput.value;
        if(recipeNameText == ''){
            recipeNameIsBlank = true;
        }
        if(recipeNameText <= 5){
            recipeNameIsShort = true;
        }

        let introductionInput = document.querySelector("textarea[name='introduction']");
        let introductionText = introductionInput.value;
        if(introductionText == ''){
            introductionIsBlank = true;
        }
        if(introductionText <= 10){
            introductionIsShort = true;
        }

        let ingredientsInput = document.querySelector("textarea[name='ingredients']");
        let ingredientsText = ingredientsInput.value;
        if(ingredientsText == ''){
            ingredientsIsBlank = true;
        }
        if(ingredientsText <= 20){
            ingredientsIsShort = true;
        }

        let methodInput = document.querySelector("textarea[name='method']");
        let methodText = methodInput.value;
        if(methodText == ''){
            methodIsBlank = true;
        }
        if(methodText <= 10){
            methodIsShort = true;
        }

        

        if(recipeImgIsBlank == false && 
            recipeNameIsBlank == false &&
            recipeNameIsShort == false &&
            introductionIsBlank == false &&
            introductionIsShort == false &&
            ingredientsIsBlank == false &&
            ingredientsIsShort == false &&
            methodIsBlank == false &&
            methodIsShort == false) {
            //All information as uploaded based on requirements.
            console.log(recipeImg);
            console.log(recipeNameText);
            console.log(introductionText);
            console.log(ingredientsText);
            console.log(methodText);
            }
    })
    
})