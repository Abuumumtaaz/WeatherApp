const cityform = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');

const updateUI = (data) => {
    
    const cityDets = data.cityDets;

    var weather = cityDets['weather'][0]['description'];
console.log(data);
    details.innerHTML = `
    <div class="text-muted text-center text-uppercase details">
    <h5 class="my-3">${cityDets.name}</h5>
    <div class="my-3">${weather}</div>
    <div class="display-4 my-4">
        <span>${cityDets.main.temp}</span>
        <span>&deg;C</span>
    </div>`;
}

updateCity = async (city) => {

   const cityDets = await getCity(city);

   return { cityDets };

};


cityform.addEventListener('submit', e => {
    // prevent defualt
    e.preventDefault();

    //get city value
    const City = cityform.city.value.trim();
    cityform.reset();

    //update city
    updateCity(City)
    .then(data =>  updateUI(data))
    .catch(error => alert('YOUR SPELLING IS WRONG TRY AGAIN', error));

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none'); };

});
/*
// update day and night icon
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
iconSrc.setAttribute('src', 'iconSrc');
*/
/*
// update day and night image
this is not good
let timeSrc = null;
if(weather.IsDayTime){
   timeSrc = 'img/night.svg'
}else {
    timeSrc = 'img/day.svg'
};
time.setAttribute('src', 'timeSrc');

//this known is ternry oprator and is easy 
timeSrc = weather.IsDayTime ? 'img/night.svg' : 'img/day.svg';
time.setAttribute('src', 'timeSrc');

*/