import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AppContex } from "../contex/AppContex"

const Control = () => {
  const navigate = useNavigate()
  const { user } = useContext(AppContex)

  useEffect(() => {
    if(!user) {
      navigate("/login")
    }
  }, [])

  return user && (
    <div>  
        Hello {user.email} welcome to our admin control pannel
    </div>
  )}

export default Control;
