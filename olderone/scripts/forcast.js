
//grt city information
const getCity = async (city) => {


    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb69998e9d9edc3c5587b8d58feb89b4`);
    const data = await response.json();

    return data;
};

/*getCity('london')
 .then(data => console.log(data))
 .catch(error => console.log(error));*/

 //get weather iformation