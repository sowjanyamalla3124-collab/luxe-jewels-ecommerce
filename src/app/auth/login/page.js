'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement auth with API
    console.log('Login', email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-serif text-center mb-6">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-champagne rounded-xl px-4 py-3 focus:outline-none focus:border-gold"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-champagne rounded-xl px-4 py-3 focus:outline-none focus:border-gold"
            required
          />
          <button type="submit" className="w-full bg-gold text-white py-3 rounded-full hover:bg-gold/90">
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <a href="/auth/register" className="text-gold">Register</a>
        </p>
      </div>
    </div>
  )
}
