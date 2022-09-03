// Load Data News Category 
const loadNewsCategory = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await response.json()
  return data.data.news_category
}

const setNewsCategory = async () => {
  const data = await loadNewsCategory()
  // access data
  const newsMenu = document.getElementById('News-menu')
  for (const categories of data) {

    console.log(categories)
      
    const li = document.createElement('li');
    li.innerHTML = `
         <li onclick='' class=" list-none cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-blue-400 ">${categories.category_name}</li>
        
        `
    newsMenu.appendChild(li)

  

  }
  

  const loadData = (category_id) => {
    // Fetch..pass an url 
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
      .then(response => response.json())
      .then(data => displayNews(data.data))
  }
  const displayNews = news => {

    const newsContainer = document.getElementById('news-container');
    news.forEach(newsport => {
      // console.log(newsport)
      const newsDiv = document.createElement('div')
      newsDiv.innerHTML = `
             <div class="card lg:card-side bg-base-100 shadow-xl ">
             <figure><img class=" w-auto" src="${newsport.thumbnail_url}" alt="Album"></figure>
             <div class="card-body">
               <h2 class="card-title">${newsport.title}</h2>
               <p class=''>${newsport.details.slice(0, 200)}</p>
             
                 <div class = "flex align-center mt-5">
                 <img class ="avater w-20 rounded-full" src="${newsport.author.img}">
                 <div>
                 <h1 class="font-bold text-black-600 m-5 ">${newsport.author.name} </h1>
                 <span class='text-black-200 m-5 '>${newsport.author.published_date}</span>                  
                 </div>

                 <div class='flex'>
                 <span class = 'font-bold text-black-600 mx-15'>${newsport.total_view}</span>
                 <span></span>
                </div>
                 </div>
                  
                
                  

                </div>
                 
               </div>
             </div>
             </div>
           </div>
             `
      newsContainer.appendChild(newsDiv)
    });
  }

  loadData('01')
}
setNewsCategory()