import { express, Server, cors, os } from './dependencies.js'

const expressApp = express(); //Environment setup
const PORT = 8080;
const IPaddress = "172.30.59.231"
const SERVER_IP = IPaddress;

expressApp.use(express.json()) //Middlewares
expressApp.use(cors({ origin: "*" }));
expressApp.use('/mupi', express.static('public')); //Middlewares
expressApp.use('/client', express.static('public2')); //Middlewares

//expressApp.listen(PORT);
const httpServer = expressApp.listen(PORT, () => { //Star the server
    console.log(`http://localhost:${PORT}/mupi`);
    console.table({ 
        'Client Endpoint' : `http://${SERVER_IP}:${PORT}/client`,
        'Mupi Endpoint': `http://${SERVER_IP}:${PORT}/mupi` });
}) // esta recibiendo lo que expressApp.listen entrega

const io = new Server(httpServer, { path: '/real-time' });

io.on('connection',(socket)=>{
console.log(socket.id);
socket.on('change',chooseCar=>{
    console.log(chooseCar);
    socket.broadcast.emit('disp_change',chooseCar)
})
socket.on('catch',userData=>{
    console.log(userData);
})
});

