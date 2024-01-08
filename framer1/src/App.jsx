
import './App.css'
import {motion} from 'framer-motion'
function App() {
  

  return (
    <>
    <motion.h1 
    initial={{x:-1000}}
    animate={{x:[0,900,0]}}  //    animate={{x:[0, 900,0]}}  in this the text starting from   left and returns back from the right  right
      transition={{
      duration:"2",
      delay:"1"
    }}   // text moves from left to right with delay of  1 sec
   
   
   
   >
      hello world
    </motion.h1>
    <motion.h1 
    initial={{x:-100}}
    animate={{x:0}}
    transition={{
      duration:"1",
      delay:"1"
    }}
    whileHover={{scale:"0.6",opacity:"10%"}}  // text font size will be decreased while hover and increased after mouse out
    >
      Bye world
    </motion.h1>
    
    </>
  )
}

export default App
