// import { Configuration, OpenAIApi } from "openai";
const dotenv = require('dotenv').config();
const { Configuration, OpenAIApi } = require ("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const runPrompt = async () => {
    const prompt = "Tell me a joke about a cat eating pasta.";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature:1,
    })

    console.log(response.data)
}

runPrompt()