import React from 'react';
import {render, screen}  from '@testing-library/react';
import api from "./api";
import App from './App';


jest.mock('./api')

describe('Requisições pra API', () => {
    it('Exibir lista de transações atráves da API', async ()=> {
        api.listaTransacoes.mockResolvedValue([
           {
            "valor": "10",
            "transacao": "saque",
            "data": "03/08/2022",
            "id": 1

           },
           {
            "transacao": "deposito",
            "valor": "20",
            "data": "03/09/2022",
            "id": 2
           } 
        ]);
          render(<App/>);

         expect(await screen.findByText('saque')).toBeInTheDocument();

          expect(screen.getByTestId('transacoes').children.length).toBe(2)
    });
})