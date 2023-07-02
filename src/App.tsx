import { MouseEvent, useState } from "react"
import { faKey } from '@fortawesome/free-solid-svg-icons'
import Input from "./components/general/Input"
import SelectInput from "./components/general/SelectInput";
import Button from "./components/general/Button";
import SearchBar from "./components/general/SearchBar";

function App() {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");
  const [value4, setValue4] = useState<string>("");
  const [value5, setValue5] = useState<string>("");
  const [value6, setValue6] = useState<string>("asc");
  const options = ['Default', 'Latest', 'Oldest', 'Highest Rated', 'Lowest rated'];
  const [value7, setValue7] = useState<string>("");
  const [value8, setValue8] = useState<string>("");

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    console.log('clicked');
  }

  function handleClick2(e: MouseEvent<HTMLButtonElement>) {
    console.log('clicked2');
  }

  return (
    <div
      className='App'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <Input
        className="input"
        icon={faKey}
        label="Normal:"
        type="text"
        value={value}
        setValue={setValue}
      />
      <Input
        className="input_dark"
        icon={faKey}
        label="Dark:"
        type="text"
        value={value2}
        setValue={setValue2}
        dark
      />
      <Input
        className="input_error"
        icon={faKey}
        label="Error:"
        type="text"
        value={value3}
        setValue={setValue3}
        error
      />
      <Input
        className="input_error"
        icon={faKey}
        label="Dark and error:"
        type="text"
        value={value4}
        setValue={setValue4}
        error
        dark
      />
      <Input
        className="input_error"
        icon={faKey}
        label="Numbers:"
        type="number"
        value={value5}
        setValue={setValue5}
        error
        dark
      />
      <SelectInput
        className="aaa"
        label="Sort:"
        multiple={false}
        options={options}
        setValue={setValue6}
        value={value6}
      />
      <Button
        className=""
        onClick={handleClick}
        text="Load more.."
      />
      <Button
        className=""
        onClick={handleClick2}
        text="Sign in"
        icon={faKey}
      />
      <SearchBar
        title={value8}
        setTitle={setValue8}
      />
      <SearchBar
        title={value7}
        setTitle={setValue7}
        dark
      />
    </div>
  )
}

export default App
