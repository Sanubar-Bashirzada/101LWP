let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`

let spaceCount = 0;

for (let i = 0; i < sampleNews.length; i++) {
    if (sampleNews[i] === " ") {
        spaceCount++;
    }
}

console.log("Boşluq sayi:", spaceCount);



