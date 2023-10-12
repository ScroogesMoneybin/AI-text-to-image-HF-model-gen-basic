const { HfInference } = require('@huggingface/inference');
require('dotenv').config();

//specify huggingface access token
const ACCESS_TOKEN = process.env.HUGGINGFACE_ACCESS_TOKEN;

//initialize huggingface inference class
const hf = new HfInference(ACCESS_TOKEN);

//specify model from huggingface repository available on Inference API
const MODEL_NAME = 'stabilityai/stable-diffusion-xl-base-1.0';


const textToImageGen = async (req, res) => {
    const prompt = req.query.prompt;

    //text to image model, e.g. Stable Diffusion from Hugging Face returns an image Blob object
    const imageBlob = await hf.textToImage({
        inputs: prompt,
        model: MODEL_NAME,
        parameters: {
            negative_prompt: 'blurry', 
        }
        })

    //send the image blob to frontend using buffer   
    imageBlob.arrayBuffer().then((buf) => {
        //convert the image blob into a buffer and encode to a base64 string before sending it to frontend
        //Does not load in Postman, but is easily rendered on frontend
        let transmission = Buffer.from(buf, 'base64').toString('base64');
        res.setHeader("Content-Type", "image/jpg");
        
        res.send(transmission);
        });        
}

module.exports = {
    textToImageGen
}
