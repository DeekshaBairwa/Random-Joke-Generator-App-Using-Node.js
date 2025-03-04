// Random Joke Generator App

import https from "https";
import chalk from "chalk";

const getJoke = () =>{
    const url ='https://official-joke-api.appspot.com/random_joke'
    https.get(url, (response)=>{
        let data = "";
        response.on("data",(chunks)=>{
            data += chunks;
        });
        response.on("end",()=>{
            const joke = JSON.parse(data);
            console.log(`\nHere is the random ${joke.type} joke :`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.blue(`${joke.punchline}`));
        });
        response.on("error",(err)=>{
            console.log(`Error : ${err.message}`);
        });
    });
};

getJoke();