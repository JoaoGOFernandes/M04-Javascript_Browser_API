const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


//Usando uma API navigation geolocation, nativa javascript, podemos usar o metodo que retorna a localização
//Recebe dois parametos, 1 para saber se conseguiu pegar a posição, 2 uma caso nao seja possivel pegar
if(navigator.geolocation){                          //Verifica se tem permissão de pegar a possição 
    navigator.geolocation.getCurrentPosition(
        function(position){                         //Parametro1 - Pede permissão e imprime a posição pega
            console.log(position);

            const {latitude} = position.coords      //Descontruindo o objeto para pegar só a latitude
            const {longitude} = position.coords     //Descontruindo, pega  a longitude

            console.log(latitude, longitude);
            // console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude]


            const map = L.map('map').setView(coords, 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {                                        //Imagem estilizada do mapa que sera mostrado
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            }).addTo(map);

            L.marker(coords)
                .addTo(map)
                .bindPopup('Inicio')
                .openPopup();

            
            map.on('click', function(mapEvent) {                         //Metodo interno da API, tipo um eventlistener 
                console.log(mapEvent);                                   //mapEvent é o argumento re

                const {lat, lng} = mapEvent.latlng                       //Dado o click a propriedade do objeto recebido sera armazenada nessa variavel

                //Desafio
                //1.Adicionar o marcador na posição clicada
                //2.Adicionar propriedades do bindPopup
                //3.maxWidth: 250
                //4.minWidth: 100
                //5.classe: running-popup
                //6.Adicionar um texto no popup utilizando uma propriedade adequada

                L.marker(lat, lng)
                    .addTo(map)
                    .bindPopup(L.popup({
                        maxWidth: 250,
                        minWidth: 100,
                        // autoClose: false,
                        // closeOnCLick
                    }))
                    .setPopupContent('Atividade física')
                    .openPopup();
            })
        },
        function(){                               //Parametro2 - Caso não seja pego a localização essa função é executada
            alert("Não foi possivel obter sua localização")
    })
}

