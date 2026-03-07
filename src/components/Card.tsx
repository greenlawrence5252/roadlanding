import handleRedirect from '../handlers/handleRedirect'

export function Card() {
  return (
    <div className="card-wrap">
      <div className="card">
        <img src="/images/road.jpg" alt="Road 24" className="card-avatar" />
        <span className="card-title">Road 24</span>
        <span className="card-subscribers">1,382,938 obunachi</span>
        <span className="card-desc">Jarimalar Tekshirish</span>
        <button className="open-btn" onClick={handleRedirect}>Qo'shiling</button>
      </div>
    </div>
  )
}
