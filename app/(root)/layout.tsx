// This will allow us to do some specific thing to all the pages in the route group
import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children: ReactNode}) => {

  return (
    <main>
        
        {children}
        
        </main>
  )
}

export default RootLayout