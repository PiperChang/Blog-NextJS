import {useTheme} from 'next-themes'
import {CiDark, CiLight} from "react-icons/ci"

const ThemeToggleButton = () => {
  const {theme, setTheme} = useTheme()

  return (
    <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:text-yellow-500 dark:hover:text-orange-500 text-base mt-4 md:mt-0" onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
      { theme === 'dark' ? <CiLight strokeWidth={1}/> : <CiDark strokeWidth={1}/>}
    </button>
  ) 
}

export default ThemeToggleButton