import React from 'react'

export default function OpenAI() {
  return (
    <div id='openai_wrapper'>
      <input type="text" name="" id="" placeholder='test'/>
      <button>create me a recipe</button>
      {/* 
        Jede Zutat soll einzeln eingegeben werden. Diese werden dann in einem Div aufgeführt
        und können über ein kleines 'x' wieder entfernt werden.
        Diese "items" werden in ein array verpackt, welches an backend kommt.
        der inhalt des arrays kommt dann in die nachricht an die api
        api im backend integriert

        wird eingabe valedierung benötigt?
      */}
    </div>
  )
}
