import React from 'react';
import Header from './Header';
import Contents from './Contents';

const str = 'Hello World';
function App() {
    return (
        <>
            <div id='App'>
                <Header/>
                <Contents/>

            </div>
        </>
    );
}

export {App};

/*
Single Root 란 : 컴포넌트 리턴ㄴ할 때는 1개만 리턴해야 된다는 것! 
<></> 를 써서라도 꼭 한개만 리턴!
*/
