import mongoose from 'mongoose';
import { Clientes } from './db';
import { promises } from 'fs';
import { resolve } from 'dns';
import { rejects } from 'assert';

/*clase cliente
class Cliente {
    constructor(id,{nombre,apellido,empresa,emails,edad,tipo,pedidos}){
        this.id=id;
        this.nombre=nombre;
        this.apellido= apellido;
        this.empresa= empresa;
        this.emails= emails;
        this.edad= edad;
        this.tipo=tipo;
        this.pedidos=pedidos;
    }
}*/

//const clientesDB={};

export const resolver ={
    Query : {
        getCliente : ({id}) => {
            return new Cliente(id,clientesDB[id]);
        }, 
    },
    Mutation: {
        crearCliente : (ROOT,{input}) => {
            /*const id = require('crypto')
            .randomBytes(10).toString('hex');*/
            const nuevoClientes = new Clientes({
                nombre:nombre,
        apellido: input.apellido,
        empresa: input.empresa,
        emails: input.emails,
        edad: input.edad,
        tipo:input.tipo,
        pedidos:input.pedidos

            });
            nuevoCliente.id = nuevoCliente._id;
            return new Promise((resolve,Object)=> {
                nuevoCliente.save((error) => {

                if(error) rejects(error)
                else resolve(nuevoCliente)

                })
                
            });

           /* clientesDB[id] = input;
            return new Cliente(id,input);*/
        }
       
    }

}

