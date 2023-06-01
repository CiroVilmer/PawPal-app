import React from 'react';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  
  export function AuthenticationTitle(): JSX.Element {
    return (
        <div className="container mx-auto max-w-md my-35">
    
        
  
        <div className="border rounded-md shadow-md p-6 mt-6">
          <div className="flex justify-center font-bold text-xl mb-6 ">
            <h1>hola</h1>
            </div> 
          
          
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
            placeholder="Password"
            required
          />
          <div className="flex justify-between items-center text-xs mb-8">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox accent-orange-500  mr-1.5" />
             Recuerdame
            </label>
            <button className="text-orange-500">
              Olvidaste tu contraseña?
            </button>
          </div>

          <div>
          {/* <button className="w-full bg-orange-500 text-white rounded-xl py-2"
           onClick={() => signIn()}>Login </button>
          BOTON A SING IN */}
          </div>

          <button className="w-full bg-orange-500 text-white rounded-xl py-2">
            Sign in
          </button>
          <p className="text-center text-gray-500 text-sm mb-5 py-2">
          Do not have an account yet?{' '}
          <button className="text-sm text-orange-500">
            Create account
          </button>
        </p>
        </div>
      </div>
    );
  }