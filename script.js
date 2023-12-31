const notifications = document.querySelectorAll(".notification-box")
const unreadNotifications = document.querySelectorAll(".unread");
const redDot = document.querySelectorAll(".red-dot");
const notificationNumber = document.getElementById("notification-number")
const numberBox = document.querySelector(".number-box");

notificationNumber.innerHTML = unreadNotifications.length

for (let i = 0; i < notifications.length; i++) {

    notifications[i].addEventListener("click", ()=> {
        notifications[i].classList.remove("unread")

        redDot[i].classList.remove("active")

        for (let i = 0; i < unreadNotifications.length; i++) {
        notificationLenght = unreadNotifications.length-1;
        }
        
        console.log(notificationLenght)
    })
}

if(unreadNotifications.length) {
    numberBox.classList.add("active")
}


