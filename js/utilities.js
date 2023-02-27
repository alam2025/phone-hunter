// phones load 

const displayPhone = (phones, dataLimit) => {
      const phoneContainer = document.getElementById('phone-conatiner');
      phoneContainer.innerHTML = '';
      //if not found phone
      const noPhone = document.getElementById('no-phone-found');
      if (phones.length === 1) {
            noPhone.classList.remove('d-none');
      }
      else {
            noPhone.classList.add('d-none');
      }
      const showAll = document.getElementById('show-all');
      if (dataLimit && phones.length > 9) {
            phones = phones.slice(0, 9)
            showAll.classList.remove('d-none');
      }
      else {
            showAll.classList.add('d-none');
      }


      phones.forEach(phone => {
            // console.log(phone);
            const phoneDiv = document.createElement('div');
            phoneDiv.classList.add('col');
            phoneDiv.innerHTML = `
            <div class="card h-100">
                  <img src="${phone.image}" class="card-img-top p-4" alt="...">
                  <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a
                              natural lead-in to additional content. This content is a little bit
                              longer.</p>
                        
                  </div>
                  <button onclick="loadDetalisPhone('${phone.slug}')" type="button" class="btn btn-primary w-50 mx-auto mb-3" data-bs-toggle="modal" data-bs-target="#phoneDetails">
                        Details
                  </button>
            </div>

            
            `

            phoneContainer.appendChild(phoneDiv);

      });
      // const toggler= document.getElementById('toggler');
      togglerLoader(false);
}

//toggler
const togglerLoader = (isLoading) => {
      const toggler = document.getElementById('toggler');
      if (isLoading) {
            toggler.classList.remove('d-none')
      }
      else {
            toggler.classList.add('d-none');
      }
}

//  data linit use 
const proccessSearch = dataLimit => {
      togglerLoader(true);
      const fieldText = document.getElementById('search-field').value;
      loadPhones(fieldText, dataLimit);
}

const loadDetalisPhone = async (id) => {
      const url = `https://openapi.programming-hero.com/api/phone/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      loadInfoPhone((data.data));
}
const loadInfoPhone = data => {
 document.getElementById('phoneDetailsLabel').innerText=data? data.name : 'No data';
 const phoneBody= document.getElementById('phone-body');
 phoneBody.innerHTML='';
 const div = document.createElement('div');
 const features= data.mainFeatures;
div.innerHTML=`
 <p> ${data.releaseDate} </p>

 <h4>Main Features </h4>
 <P>Storage : ${features ? features.storage : 'No info show'}</p>
 <P>Memory : ${features ? features.memory : 'No info show'}</p>
 <P>Display Size : ${features ? features.displaySize : 'No info show'}</p>
 `
 phoneBody.appendChild(div);

}