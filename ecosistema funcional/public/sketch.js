const NGROK = `${window.location.hostname}`;
console.log('Server IP: ', NGROK);
let socket = io(NGROK, { path: '/real-time' });

socket.on('disp_change',chooseCar=>{
    document.getElementById('unique').src=chooseCar
})