const API = "https://www.digi-api.com/api/v1/digimon";
const contentView = null || document.getElementById('content');


async function fetchData(urlApi) {
   const response = await  fetch(urlApi);
   const data = await response.json();
   return data;
}


(async () => {
    try {
        console.log("test");
        const digimon = await fetchData(`${API}`);
        let view = `${digimon.content.map( digi => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${digi.name}
          </h3>
          <span>
          <img class="mt-3 flex justify-between" src="https://digimon-api.com/images/digimon/w/Garummon.png"/></span>
        </div>
      </div>`).slice(0,100).join('')}
      `;

      contentView.innerHTML = view;
    } catch (err) {
        throw new Error('Error');
    }
})();