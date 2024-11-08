const button1 = document.querySelector('#paes')
const modal1 = document.querySelector('#dialogpaes')
const button1Close = document.querySelector('#close1')
button1.onclick = function(){
    modal1.showModal()
}
button1Close.onclick = function(){
    modal1.close()
}
 const button2 = document.querySelector('#bolos')
const modal2 = document.querySelector('#dialogbolos')
const button2Close = document.querySelector('#close2')

button2.onclick = function(){
    modal2.showModal()
}
    button2Close.onclick = function(){
        modal2.close()
} 
const button3 = document.querySelector('#tortas')
const modal3 = document.querySelector('#dialogtortas')
const button3Close = document.querySelector('#close3')

button3.onclick = function(){
    modal3.showModal()
}
button3Close.onclick = function(){
    modal3.close()
}
 const button4 = document.querySelector('#salgados')
const modal4 = document.querySelector('#dialogsalgados')
const button4Close = document.querySelector('#close4')

button4.onclick = function(){
    modal4.showModal()
}
button4Close.onclick = function(){
    modal4.close()
}
 const button5 = document.querySelector('#bebidas')
const modal5 = document.querySelector('#dialogbebidas')
const button5Close = document.querySelector('#close5')

button5.onclick = function(){
    modal5.showModal()
} 
button5Close.onclick = function(){
    modal5.close()
}
const button6 = document.querySelector('#nos')
const modal6 = document.querySelector('#dialognos')
const button6Close = document.querySelector('#close6')

button6.onclick = function(){
    modal6.showModal()
}
 button6Close.onclick = function(){
    modal6.close()
 }
const button7 = document.querySelector('#endereco')
const modal7 = document.querySelector('#dialogendereco')
const button7Close = document.querySelector('#close7')

button7.onclick = function(){
    modal7.showModal()
} 
button7Close.onclick = function(){
    modal7.close()
}
const button8 = document.querySelector('#equipe')
const modal8 = document.querySelector('#dialogequipe')
const button8Close = document.querySelector('#close8')

button8.onclick = function(){
    modal8.showModal()
}
button8Close.onclick = function(){
    modal8.close()
}

function openImageModal(imageSrc, altText) {
    const modal = document.createElement('dialog');
    modal.classList.add('image-modal');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    img.style.width = '70%';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.onclick = () => modal.close();
    modal.appendChild(img);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    modal.showModal();
    modal.onclose = () => modal.remove();
}

document.querySelectorAll('img').forEach(img => {
    img.onclick = () => openImageModal(img.src, img.alt);
});
