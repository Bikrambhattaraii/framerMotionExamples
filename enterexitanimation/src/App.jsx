import { useState } from 'react'
import './App.css'
import {motion,AnimatePresence} from 'framer-motion'
function App() {
  const [show, setShow] = useState(0)

  return (
    <div
    style={{
      display:'flex',
      flexDirection:"column",
      gap:"10px",
      alignItems:"center"
    }}
    >

      <h1 style={{marginTop:"20px"}}>framer motion enter exit</h1>
      <AnimatePresence>
{show && <motion.div style={{
width:"100px",height:"100px",background:"red"


}}

initial={{opacity:100,x:1000}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-1000}}
transition={{
  duration:"1"
}}
>
  <h1>hello world</h1>

</motion.div> 

}
      </AnimatePresence>
      <button onClick={()=>setShow(!show)} style={{padding:"12px 20px",}}>{show?"remove cube":"Add box"}</button>
    </div>
  )
}

export default App
