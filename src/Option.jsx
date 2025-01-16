import { useEffect, useState } from 'react'

export default function Option({letter, option, answer, onset, res}) {
    const [ans, setAns] = useState(false);
    const [color, setColor] = useState()

  useEffect(()=>{
      if(!ans){}
      else if(ans === answer){
        setColor('greenyellow');
        const exist = res.includes(answer);
        if(!exist){
          onset(answer)
        }
    } else if(ans !== answer){
        setColor("rgb(250, 85, 85)") 
      }
  },[ans])

  return (
    <span 
    onClick={()=> setAns(option)}
    style={ans ? {backgroundColor: color} : {}}>
        {letter + option}
    </span>
  )
}
