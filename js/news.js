const loadData =  async() =>{
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json()
    console.log(data)
}

loadData()