// -----------Solution 1 (with innerHTML)--------------


let arr = [['Antonio', true, 5], ['Marija', false], ['Darko', true, 3], ['Daniela', false], ['Dejan', true, 4], ['Sinisa', true, 2], ['Elena', false], ['Angela', true, 1], ['Igor', false], ['Irena', true, 3]],
    person = prompt('Please enter a name'),
    table = document.createElement('table'),
    row = document.createElement('tr');

function checkData() {
    for (let i=0; i < arr.length; i++) {
        if(person === arr[i][0]) {
            var firstName = arr[i][0];
            row.innerHTML = `<td style="border:2px solid; width:200px;">${person}</td>`
            if(arr[i][1] === true ) { 
                row.innerHTML += '<td style="border:2px solid; width:200px;">Voted!</td>'
                row.innerHTML += `<td style="border:2px solid; width:200px;">${arr[i][2]}</td>`
            }else {
                row.innerHTML += `<td style="border:2px solid; width:200px;">Didn\'t vote</td>`
            }      
        }   
    }
    if(person !== firstName) {
        alert('There is no data for that name')
    }     
}

checkData();

table.style.borderCollapse = 'collapse'; 
document.body.appendChild(table);
table.appendChild(row);



// ----------Solution 2 (with innerText)--------------


// let arr = [['Antonio', true, 5], ['Marija', false], ['Darko', true, 3], ['Daniela', false], ['Dejan', true, 4], ['Sinisa', true, 2], ['Elena', false], ['Angela', true, 1], ['Igor', false], ['Irena', true, 3]],
//     person = prompt('Please enter a name'),
//     table = document.createElement('table'),
//     row = document.createElement('tr');

// function checkData() {
//     for (let i=0; i < arr.length; i++) {
//         if(person == arr[i][0]) {
//             var firstName = arr[i][0];
//             let cell1 = document.createElement('td')
//             cell1.innerText = person;
//             cell1.style.cssText = `
//             border: 2px solid;
//             width:200px;
//             `
//             row.appendChild(cell1)
//             var cell2 = document.createElement('td')
//             cell2.style.cssText = `
//                 border: 2px solid;
//                 width:200px;
//             `
//             if(arr[i][1] === true ) {
//                 cell2.innerText = 'Voted!';
//                 row.appendChild(cell2) 
//                 var cell3 = document.createElement('td')
//                 cell3.innerText = arr[i][2];
//                 cell3.style.cssText = `
//                     border: 2px solid;
//                     width:200px;
//                 `
//                 row.appendChild(cell3)
//             }else {
//                 cell2.innerText = 'Didn\'t vote'; 
//                 row.appendChild(cell2) 
//             }
//         }
//     }
    
//     if(person !== firstName) {
//         alert('There is no data for that name')
//     } 
// }

// checkData();

// table.style.borderCollapse = 'collapse'; 
// document.body.appendChild(table);
// table.appendChild(row);