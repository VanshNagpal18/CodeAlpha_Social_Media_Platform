const menuItems = document.querySelectorAll('.menu-item');



const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes =  document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

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

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const messagesNotification = document.querySelector('#messages-notification');


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
   
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
   } )
}

messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
     messages.style.boxShadow = '0 0 1rem var(--color-primary)';
     messagesNotification.querySelector('.notifications-count').style.display = 'none';
     setTimeout(() => {
       messages.style.boxShadow ='none';
     },2000);
})


const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
  const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display  = 'none';
    }
  }
  
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

// font

fontSizes.forEach(size => {
   
  size.addEventListener('click', () => {
  removeSizeSelector();
   let fontSize;
   size.classList.toggle('active');

     if(size.classList.contains('font-size-1')){
       fontSize = '10px';
       root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');
   }
    else if(size.classList.contains('font-size-2')){
         fontSize = '13px';
         root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
    }
    else if(size.classList.contains('font-size-3')){
         fontSize = '16px';
         root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
         fontSize = '19px';
         root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
         fontSize = '22px';
         root.style.setProperty('--sticky-top-left', '-10rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
})
    
})

// color
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
       let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
            
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
         root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// bg
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

bg1.addEventListener('click', () => {
   bg1.classList.add('active');
   bg2.classList.remove('active'); 
   bg3.classList.remove('active');

   window.location.reload();
})


bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})
