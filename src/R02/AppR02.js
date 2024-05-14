import R020_PropsObjVal from './R020_PropsObjVal';
import R021_PropsRequired from './R021_PropsRequired';
import R024_ReactState from './R024_ReactState';
import R025_SetState from './R025_SetState';

export default function AppR02() {
    return (
        <div>
            <h1>AppR02</h1>
            <R020_PropsObjVal props_obj={{name : '홍길동', age : 20}} />
            <R021_PropsRequired props1={1} props2={2} />
            <R024_ReactState propsString = 'props 문자열'/>
            <R025_SetState />
        </div>
    )
}

