
// The Word Translator
// Usage: Use simple conditional statements

// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" 
// for the given language within the console window. 
//
// If the user enters anything but those four language codes, the application should default to English. 
// The result should be (for example):
// Hello World translated in French is: Bonjour le monde

let strResponse = "Hello World"
let languageCode = prompt("Please enter a language (es, de, en, fr):")

if (languageCode == "es") {
    strResponse = "Hola Mundo";
}
if (languageCode == "de") {
    strResponse = "Hallo Welt";
}
if (languageCode == "fr") {
    strResponse = "Bonjour le Monde";
}
    
console.log(strResponse);

