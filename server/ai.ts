"use server";
// import { deepseek } from '@ai-sdk/deepseek';
// import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic'; 

import { generateText } from 'ai';

export async function getAIResponse(prompt: string) {
    try {
        
        // providers openai
        // const {text} = await generateText({
        //     model: openai('gpt-3.5-turbo'),
        //     prompt, 
        // });

        // providers 
        // const {text} = await generateText({
        //     model: deepseek('deepseek-chat'),
        //     prompt, 
        // });

        // providers anthropic
        const {text} = await generateText({
          
            model: anthropic('claude-3-opus-20240229'),
            prompt,
        });
    

  return text ;
    } catch (error) {
        console.log(error);
        return "Erreur de génération de texte";
    }

}