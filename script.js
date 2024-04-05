
const containerEmployees = document.querySelector('.container-employees');
const btnAddEmloyee = document.querySelector('.add-emloyee');
const containerAddEmployee = document.querySelector('.container-add-employee');
const btnNewEmployee = document.querySelector('.new-employee');
const nameEmpl = document.querySelector('.name');
const genderEmpl = document.querySelector('.gender');
const descEmpl = document.querySelector('.desc');
const ageEmpl = document.querySelector('.age');
const infoEmpl = document.querySelector('.info');
const modalEmployee = document.querySelector('.modal-employee');

let arrayEmployees = [
    {
        createdAt: "2024-04-03T19:29:27.942Z",
        name: "Sheila Ondricka",
        gender: "gender 10",
        desc: "Northeast",
        age: 18,
        info: "vastly",
        id: 10
    },
    {
        createdAt: "2024-04-04T01:53:29.392Z",
        name: "Bob Kemmer",
        gender: "gender 12",
        desc: "Joanne Coupe",
        age: 39,
        info: "generation Markets Latin",
        id: 12
    }
];


btnAddEmloyee.addEventListener('click', () => {
    containerAddEmployee.classList.toggle('container-none');
});

btnNewEmployee.addEventListener('click', () => {
    if (nameEmpl.value && genderEmpl.value && descEmpl.value && ageEmpl.value && infoEmpl.value) {
        let newEmpl = {
            createdAt: new Date(),
            name: nameEmpl.value,
            gender: genderEmpl.value,
            desc: descEmpl.value,
            age: ageEmpl.value,
            info: infoEmpl.value,
            id: createId(arrayEmployees) > 0 ? createId(arrayEmployees) : 1
        };
        arrayEmployees.push(newEmpl);
        containerEmployees.innerHTML = '';
        displaylistEmployee(arrayEmployees);
        nameEmpl.value = '';
        genderEmpl.value = '';
        descEmpl.value = '';
        ageEmpl.value = '';
        infoEmpl.value = '';
        modal()
    } else {
        alert('Заполните все поля')
    }
});

function createId(arrayEmployees) {
    return Math.max(...arrayEmployees.map(empl => empl.id)) + 1;
};

function displaylistEmployee(arrayEmployees) {
    arrayEmployees.map(empl => {
        containerEmployees.innerHTML +=
            ` <div class="employee">
    <p class="createdAt grid-item">${empl.createdAt}</p>
    <p class="name grid-item">${empl.name}</p>
    <p class="gender grid-item">${empl.gender}</p>
    <p class="desc grid-item">${empl.desc}</p>
    <p class="age grid-item">${empl.age}</p>
    <p class="info grid-item">${empl.info}</p>
    <p class="id grid-item">${empl.id}</p>
    <button class="delete-employee grid-item" id=${empl.id} onclick="deleteEmpl(${empl.id})">Удалить</button>
    </div>`
    })
};
function deleteEmpl(idEmployee) {
    arrayEmployees = arrayEmployees.filter(empl => empl.id != idEmployee);
    containerEmployees.innerHTML = '';
    displaylistEmployee(arrayEmployees)
};

displaylistEmployee(arrayEmployees);

function modal() {
    document.querySelectorAll('.employee').forEach(empl => {
        empl.addEventListener('click', () => {
            modalEmployee.classList.remove('container-none');
            let needIdEmpl = empl.querySelector('.delete-employee').id;
            let modalEmpl = arrayEmployees.find(empl => empl.id == needIdEmpl);
            modalEmployee.innerHTML =
                ` <div class="modal-info">
    <p class="createdAt-modal"><span class='modal-label'>createdAt:</span> ${modalEmpl.createdAt}</p>
    <p class="name-modal"><span class='modal-label'>name:</span> ${modalEmpl.name}</p>
    <p class="gender-modal"><span class='modal-label'>gender:</span> ${modalEmpl.gender}</p>
    <p class="desc-modal"><span class='modal-label'>desc:</span> ${modalEmpl.desc}</p>
    <p class="age-modal"><span class='modal-label'>age:</span> ${modalEmpl.age}</p>
    <p class="info-modal"><span class='modal-label'>info:</span> ${modalEmpl.info}</p>
    <p class="id-modal"><span class='modal-label'>id:</span> ${modalEmpl.id}</p>
    </div>`
        })
    })
};

modalEmployee.addEventListener('click', () => {
    modalEmployee.classList.add('container-none');
})

modal()