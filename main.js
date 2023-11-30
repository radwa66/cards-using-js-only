let names =['ahmed', 'mohamed' , 'shawki','mahmoud ', 'hesham' ]
let ages =['18 years old', '20 years old' , '30 years old','35 years old ', '38 years old' ]


let container =document.createElement('div');
document.body.appendChild(container);
container.style.textAlign ='center';
function element(name , ages)
{
    // elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //content
    let head = document.createTextNode(name);
    let text = document.createTextNode(ages);
    img.src ='1.jpg'


    //style
    card.style.width = '200px';
    card.style.color = '#fff';
    card.style.backgroundColor = '#444';
    card.style.padding = '10px';
    card.style.margin = '3px';
    card.style.display = 'inline-block';
    
    img.style.width ='100%';


    //assign content
    title.appendChild(head);
    age.appendChild(text);

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    
    container.appendChild(card);

}
for(let i=0; i<5; i++){
    element(names[i], ages[i]);
}