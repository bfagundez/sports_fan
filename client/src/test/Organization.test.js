import React from 'react';
import ReactDOM from 'react-dom';
import Organizations from 'containers/Organizations'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Organization />, div);
});

