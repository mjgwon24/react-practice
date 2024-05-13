// { Component }: 클래스 컴포넌트를 생성하기 위해 필요
import React, { Component } from "react";

// 클래스 컴포넌트 정의
class R004_LifecycleEx extends Component {
    // render(): return되는 JSX 코드를 화면에 그려주는 함수
    render() {
        console.log('3. render Call');
        // 화면에 그려줄 JSX 코드 반환
        return (
            <h2>[R004_render()]</h2>
        )
    }
}

export default R004_LifecycleEx;

