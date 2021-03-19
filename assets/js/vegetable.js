// Data from organic and vegetables
const vegetables = [
  {
    title: 'Aguacate Hass',
    weight: '1.25 kg / 2.75 lb',
    price: '$ 3,495.00',
    image: 'organic/avocado.png',
    type: 'organic',
  },
  {
    title: 'Tomate',
    weight: '2 kg / 4.4 lb',
    price: '$ 2,395.00',
    image: 'organic/tomato.png',
    type: 'organic',
  },
  {
    title: 'Esspinaca Americana Organica',
    weight: '250 g / 8.8 oz',
    price: '$ 1,300.00',
    image: 'organic/salad.png',
    type: 'organic',
  },
  {
    title: 'Hongos Portobello',
    weight: '500g/1.1 lb',
    price: '$ 4,395.00',
    image: 'organic/mushroom.png',
    type: 'organic',
  },
  {
    title: 'Chile Dulce',
    weight: '5 unidades',
    price: '$ 1,855.00',
    image: '/vegetable/chile.png',
    type: 'vegetable',
  },
  {
    title: 'Kale Organico',
    weight: '250 g / 8.8 oz',
    price: '$ 1,595.00',
    image: '/vegetable/kale.png',
    type: 'vegetable',
  },
  {
    title: 'Mandarina Clementina',
    weight: '2 kg / 4.4 lb',
    price: '$ 3,895.00',
    image: '/vegetable/orange.png',
    type: 'vegetable',
  },
  {
    title: 'Organic Beet',
    weight: '600g / 1.32 lb',
    price: '$ 1,695.00',
    image: '/vegetable/beet.png',
    type: 'vegetable',
  },
];

// Data Receipes
recipes = [
  {
    image: '/recipes/quinoa.png',
    title: 'Quinoa Salad with Crispy Tofu Cubes and Lime Vinaigrette',
    prep: 'Prep: 10 min. Cook: 15 min.',
    make: 'Makes: 10 servings',
  },
  {
    image: '/recipes/zucchini.png',
    title: 'Summer Zucchini Pasta',
    prep: 'Prep/Total time: 25 min.',
    make: 'Makes: 10 servings',
  },
  {
    image: '/recipes/pesto.png',
    title: 'Pesto Corn Salad with Shrimp',
    prep: 'Prep/Total Time: 30 min',
    make: 'Makes: 4 servings',
  },
];

// Render all receipes
for (let i = 0; i < recipes.length; i++) {
  $('#recipes').append(`
  <div class='col-md-4 col-sm-12'>
      <div class='recipes-card'>
        <img class='img-fluid' src='/assets/images/${recipes[i].image}'/>
        <div class='title-recipe'>
        ${recipes[i].title}
        </div>
        <div class='prep'>
          <p>${recipes[i].prep}<span>${recipes[i].make}</span><span class='link'>View Receipe and shopping list</span></p>
        </div>
      </div>
    </div>
  `);
}

// Render Organic and vegetables
for (let i = 0; i < vegetables.length; i++) {
  if (vegetables[i].type === 'organic') {
    $('#organic').append(`
  <div class='col-md-3 col-sm-12'>
  <div class='wrapper-fruit-vegetable'>
    <div class='img-fruit-vegetable'>
      <img class='img-fluid' src="./assets/images/${vegetables[i].image}"/>
    </div>
    <div class="description-fruit">
      <p>${vegetables[i].title}<span>${vegetables[i].weight}</span></p>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star no-checked">
      </i><span class='raiting'>240</span>
      <p class="price">${vegetables[i].price}</p> 
    </div>
    </div>
  </div>
`);
  } else {
    $('#vegetables').append(`
  <div class='col-md-3 col-sm-12'>
  <div class='wrapper-fruit-vegetable'>
    <div class='img-fruit-vegetable'>
      <img  class='img-fluid' src="./assets/images/${vegetables[i].image}"/>
    </div>
    <div class="description-fruit">
      <p>${vegetables[i].title}<span>${vegetables[i].weight}</span></p>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star no-checked">
      </i><span class='raiting'>240</span>
      <p class="price">${vegetables[i].price}</p> 
    </div>
    </div>
  </div>
`);
  }
}
