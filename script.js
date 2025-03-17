window.addEventListener('load', function(){
    let submitBtn = document.querySelector(".submitRecipeBtn");

    //Gather the input of user and console.log.
    submitBtn.addEventListener('click', function(){

        // Rules / Criteria
        // recipeImg : need a photo to upload
        // recipeName : (1) cannot be blank (2) must be more than 5 letters
        let recipeNameIsBlank = false;
        // introduction : (1) must be more than 10 words (2) cannot be blank 
        let introductionIsBlank = false;
        // ingredients: (1) must be more than 20 words (2) cannot be blank 
        let ingredientsIsBlank = false;
        // method : (1) must be more than 10 words (2) cannot be blank 
        let methodIsShort = false;
        let methodIsBlank = false;

        let recipeImgInput = document.querySelector("#imgFormFile")
        if(recipeImgInput.files.length > 0){
            let recipeImg = recipeImgInput.files[0];
            let recipeImgURL = URL.createObjectURL(recipeImg);
        }

        // if (recipeImgIsBlank == recipeImg.length === 0) {
        //     console.log("No image uploaded.");
        // } else {
        //     let recipeImg = recipeImgInput.files[0]; // Get the uploaded file
        //     console.log("Uploaded file:", recipeImg);
        // }

        let recipeNameInput = document.querySelector("input[name='recipeName']");
        let recipeNameText = recipeNameInput.value;
        if(recipeNameText == ''){
            recipeNameIsBlank = true;
        }
        let recipeNameIsShort = recipeNameText.length;
        if(recipeNameIsShort <= 5 ){
            recipeNameIsShort = true;
        } else{
            recipeNameIsShort = false;
        }

        let introductionInput = document.querySelector("textarea[name='introduction']");
        let introductionText = introductionInput.value
        console.log(introductionText);
        if(introductionText == ""){
            introductionIsBlank = true;
        }
        console.log(introductionIsBlank)
        let introductionIsShort = introductionText.length;
        if(introductionIsShort <= 10){
            introductionIsShort = true;
        } else {
            introductionIsShort = false;
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

        //Error for Recipe Img
        let recipeImgIsBlank = recipeImgInput.files.length === 0;
        let imgUploadBlank = document.querySelector(".errorMsgUpload")
        if(recipeImgIsBlank == true){
            imgUploadBlank.style.display = "inline";
        } else {
            imgUploadBlank.style.display = "none";
        }

        //Error for Recipe Name
        let errorRecipeIsBlank = document.querySelector(".errorRecipeBlank")
        let errorRecipeIsShort = document.querySelector(".errorRecipeShort")

        if (recipeNameIsBlank == true) {
            errorRecipeIsBlank.style.display = "inline";
            errorRecipeIsShort.style.display = "none"; 
        } else {
            errorRecipeIsBlank.style.display = "none"; 
        }   
        if (recipeNameIsShort && recipeNameIsBlank == false) {
            errorRecipeIsShort.style.display = "inline";
        } else {
            errorRecipeIsShort.style.display = "none";
        }

        // Error for Introduction
        let errorIntroIsBlank = document.querySelector(".errorIntroBlank")
        let errorIntroIsShort = document.querySelector(".errorIntroShort")

        if (introductionIsBlank == true) {
            errorIntroIsBlank.style.display = "inline";
            errorIntroIsShort.style.display = "none"; 
        } else {
            errorIntroIsBlank.style.display = "none"; 
        }   
        if (introductionIsShort && introductionIsBlank == false) {
            errorIntroIsShort.style.display = "inline";
        } else {
            errorIntroIsShort.style.display = "none";
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