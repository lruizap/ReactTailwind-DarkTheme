import { useEffect, useState } from "react"

function App() {

  // Aplicando un estado
  // Si el tema por defecto de nuestro sistema es dark, devuelve dark
  const [theme, setTheme] = useState(() => {
    // Esta propiedad nos permite comprobar si existe la propiedad "prefers-color-scheme"
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  // Si el tema es oscuro, añade clase
  // Si no, solo lo quita
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  // Si el tema anterior es x, lo cambia
  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
        onClick={handleChangeTheme}
      >
        Change Theme
      </button>
    </div>
  )
}

export default App