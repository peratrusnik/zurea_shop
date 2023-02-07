import React from 'react'
import axios from 'axios'

export const loginUser = (data) => axios.post('/auth/login', data)


