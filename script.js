window.addEventListener('load', function(){


    let recipe = [];
    let globalId =0;

    function displayRecipe(){
        document.getElementById("recipeArea").innerHTML = "";
        for (let i = 0; i < recipe.length; i++){
            let currentRecipeInfo = recipe[i];
            let newRecipe = `<div class="card" style="width: 18rem;">
                <img src="${currentRecipeInfo.recipeImg}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title poppins-semibold">${currentRecipeInfo.recipeName}</h5>
                <div class="infoSpacing poppins-regular">
                    <p class="card-text poppins-semibold">Introduction: </p>
                    <p class="card-text poppins-regular">${currentRecipeInfo.introduction} </p>
                </div>
                <div class="infoSpacing poppins-regular">
                    <p class="card-text poppins-semibold">Ingredients: </p>
                    <p class="card-text">${currentRecipeInfo.ingredients} </p>
                </div>
                <div class="infoSpacing  poppins-regular">
                    <p class="card-text poppins-semibold">Methods: </p>
                    <p class="card-text">${currentRecipeInfo.method}</p>
                </div>              
                </div>
              </div>`;

            let recipeList = document.getElementById("recipeArea")
            recipeList.innerHTML += newRecipe;
        }
    }
    
    function createRecipe(recipeImg, recipeName, introduction, ingredients, method) {
        let newRecipe = {
            id: globalId,
            recipeImg,
            recipeName,
            introduction,
            ingredients,
            method
        }
        globalId += 1
        return newRecipe;
    }

    function updateRecipe(inputId, inputRecipeImg, inputRecipeName, inputIntroduction, inputIngredients, inputMethod) {
        let idx = recipe.findIndex(recipe => recipe.id == inputId)

        if(idx == -1){
            return null;
        } else {
            recipe[idx].inputRecipeImg = inputRecipeImg;
            recipe[idx].inputRecipeName = inputRecipeName;
            recipe[idx].inputIntroduction = inputIntroduction;
            recipe[idx].inputIngredients = inputIngredients;
            recipe[idx].inputMethod = inputMethod;
        }
    }
    function deleteRecipe(inputId) {
        let idx = recipe.findIndex(recipe => recipe.id == inputId) 
        if(idx == -1){
            return null;
        } else {
            let tmp = recipe[recipe.length -1]
            recipe[idx] = tmp;
            recipe.pop()
        }
    }


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
        let methodIsBlank = false;

        //Clear the error List

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
        let introductionText = introductionInput.value;
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
        if(ingredientsText == ""){
            ingredientsIsBlank = true;
        }
        console.log(ingredientsIsBlank);

        let ingredientsIsShort = ingredientsText.length;
        if(ingredientsIsShort <= 20){
            ingredientsIsShort = true;
        } else {
            ingredientsIsShort = false;
        }

        let methodInput = document.querySelector("textarea[name='method']");
        let methodText = methodInput.value;
        if(methodText == ""){
            methodIsBlank = true;
        }

        let methodIsShort = methodText.length;
        if(methodIsShort <= 20){
            methodIsShort = true;
        } else {
            methodIsShort = false;
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

        //Error for Ingredients
        let errorIngreIsBlank = document.querySelector(".errorIngreBlank")
        let errorIngreIsShort = document.querySelector(".errorIngreShort")

        if (ingredientsIsBlank == true) {
            errorIngreIsBlank.style.display = "inline";
            errorIngreIsShort.style.display = "none"; 
        } else {
            errorIngreIsBlank.style.display = "none"; 
        }   
        if (ingredientsIsShort && ingredientsIsBlank == false) {
            errorIngreIsShort.style.display = "inline";
        } else {
            errorIngreIsShort.style.display = "none";
        }

        //Error For Method
        let errorStepsIsBlank = document.querySelector(".errorStepsBlank")
        let errorStepsIsShort = document.querySelector(".errorStepsShort")

        if (methodIsBlank == true) {
            errorStepsIsBlank.style.display = "inline";
            errorStepsIsShort.style.display = "none"; 
        } else {
            errorStepsIsBlank.style.display = "none"; 
        }   
        if (methodIsShort && methodIsBlank == false) {
            errorStepsIsShort.style.display = "inline";
        } else {
            errorStepsIsShort.style.display = "none";
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
            let newRecipe = createRecipe(
                recipeImgInput,
                recipeNameText,
                introductionText,
                ingredientsText,
                methodText
            );

            recipe.push(newRecipe)
            console.log(recipe)
            displayRecipe();

            let modal = document.querySelector(".recipeModal");
            let preventModal = bootstrap.Modal.getInstance(modal);
            preventModal.hide();

        }
    })

})