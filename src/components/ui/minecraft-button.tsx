'use client'

import React from 'react'

interface MinecraftButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

export function MinecraftButton({
  children,
  isActive = false,
  className = '',
  disabled = false,
  ...props
}: MinecraftButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`group
        relative overflow-hidden
        h-10 w-48 sm:w-[400px] sm:h-[48px]
        font-body text-xl
        flex items-center justify-center
        ${className}
      `}
      style={{
        border: '2px solid #000',
        boxShadow: 'inset -2px -4px #0006, inset 2px 2px #FFF7',
        background: "#999 url('https://i48.servimg.com/u/f48/18/06/99/75/bgbtn10.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#DDD',
        textShadow: '2px 2px 0px #3f3f3f',
        imageRendering: 'pixelated',
        cursor: 'pointer'
      }}
      {...props}
    >
      <div 
        className={`absolute inset-0 z-0 pointer-events-none transition-colors ${!disabled && 'group-hover:bg-[rgba(100,100,255,0.45)]'}`} 
      />
      
      <span className={`relative z-10 ${!disabled && 'group-hover:text-[#ffff7c]'}`}>
        {children}
      </span>
      {/* Dark overlay when disabled */}
      {disabled && <div className="absolute inset-0 bg-black/50 pointer-events-none" />}
    </button>
  )
}
