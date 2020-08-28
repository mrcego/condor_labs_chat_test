export default function lockScroll() {
  document.body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.left = '0'
  document.body.style.right = '0'
}
