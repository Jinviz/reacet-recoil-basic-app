import {React} from 'react';
import {charCountState} from "../App";
import {useRecoilValue} from "recoil";

const CharacterCount = () => {
    const count = useRecoilValue(charCountState);

    return <div>Character Count {count}</div>;
}
export default CharacterCount;