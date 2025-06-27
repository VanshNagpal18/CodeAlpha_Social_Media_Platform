const menuItems = document.querySelectorAll('.menu-item');



const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const changeActiveItem =() =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
 item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if(item.id != 'notifications'){
        document.querySelector('.notifications-popup').style.display = 'none';
    } else{
        document.querySelector('.notifications-popup').style.display = 'block';
        document.querySelector('#notifications .notifications-count').style.display = 'none';
    }
 })
})
const messagesNotification = Document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch = Document.querySelector('#message-search');

// const searchMessage = () => {
//     const val messageSearch.value.tolowercase();
//     message.forEach(chat => {
//         let name = chat.querySelectorAll('h5').textContent.toLocaleLowerCase();
//     })
// }

// messagesNotification.addEventListener('click', () => {
//      messages.style.boxShadow = '0 0 1rem var(--color-primary)';
//      messagesNotification.querySelector('.notification-count').style.display = 'none';
//      setTimeout(() => {
//        messages.style.boxShadow ='none';
//      },2000);
// })


const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
  const closeThemeModal = () => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display  = 'none';
    }
  }
  
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);
