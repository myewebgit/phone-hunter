// ******************JavaScript code for phone Search***********

const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const serachText = searchField.value;

    // ******* Clear Search Field*********

    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${serachText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

// ******************JavaScript code for phone Display***********
const displaySearchResult = data =>{
     const searchResult = document.getElementById('search-result');

    // ******* Clear Search Field*********
    searchResult.textContent = '';
    data.forEach(phone =>{
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadPhoneDetail('${phone.slug}')" class="card h-25">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body  rounded-3">
          <h6 class="card-title">Phone Name:${phone.phone_name}</h6>
          <h6 class="card-text">Phone Brand:${phone.brand}</h6>
         </div>
        </div>
      </div>`;
      searchResult.appendChild(div);
    })
}

// ******************JavaScript code for phone Detail***********

const loadPhoneDetail = (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
   }

const displayPhoneDetail = dataPhone =>{
    console.log(dataPhone);
    const phoneDetail = document.getElementById('phone-detail');
        const div = document.createElement('div');
        phoneDetail.innerText = '';
    div.classList.add('card');
    div.innerHTML = `
    <img src="${dataPhone.image}" class="card-img-top w-100" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone Brand:${dataPhone.brand}</h5>
            <h5 class="card-title">Phone Name:${dataPhone.name}</h5>
            <h5 class="card-title">Release Date:${dataPhone.releaseDate}</h5>
            <button id='info-field' onclick="info('${dataPhone.slug}')" 
                type="button" class="btn btn-secondary">Show Details</button>
             `;
    
    phoneDetail.appendChild(div);
}

// ******************JavaScript code for phone more info***********
const info = name => {
    const url = `https://openapi.programming-hero.com/api/phone/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => phoneSpecification(data.data));
}

const phoneSpecification = (dataPhone) =>{
    // console.log(phoneInfo);
    const phoneDiv = document.getElementById('phone-info');
     phoneDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    phoneDiv.innerHTML =`
    <div class="card-body">
    <h3 class="card-title">Phone Specification</h3>
          
              <p> <h5>Main Features:</h5>Storage: ${dataPhone.mainFeatures.storage},<br> Display Size: ${dataPhone.mainFeatures.displaySize},<br> Chip Set: ${dataPhone.mainFeatures.chipSet}</p>
              <p> <h5>Other Specification:</h5> WLAN: ${dataPhone.others.WLAN},<br>Bluetooth:${dataPhone.others.Bluetooth},<br>GPS:${dataPhone.others.GPS}</p>
              <p><h5 >Release date: </h5>${dataPhone.releaseDate}</p>`;
    phoneDiv.appendChild(div);
}


   
   