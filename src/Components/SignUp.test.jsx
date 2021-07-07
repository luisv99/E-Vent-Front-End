import React from 'react';
import { render, screen, fireEvents } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './SignUp'


describe('Login Component', ()=>{
    
    const value = "HolaMundo"
    const numberValue = 8

    beforeEach(() => {
        render(<SignUp></SignUp>)
    })

    it('Should render withour crashing', ()=> {
        

        //screen.debug();
        const signUpComponent = screen.getByTestId('signupForm')

        expect(signUpComponent).toBeInTheDocument();
    });



    test('Should excecute Nombre onChange', ()=>{
        
        const nombreInput = screen.getByTestId('nombre')
        userEvent.type(nombreInput, value)

        expect(nombreInput.value).toBe(value);
    })

    test('Should excecute Apellido onChange', ()=>{
        
        const apellidoInput = screen.getByTestId('apellido')
        userEvent.type(apellidoInput, value)

        expect(apellidoInput.value).toBe(value);
    })

    test('Should excecute Cedula onChange', ()=>{
        
        const cedulaInput = screen.getByTestId('cedula')
        userEvent.type(cedulaInput, "10")

        expect(cedulaInput.type).toBe('number');
        expect(cedulaInput.value).toBe('10');
    })

    test('Should excecute Telefono onChange', ()=>{
        
        const cedulaInput = screen.getByTestId('telefono')
        userEvent.type(cedulaInput, "10")

        expect(cedulaInput.type).toBe('tel');
        expect(cedulaInput.value).toBe('10');
    })


    test('Should excecute Direccion onChange', ()=>{

        const direccionInput = screen.getByTestId('direccion')
        userEvent.type(direccionInput, value)

        expect(direccionInput.value).toBe(value);
    })
    
    test('Should excecute Email onChange', ()=>{

        const emailInput = screen.getByTestId('email')
        userEvent.type(emailInput, value)

        expect(emailInput.value).toBe(value);
    })

    test('Should excecute Password onChange', ()=>{

        const passwordInput = screen.getByTestId('password')
        userEvent.type(passwordInput, value)

        expect(passwordInput.value).toBe(value);
    })

    test('Should excecute Form Submit', ()=>{

        const formSubmit = screen.getByTestId('join-btn-registro')

        expect(formSubmit.type).toBe("submit");
    })
    
});