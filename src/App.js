import logo from './logo.svg';
import './App.css';
import CharacterCount from "./components/CharacterCount";
import TextInput from "./components/TextInput";
import {atom, selector} from "recoil";

export const textState = atom({
  key: 'textState',
  default: '',
})
export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  }
})

function App() {
  return (
      <div>
        <TextInput/>
        <CharacterCount/>
      </div>

  );
}

export default App;
