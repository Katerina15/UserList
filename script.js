const userAbout = document.querySelector(".user-about")
const list = document.querySelector(".user-list")
const director = document.querySelector(".boss ul")
const deptMarketing = document.querySelector(".marketing ul")
const deptSales = document.querySelector(".sales ul")
const deptIT = document.querySelector(".IT ul")


 
class User {
    constructor(surname, name, patronymic, mail, phone, jobPosition, pay, employmentDate, dept) {
        this.surname = surname
        this.name = name
        this.patronymic = patronymic
        this.mail = mail
        this.phone = phone
        this.jobPosition = jobPosition
        this.pay = pay
        this.employmentDate = employmentDate
        this.dept = dept 
    }
    get fullName() {
        return `${this.surname} ${this.name} ${this.patronymic}`
    }
    set fullName(newValue) {
        [this.name, this.surname, this.patronymic] = newValue.split("")
    }
}
let allUser = [
    new User ("Рудавин", "Елисей", "Данилевич", "ryppikerru-1049@yopmail.com", "0936371245", "Директор", "5000$", "05.10.2010"),
    new User ("Дорогов", "Борислав", "Онисимович", "hettejuhem-3363@yopmail.com", "0633476521", "Начальник IT отдела", "3000$", "02.08.2012", "IT"),
    new User ("Рассказова", "Оксана", "Мефодиевна", "wyllajerrelo-0649@yopmail.com", "0931327546", "Начальник отдела маркетинга", "3000$", "04.05.2015", "Marketing"),
    new User ("Яшагина", "Софья", "Ростиславовна", "ixylorreb-7555@yopmail.com", "0931246357", "Начальник отдела продаж", "3000$", "11.12.2017", "Sales"),
    new User ("Михайлов", "Макар", "Романович", "edujalli-4878@yopmail.com", "0935543262", "Системный аналитик", "9000$", "02.08.2012", "IT"),
    new User ("Шестаков", "Роман", "Арсеньевич", "elaweli-9988@yopmail.com", "0936466581", "Системный администратор", "1000$", "22.09.2019", "IT"),
    new User ("Семёнов", "Владлен", "Александрович", "sulijenilly-6162@yopmail.com", "0633975523", "Веб-программист", "1500$", "06.07.2015", "IT"),
    new User ("Брагина", "Василиса", "Лукьяновна", "kakillaxeffu-5564@yopmail.com", "0733553526", "Администратор баз данных", "1200$", "06.10.2016", "IT"),
    new User ("Самойлова", "Марта", "Богдановна", "mideqomuppa-3672@yopmail.com", "0633536539", "Администратор сайта", "1300$", "22.09.2015", "IT"),
    new User ("Кулакова", "Анна", "Ярославовна", "oddimukorru-7097@yopmail.com", "0631325556", "Менеджер-маркетолог", "1200$", "30.07.2012", "Marketing"),
    new User ("Казакова", "Влада", "Ефимовна", "unnoreho-0251@yopmail.com", "0731358596", "Менеджер по рекламе", "1100$", "06.07.2013", "Marketing"),
    new User ("Агафонова", "Алеся", "Михайловна", "zicepamys-7088@yopmail.com", "0631328566", "Специалист по маркетинговым исследованиям", "900$", "26.01.2018", "Marketing"),
    new User ("Емельянов", "Андрей", "Денисович", "zevehemmessi-5752@yopmail.com", "0732347596", "Интернет-маркетолог", "900$", "09.11.2016", "Marketing"),
    new User ("Лобанов", "Василий", "Вячеславович", "calisaja-2090@yopmail.com", "0935427596", "Продакт менеджер", "1000$", "09.10.2016", "Marketing"),
    new User ("Сергеев", "Степан", "Михайлович", "racawannaxo-9493@yopmail.com", "0939846657", "Менеджер по ключевым клиентам", "1200$", "11.08.2016", "Sales"),
    new User ("Никонов", "Роман", "Дамирович", "mefusujek-6086@yopmail.com", "0937286959", "Торговый представитель", "1000$", "16.09.2012", "Sales"),
    new User ("Голубев", "Александр", "Игоревич", "syvamysyl-8935@yopmail.com", "0639346365", " Администратор отдела продаж", "500$", "11.05.2011", "Sales"),
    new User ("Зуева", "Людмила", "Викторовна", "abassommuc-0067@yopmail.com", "0735256338", "Менеджер по городским продажам", "600$", "24.02.2013", "Sales"),
    new User ("Зайцева", "Елена", "Геннадиевна", "tollefejutu-4606@yopmail.com", "0931695658", "Менеджер по региональным продажам", "700$", "21.06.2017", "Sales") 
]


