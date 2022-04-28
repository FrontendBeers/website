import React from 'react'
import {render} from '@testing-library/react'
import {Title} from "./Title";
import {describe, it, expect} from 'vitest'

describe('Title', () => {
    it('renders title correctly', () => {
        const {getByText} = render(<Title title={"test"}/>)
        const title = getByText(/test/i)

        expect(title).toBeInTheDocument()
    })
})
