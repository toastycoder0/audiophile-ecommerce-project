export const $ = <T>(selector: string) => document.querySelector(selector) as T

export const $$ = <T>(selector: string) => {
  const elements = document.querySelectorAll(selector)
  return Array.from(elements) as T[]
}
