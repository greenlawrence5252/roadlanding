import handleRedirect from '../handlers/handleRedirect'

export function Header() {
  return (
    <header className="header">
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" className="header-logo-link">
        <img src="/images/telegram-svgrepo-com.svg" alt="Telegram" className="header-logo" />
      </a>
      <button className="open-btn" onClick={handleRedirect}>Open</button>
    </header>
  )
}
