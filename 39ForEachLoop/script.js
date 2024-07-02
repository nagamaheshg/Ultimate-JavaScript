const socials = ['Twitter', 'Facebook', 'Linkedin', 'Instagram']

console.log(socials.__proto__)

socials.forEach((element, index, arr) => {
    console.log(`${index+1} - ${element} - ${arr}`);
});

function logSocialsn(social){
    console.log(social)
}

socials.forEach(logSocialsn) 

const socialObjs = [{name:'Twitter', url:'https//twitter.com'}, {name:'Facebook', url:'https//facebook.com'}, {name:'Linkedin', url:'https//linkedin.com'},{name:'Instagram', url:'https//instagram.com'},]

socialObjs.forEach((item) => console.log(item.url));