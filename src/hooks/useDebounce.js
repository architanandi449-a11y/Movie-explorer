// hooks/useDebounce.js — Debounce a value by `delay` ms
import { useState, useEffect } from 'react'

/**
 * Returns a debounced version of `value` that only updates
 * after `delay` milliseconds of inactivity.
 *
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in ms (default 400)
 */
export function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer) // Cleanup on re-render
  }, [value, delay])

  return debouncedValue
}
