let server = '' ;

if(process.env.NODE_ENV == 'development'){
    server= 'http://localhost:8081/'
}else{
    server= 'http://localhost:8081/'
}


export const SERVER = server;
