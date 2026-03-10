export default function handleRedirect() {
  const botUsername = import.meta.env.VITE_BOT_USERNAME
  const startParam = import.meta.env.VITE_START_PARAM
  const url = startParam
    ? `https://t.me/${botUsername}?start=${startParam}`
    : `https://t.me/${botUsername}`
  window.location.href = url
}
