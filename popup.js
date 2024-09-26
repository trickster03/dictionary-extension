


document.querySelector("form").addEventListener("submit",async(event)=>{
  event.preventDefault();
 const app_id = "54104854"
const language = "en-gb"
const word_id = document.querySelector("#word").value;
console.log(word_id);



// const options = {
//   mode: 'no-cors',
// method: 'GET',
// headers: {
//   'app_id':"54104854",
//   'app_key':"b7283288187f980302cf40a5efd45ee8",
// }
// };


fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word_id}`)
.then(response => response.json())
//.then(response => console.log(response))

.then(response => (alert(JSON.stringify(response[0].meanings[0].definitions[0].definition))))

.catch(err => console.error(err));




// getDefinition(word_id)
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error(error);
// });

// async function getDefinition(word_id) {
//     const apiUrl = `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word_id}`;
//     const apiKey = "b7283288187f980302cf40a5efd45ee8";
  
//     const response = await fetch(apiUrl, {
//         mode: "no-cors",
//       headers: {
//         "Accept": "application/json",
//         "app_id": app_id,
//         "app_key": apiKey
//       }
//     });

//     const data = await response.json();

//     return data;
//   }



  
});

