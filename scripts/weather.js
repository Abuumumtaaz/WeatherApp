const cityform = document.querySelector('form');

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
    .then(data => console.log(data))
    .catch(error => console.log(error));;

})