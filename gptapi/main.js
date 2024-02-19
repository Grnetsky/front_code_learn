import OpenAI from 'openai'
import path from 'path'
import fs from 'fs'
import playSound from 'play-sound'
const speechFile = path.resolve("./speech.mp3");

const openai = new OpenAI({
  apiKey: 'sk-xq5fONi6yxkE4W0LDc3778B9Dc084cAa86D9970e8308C403',
  baseURL: "https://oneapi.xty.app/v1",
})
async function main() {
  const params = {
    messages: [{ role: 'user', content: '给我讲讲设计模式' }],
    model: 'gpt-3.5-turbo',
    // stream:true
  };
  const stream = await openai.chat.completions.create(params);
  let res = stream.choices[0].message.content;
  console.log(res)
  // stream.toReadableStream().pipeTo()
  //   for await (const chunk of stream) {
  //
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  // }
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: res,
  });
  // mp3.body.on('data',(chunk)=>{
  //   console.log(chunk,999);
  // })
  // let reader = mp3.body.getReader()
  // reader.read().then(({done,value})=>{
  //   console.log(value,done);
  // })
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
  playSound({}).play(speechFile);
}

main();