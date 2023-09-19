//Data

//São um tipo de objeto
//OBS: Por ser objeto, sao um tipo de referencia

const present = new Date()
//Construtor é usado para construir o objeto

console.log(typeof present);
console.log(present);
//De fato um objeto, que pode usar metodos para obter dados especificos

console.log('getFullYear: ', present.getFullYear());
console.log('getMonth: ', present.getMonth()); //Zero Base, começa com janeiro = 0
console.log('getDate: ', present.getDate());
console.log('getDay: ', present.getDay()); //Zero Base, começa com Domingo = 0
console.log('getHours: ', present.getHours());
console.log('getSeconds: ', present.getSeconds());//Muda a cada vez q o arquivo é executado


console.log('toDateString: ', present.toDateString());
console.log('toTimeString: ', present.toTimeString());
console.log('toLocaleString: ', present.toLocaleString());

console.log('timestamp: ', present.getTime()); //Numero de milisigundo de 1970 até hj
//Permite que duas datas sejam comparadas

const past = new Date('May 1 2020 7:47:00') //Objeto representando momento no passado atraves de uma string passada

console.log(present.getTime(), past.getTime()); // Comparando os dois timestamp

const difference = present.getTime() - past.getTime()

console.log(difference);

const seconds = Math.round(difference / 1000) //Convetendo a diferença de milisegundos para segundos
console.log({seconds}); // short handle proprety name

const minutes = Math.round(seconds / 60)
console.log({minutes});

const hours = Math.round(minutes / 60)
console.log({hours});

const days = Math.round(hours / 24)
console.log({days});

const years = Math.round(days / 365)
console.log({years});

console.log(`Aula posta há ${years} anos`)


const timestamp = 1675938474990
console.log(new Date(timestamp)) //Pode ser armazenado numa variavel e trabalhado conforme o interesse


//DATA FNS(LIB)
//Biblioteca para facilitar a utilização do uso das datas

console.log(dateFns); //Todos os metodos disponibilizados

console.log(dateFns.format(present, 'DD/MM/YY'));
console.log(dateFns.format(present, 'MMMM'));
console.log(dateFns.isToday(present));

console.log(dateFns.distanceInWords(present, past, {addSuffix: true}));
//Mais em: https://date-fns.org/