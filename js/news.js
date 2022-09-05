const loadNewsCategories = () => {
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(response => response.json())
    .then(data => displayNews(data.data.news_category))

}

const displayNews = categories => {
  // console.log(categories)
  const categoryContainer = document.getElementById('news-menu')
  categories.forEach(category => {

    // console.log(category.category_id)
    const a = document.createElement('a');
    a.innerHTML = `
        
           <a onclick = "loadData('${category.category_id}')" class="p-2 text-decoration-none link-secondary" href="#">${category.category_name}</a>
        
          `
    categoryContainer.appendChild(a)
  });

}

loadNewsCategories()

// news load data set menu button 

const loadData = id => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(url)
    .then(response => response.json())
    .then(data => displayNewsCategory(data.data))


}
//  length category

const foundnews= document.getElementById('no-found-message');
if(news.length === 0){
    foundnews.classList.remove('d-none');
}
else{
    noPhone.classList.add('d-none');
}

const displayNewsCategory = news => {
  // console.log(news)

  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = ""
  news.forEach(newsport => {
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('col');
    newsDiv.innerHTML = `
      <div class="card ">
          <img src="${newsport.thumbnail_url}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${newsport.title}</h5>
              <p class="card-text">${newsport.details.slice(0, 200)}</p>
              
              <button onclick="loadNewsDetails('${newsport._id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show Details</button>
              
              <div class = "d-flex align-center mt-5 ">
               <img style="width: 20% ; " class ="fluid w-2 rounded-circle" src="${newsport.author.img ? newsport.author.img : 'Author Image not Found'}">
               <h4 class=" text-dark mx-2  mt-2">${newsport.author.name ? newsport.author.name : 'Author Name is No found'} </h4>
               <div>
               <div class='d-flex'>
               <span style="margin-top: 42px;" class = ' text-dark  '>Seen Post :${newsport.total_view}</span>
               
              </div>
               </div>
                
          </div>
      </div>
`


    newsContainer.appendChild(newsDiv)

  });



}

//modal part

const loadNewsDetails = async id => {
  // console.log(id)
  const url = ` https://openapi.programming-hero.com/api/news/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayNewsDetails(data.data[0]);


}

const displayNewsDetails = news => {
 
  console.log(news)
  const modelTitle = document.getElementById('newsDetailModalLabel')
  modelTitle.innerText = news.title 
  const newsmodelset = document.getElementById('newsdetails')
  newsmodelset.innerHTML = `
   <p>${news.details}</p>
   <p>${news.author.published_date}</p>
   <span>${news.total_view}</span>
  
  `

  
}

