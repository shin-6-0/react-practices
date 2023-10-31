import React from 'react';

const str = 'Hello World';
function App() {
    return (
        /* 주석 작성 가능 */
        <div>
            <h1>01</h1>
            <p>특징1: HTML과의 차이점</p>
            {/*
                1. 속성은 Camel Case를 사용한다. 
            */}
            <input type='text' maxLength='10'/>
            {/*
                2. Element는 꼭 닫는다.    
            */}
            <br/>
            <hr/>
            <img src=''/>
            {/*
                3. JSX Element의 속성 이름은 DOM API와 일치한다. 
                <h4>타이틀</h4>
                document.getElementById('title').className='header';
            */}
            <h4 id={'title'} className='header'>타이틀</h4>
            {'Hello! '}
            {str}
            {'a'=='0'?'yes':'no'}
        </div>
    );
}

export {App};

//String같은 경우 {''} 안에 넣어서 작성하는 것이 좋다. 
//변수는 {} 안에 들어가면 바로 실행된다. if문 같은건 {}안에 쓸 수 없고, 연산식, 답 같은것만 들어간다.

