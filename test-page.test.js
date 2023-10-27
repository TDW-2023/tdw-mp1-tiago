import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import Testepage from './pages/test-page.js'

test('Página de teste', async () => {
    render(<Testepage></Testepage>);

    expect(screen.getByText('Página de teste')).toBeInTheDocument();
})