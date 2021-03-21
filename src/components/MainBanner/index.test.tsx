import React from 'react';
import { render } from '@testing-library/react';
import MainBanner from '.';
 
it ('renders a link with correct section id', () => {
    const sectionId = 'abcs';
    const renderResult = render(<MainBanner sectionId={sectionId}/>)

    expect(renderResult.getByRole('link')).toHaveAttribute('href', `#${sectionId}`);
});
