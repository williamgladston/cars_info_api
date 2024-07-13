let url = "https://api.api-ninjas.com/v1/cars?limit=2&make=";
let searchBtn = document.getElementById("search-btn");
let userInp = document.getElementById("user-inp").value;
const options = {
  method: "GET",
  headers: { "X-Api-Key": "TKUsiAb3be3l1x6YqG/71A==EnM09PHKaH2idol0" },
};
searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3>Input Field Cannot be Empty</h3>`;
  } else {
    fetch(url + userInp, options)
      .then((Response) => Response.json())
      .then((data) => {
        let carsInfo = data[0];
        console.log(carsInfo);
        console.log(carsInfo.city_mpg);
        console.log(carsInfo.class);
        console.log(carsInfo.combination_mpg);
        console.log(carsInfo.cylinders);
        console.log(carsInfo.displacement);
        console.log(carsInfo.drive);
        console.log(carsInfo.fuel_type);
        console.log(carsInfo.highway_mpg);
        console.log(carsInfo.make);
        console.log(carsInfo.model);
        console.log(carsInfo.transmission);
        console.log(carsInfo.year);

        result.innerHTML = `
	  <div id="carsInfo-con">
	  <ul>
	  <li>City mpg :${carsInfo.city_mpg}</li>
	  <li>class :${carsInfo.class}</li>
	  <li>combination_mpg :${carsInfo.combination_mpg}</li>
	  <li>cylinders :${carsInfo.cylinders}</li>
	  <li>displacement :${carsInfo.displacement}</li>
	  <li>drive :${carsInfo.drive}</li>
	  <li>fuel_type :${carsInfo.fuel_type}</li>
	  <li>highway_mpg :${carsInfo.highway_mpg}</li>
	  <li>make :${carsInfo.make}</li>
	  <li>model :${carsInfo.model}</li>
	  <li>transmission:${carsInfo.transmission}</li>
	  <li>year:${carsInfo.year}</li>
	  </ul>
	  </div>
	  `;
      })

      .catch((err) => console.error(err));
  }
});
