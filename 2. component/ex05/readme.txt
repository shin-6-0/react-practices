ex05: Component Lifecycle
01. Class Component
    01) LifecycleI: mount
        1. constructor
        2. getDerivedStateFromProps - 프로퍼티로부터 새 상태를 도출(상태 업데이트시 사용)
        3. render ***
        4. componentDidMount *** - 컴포넌트가 화면에 렌더링 된 후에 호출 (초기 작업시 사용)
    02) LifecycleII: update
        1. getDerivedStateFromProps
        2. shouldComponentUpdate* - 리렌더링 여부를 결정하는 조건 반환 (컴포넌트의 업데이트 제어시 사용)
                                    PureComponent or shouldComponentUpdate와 같이사용. 
        3. render ***
        4. getSnapshotBeforeUpdate - 컴포넌트 업데이트 직전에 호출(업데이트 이후 작업에 활용)
        5. componentDidUpdate ***
    
    03) LifecycleIII unmount
        1. componentWillUnmount() *** - 컴포넌트가 화면에서 제거되기 전에 호출 (리소스 정리, 이벤트리스너 제거 시 사용)

02. Functional Component : Alternative(대체) - useEffect
        1. getDerivedStateFromProps 대체
            getDerivedStateFromProps - 컴포넌트가 새로운 프로퍼티 받았을 때 호출
        2. After Rendering (componentDidUpdate 대체)
        3. componentDidMount, componentWillUnmount 
        4. 변경된 상태에 의존적으로 코드 실행 
====================================================================================

1.  설치
    1)  개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2)  라이브러리
        $ npm i react react-dom prop-types styled-components

2.  설정
    1)  webpack.config.js
    2)  babel.config.json

3.  스트립팅
    "scripts": {
        "debug": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }

4.  테스트 서버 실행
    $ npm run debug src=(01|02|03|04|...)