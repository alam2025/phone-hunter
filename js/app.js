// phones api call
const loadPhones= async(phoneName,dataLimit)=>{
const url= `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
const res= await fetch(url);
const data =await res.json();
displayPhone(data.data,dataLimit);
}

//btn search

document.getElementById('btn-search').addEventListener('click',function(){
      proccessSearch(9);
      
})

// search by keyboard 
document.getElementById('search-field').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
            proccessSearch(9);
      }
  });





  //show all phone
document.getElementById('show-all').addEventListener('click',function(){
      proccessSearch();
})

 loadPhones('apple',9);


