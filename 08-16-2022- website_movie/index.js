///////LINK OF WEBSITE ==> https://gidonline.io/

//const IMG
// document.querySelectorAll('.mainlink').forEach(item => {
//     IMG.push(item.firstChild.src)
// })
const IMG = ['https://gidonline.io/img/4fbd6dba1_200x300.jpg', 'https://gidonline.io/img/f437bee2a_200x300.jpg', 'https://gidonline.io/img/1525abaf1_200x300.jpg', 'https://gidonline.io/img/d86bbd16c_200x300.jpg', 'https://gidonline.io/img/760fc812f_200x300.jpg', 'https://gidonline.io/img/eab2f417c_200x300.jpg', 'https://gidonline.io/img/1cd20248e_200x300.jpg', 'https://gidonline.io/img/c0f6b1018_200x300.jpg', 'https://gidonline.io/img/e7acfec60_200x300.jpg', 'https://gidonline.io/img/b3026da79_200x300.jpg', 'https://gidonline.io/img/996392a52_200x300.jpg', 'https://gidonline.io/img/9a0637565_200x300.jpg']

/////////////////////
//const movieNames = []
// document.querySelectorAll('.mainlink').forEach(item => {
//     movieNames.push(item.getElementsByTagName("span")[0].innerHTML) 
// })
const movieNames = ['Увези меня навсегда', 'Имена людей', 'Сквозь слёзы я притворяюсь кошкой', 'Ты мне не мать', 'Секретная штаб-квартира', 'ЛЕГО Звёздные войны: Летние каникулы', 'Стандартное тихоокеанское время', 'Понедельник', 'Переступая черту', 'Сериал: Образцовая семья', 'Повесть о Затоичи', 'Сериал: Истории ходячих мертвецов']
///////////////
// const years = [];
// document.querySelectorAll('.mqn').forEach((year) => {
//     years.push(year.innerText)
// })
const years = ['2020', '2010', '2020', '2021', '2022', '2022', '2016', '2020', '1990', '2022', '1962', '2022']

function getCollectedData () { 
    let data = IMG.map(function(item, index) {
        return {
            src: item,
            name: movieNames[index],
            year: `${years[index]}`
        }
    });
    data = JSON.stringify(data); // transformed to string
    return data;
};

const finalDATA = getCollectedData();
//export {finalDATA}; import chi stacvum // throw  :Error
/////////////////

/// fetchMoviesData() backend -ic promisov berum e datan
let mekAngam = true
function fetchMoviesData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(mekAngam) {
                mekAngam = false;
                resolve(finalDATA);
            } else {
                reject(() => {//vorpeszi mek angamic avel click i depqum nuyn datan download chani
                    throw new Error();
                })
            }       
        }, 1600);
    });
};
////////////////end


//drawData() fetch e anum datan & pttvelov vran createProduct() in e
//poxancum destructuring exac tvyalnery
const drawData = () => {
    fetchMoviesData()
    .then((res) => JSON.parse(res))
    .then((product) => {
       let markupArray = product.map((dataItem) => {
          return  createProduct(dataItem);
        });
        let cardsList = document.createElement('div');
        cardsList.classList.add('cardsList');
        cardsList.append(...markupArray);
        document.body.appendChild(cardsList)
    })
};
////////////end

//////////Favorits list |start|
let favoritBlock = document.createElement('div');
favoritBlock.classList.add('favoritBlock');
document.body.appendChild(favoritBlock);

let favoritBlockClose = document.createElement('div');
favoritBlockClose.classList.add('favoritBlockClose')
 favoritBlockClose.innerText = 'X';
favoritBlockClose.addEventListener('click', () => {
    favoritBlock.style.display = 'none';
    favoritBlockClose.style.display = 'none';
 })
 document.body.appendChild(favoritBlockClose);



 let myFavoritsBtn = document.getElementById('myFavoritsBtn');

//////////Favorits list |end|


