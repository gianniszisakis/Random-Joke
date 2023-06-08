const jokes = document.querySelector('#newJokes');
const button =document.querySelector('button');

//async function to retrieve the jokes from API and create li element
const addNewJoke = async () => {
    const newJokeText = await dadJokes();
    const newLi = document.createElement('LI'); //create the element
    newLi.append(newJokeText); //add the joke text to the li
    jokes.append(newLi); //add the new li to the ul list
}

const dadJokes = async () => {
    try{
        const headers = { headers: { Accept: 'application/json' } }; //define the header we want to receive
        const result = await axios.get('https://icanhazdadjoke.com', headers);
        return result.data.joke; //return the data we need from the json of the API
    } catch(e) {
        return 'No More Jokes!SORRY!';
    }
}

button.addEventListener('click', addNewJoke);
