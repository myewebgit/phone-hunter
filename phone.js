const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const serachText = searchField.value;
    // console.log(serachText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${serachText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data =>{
    // console.log(data);
    const searchResult = document.getElementById('search-result');
    data.forEach(phone =>{
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>`;
      searchResult.appendChild(div);
    })
}