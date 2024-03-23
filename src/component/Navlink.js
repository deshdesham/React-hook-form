import React from 'react'

const Navlink = () => {
    const Link=[
        {
            name:"Home",
            to:"/"

        },
        {
            name:"about",
            to:"/about"
        }
    ]
  return (
    <div>
        {
            Link.map((item)=>(
                <Navlink to={item.to} key={item} >{item.name}</Navlink>
            ))
        }
    </div>
  )
}

export default Navlink;