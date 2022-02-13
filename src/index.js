fetch('http://localhost:3000/pups')
    .then(response => response.json())
    .then(pupData => {
        // console.log(pupData)
        pupData.forEach(pup => {
            createDogBarDiv(pup)
            createDogInfoDiv(pup)
        })
    })

let dogBar = document.getElementById('dog-bar')
// console.log(dogBar)
function createDogBarDiv(pup){
    let span = document.createElement('span')
    span.textContent = pup.name
    // console.log(span)
    dogBar.appendChild(span)
    span.addEventListener('click', (e) =>{
        // console.log(e.target)
        createDogInfoDiv(pup)
    })
}

let dogInfo = document.getElementById('dog-info')
function createDogInfoDiv(pup){
    dogInfo.innerHTML = ''

    let pic = document.createElement('img')
    // console.log(pic)
    pic.src = pup.image
    dogInfo.appendChild(pic)

    let h2 = document.createElement('h2')
    h2.textContent = pup.name
    dogInfo.appendChild(h2)

    let button = document.createElement('button')
    button.textContent = pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
    dogInfo.appendChild(button)
}

//missing step 4 from readme.





// fetch('http://localhost:3000/pups')
//     .then(response => response.json())
//     .then(pupData => {
//         // console.log(pupData)
//         pupData.forEach(pup => {
//             // console.log(pup)
//             makeDogBarDiv(pup)
            
//         }) 
//     })

// let dogBar = document.getElementById('dog-bar')
// // console.log(dogBar)

// function makeDogBarDiv(pup){
//     let span = document.createElement('span')
//     span.textContent = pup.name
//     dogBar.appendChild(span)
//     span.addEventListener('click', (e) => {
//         // console.log(e.target)
//         // console.log(pup)
//         displayDogInfoDiv(pup)
//     })
// }

// // fetch('http://localhost:3000/pups')
// //     .then(response => response.json())
// //     .then(pupNatureData => {
// //         // console.log(pupData)
// //         dogsInfo(pupNatureData)
// //     })

// let dogInfo = document.getElementById('dog-info')
// // console.log(dogInfo)

// function displayDogInfoDiv(pup){
//     dogInfo.innerHTML = ''
//     // console.log(pup.image)
//     let pic = document.createElement('img')
//     pic.src = pup.image
//     dogInfo.appendChild(pic)

//     let h2 = document.createElement('h2')
//     h2.textContent = pup.name
//     dogInfo.appendChild(h2)

//     let button = document.createElement('button')
//     button.textContent = pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!';

//     button.addEventListener('click', (e) => {
//         console.log ('click')
        
//         if(pup.isGoodDog === true){
//             return button.textContent = 'Good Dog!'
//         }else{
//             return button.textContent = 'Bad Dog!'
//         }
//     })
//     dogInfo.appendChild(button)
// }
