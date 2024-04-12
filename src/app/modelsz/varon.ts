

export interface Varon {
    
    id?:number;
    nombre?:String;
    apellido?:String;
    direccion?:String;
    telefono?:String;
    email?:String;
    pais?: {
        id:number;
        nombre:String;
    };
}