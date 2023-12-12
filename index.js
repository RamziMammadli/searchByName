const btn = document.getElementById('btn')
const inpp = document.getElementById('inpp')
const list = document.querySelector('.list')
const abc = document.getElementById('abc')
const abcd = document.getElementById('abcd')

function getPro () {
    abcd.style.display='none'
    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
    .then(res => {
        db = res.data
        console.log(db);
        db.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.title}</p>`
            list.appendChild(div)
        })
    })
}
getPro()

////////////////////////////////////////////////search By name

// function getbyname () {
//     abcd.innerHTML = ``
//     abc.style.display='none'
//     abcd.style.display='block'

//     axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?title=${inpp.value}`)
//     .then(res => {
//         db = res.data
//         db.map(item => {
//             const div = document.createElement('div')
//             div.innerHTML = `
//             <p>${item.title}</p>`
//             abcd.append(div)
//         })

//     })
// }
// btn.addEventListener('click', getbyname)

// function getbyname () {
//     abcd.innerHTML = ``
//     abc.style.display='none'
//     abcd.style.display='block'

//     axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
//     .then(res => {
//         db = res.data
//         let filteredData = db.filter(item => item.title.toLowerCase().includes(inpp.value))
//         console.log(filteredData);
//         filteredData.map(item => {
//             const div = document.createElement('div')
//             div.innerHTML = `
//             <p>${item.title}</p>`
//             abcd.append(div)
//         })

//     })
// }
// btn.addEventListener('click', getbyname)

////////////////////////////////////////////sort elifbaya gore

// function getbyname () {
//     abcd.innerHTML = ``
//     abc.style.display='none'
//     abcd.style.display='block'

//     axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
//     .then(res => {
//         db = res.data
//         let sortedData = db.sort((a, b) => a.title.localeCompare(b.title))      
//         sortedData.map(item => {
//             const div = document.createElement('div')
//             div.innerHTML = `
//             <p>${item.title}</p>`
//             abcd.append(div)
//         })

//     })
// }
// btn.addEventListener('click', getbyname)






/////////////////////////////////sort qiymete gore

function getbyname () {
    abcd.innerHTML = ``
    abc.style.display='none'
    abcd.style.display='block'

    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
    .then(res => {
        db = res.data
        let sortedData = db.sort((a, b) => a.price - b.price)      
        sortedData.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.title}</p>`
            abcd.append(div)
        })

    })
}
btn.addEventListener('click', getbyname)