const NGROK = `${window.location.hostname}`;
console.log('Server IP: ', NGROK);
let socket = io(NGROK, { path: '/real-time' });




socket.on('disp_change',chooseCar=>{
    document.getElementById('unique').src=chooseCar
})

// let data={
//     model,
//     color
// }

// function addMessage() {
//     socket.emit('user_info',data);
// }
