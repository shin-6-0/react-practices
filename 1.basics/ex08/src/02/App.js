import React from 'react';
/*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.

    오류:
    return(
        <h2>01</h2>
        <p></p>
    )
    이유: 
    1) transpile오류
    return
        React.createElement('h2',null,'01')
        React.createElement('p',null,'특징2: Single Root')
    2) 
    return(
        <div>
            <h2>01</h2>
            <p></p>
        </div>
    )
    retrun(
        React.createElement(React.createElement('h2',null,'01'),React.createElement('p',null,'특징2: Single Root'))
    )

*/
const str = 'Hello World';
function App() {
    return (
        <>
            <div>
                <h1>02</h1>
                <p>특징2: Single Root</p>

            </div>
        </>
    );
}

export {App};

/*
Single Root 란 : 컴포넌트 리턴ㄴ할 때는 1개만 리턴해야 된다는 것! 
<></> 를 써서라도 꼭 한개만 리턴!
*/
