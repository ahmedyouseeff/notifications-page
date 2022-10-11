/*Start VAriables*/
const unReadMessage = document.querySelectorAll('.unread');
const unreadCount = document.getElementById('notif_count');
const markAll = document.getElementById('mark_all');
/*End VAriables*/

/*Strat Count Unread Messages*/
unreadCount.innerText = unReadMessage.length; 
/*End Count Unread Messages*/

/*Strat Unselect Selected Notifications and decrease Notification count*/
unReadMessage.forEach((message) => {
    message.addEventListener('click', () =>{
        message.classList.remove('unread');
        const newUnReadMessage = document.querySelectorAll('.unread');
        unreadCount.innerText = newUnReadMessage.length; 
    })    
});
/*End Unselect Selected Notifications and decrease Notification count*/

/*Start Delete Marked All selected Messages*/
markAll.addEventListener('click', () => {
    unReadMessage.forEach((message) => {
        message.classList.remove('unread');
    })  
        const newUnReadMessage = document.querySelectorAll('.unread');
        unreadCount.innerText = newUnReadMessage.length; 
    });
/*End Delete Marked All selected Messages*/
