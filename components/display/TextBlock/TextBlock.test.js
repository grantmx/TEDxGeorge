/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import TextBlock from '../TextBlock';

it("renders textblock", () => {
    render(
        <TextBlock>
            Test text
        </TextBlock>
    )
    expect(screen.getByText("Test text")).toBeInTheDocument();
})