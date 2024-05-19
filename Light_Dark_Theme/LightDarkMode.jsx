import useLocalStorage from "./useLocalStorage";
import '../Light_Dark_Theme/styles.css';


const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage('theme', "dark");

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    console.log(theme);

  return (
    <div className="lightDarkMode" data-theme={theme}>
      <div className="container">
        <p>Alex's Dark and Light Theme Changer</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