function initials(user) {
 
    return user.name[0].toUpperCase() + "." + user.patronymic[0].toUpperCase() + "."   
}

function getDirector(){

    for (let i=0; i<allUser.length; i++){
        if(allUser[i].jobPosition === "Директор"){
            return allUser[i]
        }
    }
}

let userDirector = getDirector()

let newUser = `<p name = "${userDirector.fullName}"><i class="fas fa-user-tie"></i>&ensp;${userDirector.surname} ${initials(userDirector)}</p>`

director.innerHTML = `${newUser}`

function addUserInList(user) {
    
    let newUser = `<li> 
                    <p name="${user.fullName}"><i class="fas fa-user-tie"></i>&ensp;${user.surname} ${initials(user)}</p>
                </li>`

    if (user.dept == "IT") {
        deptIT.insertAdjacentHTML("beforeend", newUser)
    }else if (user.dept == "Marketing") {
        deptMarketing.insertAdjacentHTML("beforeend", newUser)
    }else if (user.dept == "Sales") {
        deptSales.insertAdjacentHTML("beforeend", newUser)
    }
}

let selectedName

function activeUserNameOnList(name) { 
    if (selectedName) {
        selectedName.classList.remove('name-active')
    }
    selectedName = name
    selectedName.classList.add('name-active')
}

function userInfo(user) {

    let newUser = ` <div class = "user-about-container">
                        <img src="https://api.adorable.io/avatars/285/${user.surname}@adorable.png" alt="">
                        <div>
                            <p class="user-name">${user.fullName}</p>
                            <p><span>${user.jobPosition}</span></p>
                        </div>
                        <div>
                            <p><span>E-mail:</span>&ensp;<a>${user.mail}</a></p>
                            <p><span>Телефон:</span>&ensp;<a>${user.phone}</a></p>
                        </div>
                        <div>
                            <p><span>Оклад:</span>&ensp;${user.pay}</p>
                            <p><span>Дата приема на работу:</span>&ensp;${user.employmentDate}</p>
                        </div>
                    </div>
                    <div class="user-about-close">&#10006;</div>
    `
    userAbout.innerHTML = `${newUser}` 
    
    let close = document.querySelector(".user-about-close")

    close.onclick = function() {

        userAbout.innerHTML = `<div class="icon-user-circle">
                                <i class="fas fa-user-circle"></i>
                                </div>`

        if (selectedName) {
            selectedName.classList.remove('name-active')
        }
    }   
}



function findUserByFullName (users, fullName) {
    for(let i=0; i<users.length; i++){
        if(users[i].fullName === fullName){
            return users[i]
        }
    }
}

list.addEventListener("click", function(event){
    const element = event.target
    
    if (element.attributes.name) {

        const fullName = element.attributes.name.value

        userInfo(findUserByFullName (allUser, fullName))
        
        activeUserNameOnList(element)   
    }
   
})




list.onclick = function(event) {

    const element = event.target

    if (element.classList.contains("click")) {
        element.classList.toggle("open")

        if (element.classList.contains("open")) {
            element.parentNode.parentNode.querySelector("ul").classList.add("active")
            element.parentNode.querySelector("i").classList.remove("fa-caret-down")
            element.parentNode.querySelector("i").classList.add("fa-caret-up")
            
        } else {
            element.parentNode.parentNode.querySelector("ul").classList.remove("active")
            element.parentNode.querySelector("i").classList.remove("fa-caret-up")
            element.parentNode.querySelector("i").classList.add("fa-caret-down")
        }
    } 
}

for (let key in allUser) {
    addUserInList(allUser[key])
}

