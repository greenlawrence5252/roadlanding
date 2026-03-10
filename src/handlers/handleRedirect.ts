export default function handleRedirect() {
  const botUsername = import.meta.env.VITE_BOT_USERNAME
  const startParam = import.meta.env.VITE_START_PARAM
  const url = startParam
    ? `tg://resolve?domain=${botUsername}&start=${startParam}`
    : `tg://resolve?domain=${botUsername}`
  window.location.href = url
}
