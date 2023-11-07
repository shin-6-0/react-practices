import React from 'react';
import './assets/css/App.css';
import KanbanBoard from './Kanbanboard.js';

function App() {
    return (
        <div id={'App'} className={'App'}>
            <KanbanBoard />
        </div>
    );
}

export default App;