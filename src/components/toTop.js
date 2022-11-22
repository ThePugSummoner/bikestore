
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
  
 function ToTop() {
  const routePath = useLocation()

  function onTop() {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    onTop()
  }, [routePath])
  
  return null
}
export default ToTop