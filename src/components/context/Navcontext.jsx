import { createContext, useState } from 'react'

export const Navcontext = createContext()

const Navprovider = ({children}) => {

    const [nav, setnav] = useState(false)

  return (
    <Navcontext.Provider value={{nav,setnav}}>
        {children}
    </Navcontext.Provider>
  )
}

export default Navprovider