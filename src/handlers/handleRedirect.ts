export default function handleRedirect() {
  const botUsername = import.meta.env.VITE_BOT_USERNAME
  window.location.href = `tg://resolve?domain=${botUsername}`
}
