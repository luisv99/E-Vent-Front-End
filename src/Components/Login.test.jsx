import React from 'react';
import { render, screen, fireEvents } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login'

import setEmail from './Login'



describe('Login Component', ()=>{
    const onChange = jest.fn();
    const setState = jest.fn();
    //const setEmailMock = jest.spyOn(Login.handleSubmit);
    

    beforeEach(() => {
        render(<Login data-testid = 'loginComponent'></Login>)
    })

    it('Should render withour crashing', ()=> {
        

        //screen.debug();
        const loginComponent = screen.getByTestId('loginForm')

        expect(loginComponent).toBeInTheDocument();
    });

    test('Should excecute Email onChange', ()=>{
        
        const value = "HolaMundo"

        const emailInput = screen.getByTestId('email')
        userEvent.type(emailInput, value)

        expect(emailInput.value).toBe(value);
    })

    test('Should excecute Password onChange', ()=>{
        
        const value = "HolaMundo"

        const passwordInput = screen.getByTestId('password')
        userEvent.type(passwordInput, value)

        expect(passwordInput.value).toBe(value);
    })

    test('Should excecute Form submit', ()=>{
        
        const value = "HolaMundo"

        const formSubmit = screen.getByTestId('join-btn-login')

        expect(formSubmit.type).toBe("submit");
    })
    
});