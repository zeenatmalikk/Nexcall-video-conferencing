import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  console.log(params,'params');
  
  return (
    <div>Meeting Room : #{params.id}</div>
  )
}

export default Meeting