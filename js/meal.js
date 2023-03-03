const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    // console.log(meals)
    // step 1: container Element 
    const mealsContainer = document.getElementById('meals-container')

    // clear existed
    mealsContainer.innerHTML = '';

    meals.forEach(meal => {
        // console.log(meal)
        // step 2: create child for each element 
        const mealDiv = document.createElement('div')
        // Add class
        mealDiv.classList.add('col')
        // step 3: set container of the child 
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>

                <button onclick = "loadMealDetail(${meal.idMeal})" type="button" class="btn        
                btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                </button>
            </div>
        </div>
        `

        // step 4: append child
        mealsContainer.appendChild(mealDiv)
    })
}


const searchMeals = () => {
    // console.log('search btn')
    const searchText = document.getElementById('search-field').value
    // go for search
    console.log(searchText)
    loadMeals(searchText)
}

const loadMealDetail = idMeal => {
    // console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))
}

const displayMealsDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal

    document.getElementById('modal-body').innerHTML = `
    <img class = "img-fluid" src="${meal.strMealThumb}">
    <h6>Meal Area: ${meal.strArea}</h6>
    <h6>Category: ${meal.strCategory}</h6>

    `
}


loadMeals('')