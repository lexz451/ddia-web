'use client';

import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ClientPortal({ children }: { children: React.ReactNode }) {
  const ref = useRef<Element | null>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.body
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}