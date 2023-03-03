const NGROK = `${window.location.hostname}`;
console.log('Server IP: ', NGROK);
let socket = io(NGROK, { path: '/real-time'});

let screens=0;
let cars=0;
let color=0;
let wheels=false;
let wheel=0;
let button=document.getElementById("button");
let mover=document.getElementById("change_r");
let movel=document.getElementById("change_l");
let moveu=document.getElementById("change_u");
let moved=document.getElementById("change_d");
let submit=document.getElementById("submit");
let chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/EQ.png?raw=true";

//main screen change
button.addEventListener("click",()=>{
    switch (screens) {
        case 0:
            socket.emit('change', chooseCar)
            document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/EQ_CELULAR.png?raw=true";
            document.getElementById("change_r").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/change_l.png?raw=true";
            document.getElementById("change_l").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/change_r.png?raw=true";
            button.src="https://github.com/Darksea1220/imagenes_mupi/blob/master/SelecT.png?raw=true"
            screens=1;
            break;
        case 1:
            chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_check.png?raw=true";
            socket.emit('change', chooseCar)
            mover.style.zIndex=-100
            movel.style.zIndex=-100
            button.style.zIndex=-100
            document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_cphone.png?raw=true";
            setTimeout(() => {
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/Color_select.png?raw=true";
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_withe.png?raw=true";
                socket.emit('change', chooseCar)
                button.style.zIndex=1
                document.getElementById("change_u").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/change_u.png?raw=true";
                document.getElementById("change_d").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/change_d.png?raw=true";
                document.getElementById("colors").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/gray_pick.png?raw=true";
            },2000);
            screens=2;
            break;
        case 2:
            document.getElementById("colors").src=""
            document.getElementById("change_u").src=""
            document.getElementById("change_d").src=""
            chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_yellow.png?raw=true";
            socket.emit('change', chooseCar)
            document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wphone1.png?raw=true";
            wheels=true;
            setTimeout(() => {
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wheel1.png?raw=true";
                socket.emit('change', chooseCar)
                mover.style.zIndex=1
                movel.style.zIndex=1
            },2000);
            screens=3;
            break;
        case 3:
            document.getElementById("change_r").src="";
            document.getElementById("change_l").src="";
            document.getElementById("button").src="";
            chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/Final_mupi.png?raw=true";
            socket.emit('change', chooseCar)
            document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/fields.png?raw=true";
            document.getElementById("submit").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/submit.png?raw=true";
        break;
    
        default:
            break;
    }
})

//model-wheel change
movel.addEventListener('click',()=>{
    if (wheels==true) {
        switch (wheel) {
            case 0:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wheel2.png?raw=true";
                wheel=1;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wphone2.png?raw=true";
                socket.emit('change', chooseCar)
            break;
            case 1:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wheel3.png?raw=true";
                wheel=2;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wphone3.png?raw=true";
                socket.emit('change', chooseCar)
            break;
        default:
            break;
        }
    }else{
        switch (cars) {
            case 0:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG.png?raw=true";
                cars=1;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_CELULAR.png?raw=true";
                socket.emit('change', chooseCar)
            break;
            case 1:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/MAYBACH.png?raw=true";
                cars=2;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/MAYBACH_celular.png?raw=true";
                socket.emit('change', chooseCar)
            break;
            default:
            break;
        }
    }
})
mover.addEventListener('click',()=>{
    if (wheels==true) {
        switch (wheel) {
            case 2:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wheel2.png?raw=true";
                wheel=1;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wphone2.png?raw=true";
                socket.emit('change', chooseCar)
            break;
            case 1:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wheel1.png?raw=true";
                wheel=0;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_wphone1.png?raw=true";
                socket.emit('change', chooseCar)   
            break;
            default:
            break;
        }
    } else {
        switch (cars) {
            case 2:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG.png?raw=true";
                cars=1;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_CELULAR.png?raw=true";
                socket.emit('change', chooseCar)
            break;
            case 1:
                chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/EQ.png?raw=true";
                cars=0;
                document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/EQ_CELULAR.png?raw=true";
                socket.emit('change', chooseCar)
            break;
            default:
            break;
        }
        
    }
})

//color change
moveu.addEventListener('click',()=>{
    switch (color) {
        case 0:
            chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_unyellow.png?raw=true";
            socket.emit('change', chooseCar)
            color=1;
            document.getElementById("colors").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/yellow_pick.png?raw=true";
            break;
        default:
            break;
    }
})
moved.addEventListener('click',()=>{
    switch (color) {
        case 1:
            chooseCar="https://github.com/Darksea1220/imagenes_mupi/blob/master/AMG_withe.png?raw=true";
            socket.emit('change', chooseCar)
            color=0;
            document.getElementById("colors").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/gray_pick.png?raw=true";
            socket.emit('change', chooseCar)
            break;
        default:
            break;
    }
})

//final
submit.addEventListener('click',()=>{
    document.getElementById("display").src="https://github.com/Darksea1220/imagenes_mupi/blob/master/final_phone.png?raw=true";
    document.getElementById("submit").src=""
;})

//se me fue un poquito la mano con los switch... meeh, se me fue al carajo pero funciona, 
//para el final espero poder optimizarlo