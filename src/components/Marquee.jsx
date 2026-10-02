import './Marquee.css'

const items = ['Innenmalerei', 'Fassaden', 'Renovation', 'Spachtelarbeiten', 'Farbberatung', 'Gewerbe', 'Zürich']

function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {row.map((item, i) => (
            <span key={i}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee
