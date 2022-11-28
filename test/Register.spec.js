import {Register} from '../src/components/Register.js';

describe ('Test a botón de registro', ()=>{
 it ("Probar si existe el botón registro", ()=>{
    const Registro = Register();
    const button = Registro.querySelector('.container__button__signup')
    expect(button).not.toBeNull();
    });
});
