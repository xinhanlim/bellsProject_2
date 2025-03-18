    
    let JSONBIN_ACCESS_KEY = "$2a$10$dvPY3zfnrWI885nGfizRDeMgUCOjYIj7Ly683h2DD0HATVZjJiZt."


window.addEventListener('load', function(){

    const JSONBIN_ROOT_URL = "https://api.jsonbin.io/v3";
    const BIN_ID = "67d9218e8561e97a50ee64b9";

    function GET_SPECIFIC_BIN_URL(binId){
        return JSONBIN_ROOT_URL + "/b/" + binId;
    }

       async function importFromJSONBIN() {
            let dataFromJSONBIN = await fetch(GET_SPECIFIC_BIN_URL(BIN_ID));
            dataFromJSONBIN = await dataFromJSONBIN.json();
            recipe = dataFromJSONBIN.record.recipe;
            console.log(recipe);
            displayRecipe();

        }

        async function exportToJSONBIN() {
            let dataFromJSONBIN = await fetch(GET_SPECIFIC_BIN_URL(BIN_ID), {
                method: '',
                headers: {},
                body:{}
            })
        }

        importFromJSONBIN();




    let recipe = [];
    let globalId =0;

    function displayRecipe(){
        document.getElementById("recipeArea").innerHTML = "";
        for (let i = 0; i < recipe.length; i++){
            let currentRecipeInfo = recipe[i];
            let newRecipe = `<div class="card" style="width: 18rem;">
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
                <button type="button" class="btn btn-primary editRecipeButton" id="editRecipeButton-${currentRecipeInfo.id}">
                    Edit
                </button>
                <button type="button" class="btn btn-danger deleteRecipeButton" id="deleteRecipeButton-${currentRecipeInfo.id}"> 
                    Delete
                </button>

                </div>
              </div>`;

            let recipeList = document.getElementById("recipeArea")
            recipeList.innerHTML += newRecipe;

            let deleteRecipeButtons = document.getElementsByClassName("deleteRecipeButton");
            console.log(deleteRecipeButtons)
            for(let i=0; i < deleteRecipeButtons.length; i++){
                deleteRecipeButtons[i].addEventListener("click", function(){

                    let selectedId = this.id.split('-')[1]
                    deleteRecipe(selectedId)
                    displayRecipe();
                })
            }

            let editRecipeButtons = document.getElementsByClassName('editRecipeButton');
            for (let i = 0; i < editRecipeButtons.length; i++) {
                editRecipeButtons[i].addEventListener("click", function (event) {
                    if (event.target.classList.contains("editRecipeButton")) {
                        let selectedId = event.target.id.split('-')[1];
                        editRecipeForm(selectedId);
                    }
                })
            }
        }
    }

    function createRecipe(recipeName, introduction, ingredients, method) {
        let newRecipe = {
            id: globalId,
            recipeName,
            introduction,
            ingredients,
            method
        }
        globalId += 1
        return newRecipe;
    }

    function editRecipeForm(inputId){
        let idx = recipe.findIndex((recipe) => recipe.id == parseInt(inputId))
        if(idx == -1) {
            return undefined
        } 
            let selectedRecipe = recipe[idx]
            document.querySelector("input[name='recipeId']").value = selectedRecipe.id
            document.querySelector("input[name='recipeName']").value = selectedRecipe.recipeName;
            document.querySelector("textarea[name='introduction']").value = selectedRecipe.introduction;
            document.querySelector("textarea[name='ingredients']").value = selectedRecipe.ingredients;
            document.querySelector("textarea[name='method']").value = selectedRecipe.method;

            let modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
            modal.show();
        }

    function updateRecipe(inputId, inputRecipeName, inputIntroduction, inputIngredients, inputMethod) {
        let idx = recipe.findIndex(recipe => recipe.id == inputId)

        if(idx == -1){
            return null;
        } else {
            recipe[idx].recipeName = inputRecipeName;
            recipe[idx].introduction = inputIntroduction;
            recipe[idx].ingredients = inputIngredients;
            recipe[idx].method = inputMethod;
        }
        displayRecipe();
    }
    function deleteRecipe(inputId) {
        let idx = recipe.findIndex(recipe => recipe.id == inputId) 
        if(idx == -1){
            return null;
        } else {
            recipe.splice(idx,1)
        }
        displayRecipe();
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

        let recipeIdInput = document.querySelector("input[name='recipeId']");
        let recipeId = recipeIdInput.value;

        if(recipeId !== ""){
            recipeId = parseInt(recipeId);
        }


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
        // let recipeImgIsBlank = recipeImgInput.files.length === 0;
        // let imgUploadBlank = document.querySelector(".errorMsgUpload")
        // if(recipeImgIsBlank == true){
        //     imgUploadBlank.style.display = "inline";
        // } else {
        //     imgUploadBlank.style.display = "none";
        // }

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

        
        if( 
            recipeNameIsBlank == false &&
            recipeNameIsShort == false &&
            introductionIsBlank == false &&
            introductionIsShort == false &&
            ingredientsIsBlank == false &&
            ingredientsIsShort == false &&
            methodIsBlank == false &&
            methodIsShort == false) {
            //All information as uploaded based on requirements.

            if(recipeId !== ""){
                updateRecipe(
                    recipeId,
                    recipeNameText,
                    introductionText,
                    ingredientsText,
                    methodText
                )

            } else {
                let newRecipe = createRecipe(
                    recipeNameText,
                    introductionText,
                    ingredientsText,
                    methodText
                );
                recipe.push(newRecipe)
            }
            displayRecipe();

            recipeNameInput.value = "";
            introductionInput.value = "";
            ingredientsInput.value = "";
            methodInput.value = "";

            let modal = document.querySelector(".recipeModal");
            let preventModal = bootstrap.Modal.getInstance(modal);
            preventModal.hide();
        }
    })

})