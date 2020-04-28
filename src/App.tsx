import React from 'react';
import Router from "./Components/Router";
import GlobalStyles from "./Components/GlbalStyles";
import { TodoContextProvider } from './Contexts/TodoContext';

function App() {

    return (
        <TodoContextProvider>
            <Router />
            <GlobalStyles />
        </TodoContextProvider>
    );
}

export default App;
