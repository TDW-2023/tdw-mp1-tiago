import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Teste from './pages/test-page.js'

test('Boa tarde.', async () => {
    render(<Teste></Teste>);

    expect(screen.getByText('Página de teste')).toBeInTheDocument();
})