//////////functional programming
///createProduct() yndunum e destructuring argument, 
//stexcum e card-i tag -er & nranc talis argumentner;
const createProduct = ({src, name, year}) => {
    let productItem = document.createElement('div');
    productItem.classList.add('card');
    
    let image = document.createElement('img');
    image.classList.add('image');
    image.setAttribute('src', src);

    let likedIcon = document.createElement('img');
    likedIcon.setAttribute('src', './assets/heart.png')
    likedIcon.classList.add('likedIcon');
    let likedIconToggle = true;
    likedIcon.addEventListener('click', (event) => {
        // event.target.classList.toggle('done');
        if(likedIconToggle) {
            likedIcon.setAttribute('src', './assets/heart1.png');
            likedIconToggle = false;
        } else {
            likedIcon.setAttribute('src', './assets/heart.png');
            likedIconToggle = true;
        }
    })

    let productTitle = document.createElement('span');
    productTitle.classList.add('title')
    productTitle.innerText = name;

    let productDate = document.createElement('p');
    productDate.classList.add('year');
    productDate.innerText = year;

        //favorit block  =>|start|
        let favorit = document.createElement('button');
        favorit.setAttribute('id','favorit');
        favorit.innerText = 'add to favorites';
        favorit.addEventListener('click', (event) => {
            favorit.innerText = 'added'
            favorit.setAttribute('disabled', true);

            //////favoritCard - favoritneri card -er |start|
        let favoritCard = document.createElement('div');
        favoritCard.setAttribute('id', 'favoritCard');// class -ov chi linum
        
        let favoritImage = event.target.parentElement.children[0].cloneNode(true);
        favoritImage.classList.add('image');

        let favoritTitle = event.target.parentElement.children[1].cloneNode(true);
        favoritTitle.classList.add('title');

        let favoritDate = event.target.parentElement.children[2].cloneNode(true);
        favoritDate.classList.add('year');

        let favoritCardRemove = document.createElement('div');
        favoritCardRemove.classList.add('favoritCardRemove');
        favoritCardRemove.innerText = 'X';
        favoritCardRemove.addEventListener('click', (event) => {
                favorit.disabled = false;
                favorit.innerText = 'add to favorites';
                event.target.parentElement.remove();
        });

        favoritCard.append(favoritImage, favoritTitle, favoritDate, favoritCardRemove);
        favoritBlock.appendChild(favoritCard);

        
            /////favoritCard - |end|
        })
       

        //////////////////////////////// click
        myFavoritsBtn.addEventListener('click', (event) => {
            if (myFavoritsBtn.contains(event.target)) {
                favoritBlock.style.display = 'flex';
                favoritBlockClose.style.display = 'block';
            }
        });
       /////////////////////////////click end
     /// favoritBlock |end|

    productItem.append(image, productTitle, productDate, likedIcon, favorit);
   
    return productItem;
};
/////////end


////////////////////////fetch button///////////////////////start
const button = document.getElementById('btn');

function buttonDisapear () {  //// button-i anhetanaly asinxron katarvi (or`. fetch click ic heto minch katarvely urish clicky cancle a anum)
    return new Promise(res => {
        setTimeout(() => {
            res(button.style.display = 'none')
        },1600)
    })
}
button.addEventListener('click', (event) => {
    drawData()
    buttonDisapear().then() 
}); //drawData
////////////////////////fetch button///////////////////////end


////////////////searching//////////////////////
let input = document.querySelector('.search');
input.addEventListener('input', (event) => {
    let searchInput = event.target.value.toLowerCase();
    let cardsList = document.querySelector('.cardsList');
    let list = [...cardsList?.children];
    if (searchInput.length >= 2) {
        list = list.map(item => {
            let content = item?.children[1]?.innerText.toLowerCase();
            let contentOfYear = item?.children[2].innerText+ ""
            if (!content.includes(searchInput) && !contentOfYear.includes(searchInput)) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block'; 
            }
            return item;
        });
    } else {
        list = list.map(item => {
            let content = item?.children[1]?.innerText.toLowerCase();
                item.style.display = 'block';
                return item;
        });
    }
    cardsList.innerHTML = '';
    cardsList.append(...list);
})

