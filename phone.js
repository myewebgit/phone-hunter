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
    searchResult.textContent = '';
    data.forEach(phone =>{
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadPhoneDetail('${phone.slug}')" class="card h-25">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body  rounded-3">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          
          </div>
        </div>
      </div>`;
      searchResult.appendChild(div);
    })
}

const loadPhoneDetail = (id) =>{
    // const phoneId = phone.slug.value;
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
    // console.log(phoneId);
}
const displayPhoneDetail = datap =>{
    console.log(datap);
    const phoneDetail = document.getElementById('phone-detail');
        const div = document.createElement('div');
        phoneDetail.innerText = '';
    div.classList.add('card');
    div.innerHTML = `
    <img src="${datap.image}" class="card-img-top w-100" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datap.brand}</h5>
            <h5 class="card-title">${datap.name}</h5>
            <button id='info-field' onclick="info('${datap.slug}')" 
                type="button" class="btn btn-secondary">Show Details</button>
            
            
            `;
    
    phoneDetail.appendChild(div);
}
const info = name => {
    const url = `https://openapi.programming-hero.com/api/phone/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => phoneSpecification(data.data));
}

const phoneSpecification = (datap) =>{
    // console.log(phoneInfo);
    const phoneDiv = document.getElementById('phone-info');
     phoneDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    phoneDiv.innerHTML =`
    <div class="card-body">
    <h3 class="card-title">Phone Specification</h3>
          
              <p> <h5>Main Features:</h5>Storage: ${datap.mainFeatures.storage},<br> Display Size: ${datap.mainFeatures.displaySize},<br> Chip Set: ${datap.mainFeatures.chipSet}</p>
              <p> <h5>Other Specification:</h5> WLAN: ${datap.others.WLAN},<br>Bluetooth:${datap.others.Bluetooth},<br>GPS:${datap.others.GPS}</p>
              <p><h5 >Release date: </h5>${datap.releaseDate}</p>`;
    phoneDiv.appendChild(div);
}


   
    