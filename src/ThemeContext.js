import { createContext } from "react";

// const [theme, setTheme] = useState('darkblue');

const ThemeContext = createContext("pink", () => {}); // the app would work without these args, but they need to be here for typescript

export default ThemeContext;
