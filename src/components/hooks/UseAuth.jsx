import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import {UseMessage} from './UseMessage';

const UseAuth = () => {
  const correctPass = 201095071
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {showMessage} = UseMessage()
  const login = (password) => {
    setLoading(true)
    if(password == correctPass) {
      showMessage({
        title: "ログインに成功しました",
        status: "success"
      })
      navigate("/todo")
    } else {
      showMessage({
        title: "ログインに失敗しました",
        status: "error"
      })
    }
    setLoading(false)
  }
  return {login, loading}
}

export default UseAuth
