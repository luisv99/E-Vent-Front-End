import React from 'react';
import { render, screen, fireEvents } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserProfile from './UserProfile'
import {Route, MemoryRouter, Router} from 'react-router-dom';




describe('Login Component', ()=>{
    
    const value = "HolaMundo"
    const numberValue = 8


    


    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: jest.fn().mockReturnValue({ user_id: 51}),
        }))
        render(<UserProfile></UserProfile>)
    })

    it('Should render withour crashing', ()=> {
        

        //screen.debug();
        const signUpComponent = screen.getByTestId('editProfileForm')

        expect(signUpComponent).toBeInTheDocument();
    });


    
});