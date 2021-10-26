const form = document.querySelector('#recipe-form')
const order = document.querySelector('#recipe-order')

listRecipes = []

/* function */
const inputForm = (e) => {
    e.preventDefault();

    const name = form.name.value;
    const method = form.method.value;
    const roast = form.roast.value;
    const size = form.size.value;
    const ratio = form.size.value;
    const note = form.size.value;

    const newRecipe = {
        name,
        method,
        roast,
        size,
        ratio,
        note,
        id : Date.now()
    }
    // console.log(newRecipe);

    listRecipes.push(newRecipe)
    e.target.reset();
    form.name.focus();
    order.dispatchEvent(new CustomEvent('refreshRecipes'));
}

const outputOrder = (e) =>{
    const temp = listRecipes.map(recipe => `
    <div class="card col-md-4">
        <div class="card mb-4 border-primary ">
            <div class=" card-header mb-4  ">
                <h5 class="card-title p-3 m-0 bg-primary text-white">${recipe.name}</h5>
            </div>
            <div class="card-body">
                <ul class="text-start">
                    <li>${recipe.method}</li>
                    <li>${recipe.roast}</li>
                    <li>${recipe.size}</li>
                    <li>${recipe.ratio}</li>
                    <li>${recipe.note}</li>
                </ul>
            <a href="" class="btn btn-outline-danger p-2">Delete Recipe</a>
            </div>
        </div>
    </div>
    `).join('');
    order.innerHTML = temp;

}


/* event */
form.addEventListener('submit',inputForm)
order.addEventListener('refreshRecipes',outputOrder)

