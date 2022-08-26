const amit =document.querySelector('.amit');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const review = [
    {   
        image:'https://en.wikipedia.org/wiki/File:Abhishek_Bachchan.jpg',

        About:'Bachchan (pronounced [əmɪˈt̪ɑːbʱ ˈbətːʃən]; born Amitabh Srivastava;[1] 11 October 1942[3]) is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema. He is regarded as one of the most influential actors in the history of Indian cinema.[4] During the 1970s–1980s, he was the most dominant actor in the Indian movie scene; the French director François Truffaut called him a "one-man industry."'
    },
    { 
        image:'https://en.wikipedia.org/wiki/File:Amitabh.jpg',

        About:'Aishwarya Rai Bachchan (née Rai; born 1 November 1973) is an Indian actress and the winner of the Miss World 1994 pageant. Primarily known for her work in Hindi and Tamil films, she has established herself as one of the most popular and influential celebrities in India.[1][2] Rai has received numerous accolades, including two Filmfare Awards, and was honoured with the Padma Shri by the Government of India in 2009 and the Ordre des Arts et des Lettres by the Government of France in 2012. She has often been cited in the media as "the most beautiful woman in the world".[3][4]'
    },{
        image:'https://en.wikipedia.org/wiki/File:Abhishek_Bachchan.jpg',

        About:'Abhishek Bachchan (born 5 February 1976) is an Indian actor and film producer known for his work in Hindi films. Part of the Bachchan family, he is the son of actors Amitabh Bachchan and Jaya Bachchan and the grandson of poet Harivansh Rai Bachchan and social activist Teji Bachchan.Bachchan debuted with the war film Refugee (2000), followed by a dozen of unsuccessful ventures. His career prospects changed with the successful action film Dhoom (2004) and critical acclaim proved with three consecutive Filmfare Award for Best Supporting Actor for Yuva (2004), Sarkar (2005), and Kabhi Alvida Naa Kehna (2006), making him the only actor after Dilip Kumar to win 3 consecutive Filmfares. His biggest solo critical and commercial success came with a character loosely based on Dhirubhai Ambani in Guru (2007).'
    }
]

let current =0;
btn.addEventListener('click',function(){
    const item = review[current];
    text.textContent = item.About;
    amit.src = `${current}.png`
    current++;
    if(current==3){
        current=0;
    }
})