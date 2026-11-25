// Mehrstufiges Offerte-Formular (4 Schritte). Zustand, Validierung und Versand kommen
// komplett aus useOfferForm (src/lib/useOfferForm.js, Vertrag oben in der Datei); hier
// liegt nur die Darstellung. Feldnamen = verstecktes Formular «offerte» in index.html.
//
// Wird auf der Startseite (#kontakt, Spalte ca. 650 px) und auf /offerte eingebettet und
// füllt die Breite seines Containers. Die Anordnung richtet sich nach der Breite des
// Formulars selbst (Container Queries in OfferForm.css), nicht nach dem Fenster.
//
// Props (alle optional):
//   headingLevel – Ebene der Schrittüberschrift: 'h3' (Standard, Startseite unter h2) | 'h2' (/offerte)
//   className
import { useEffect, useId, useRef } from 'react'
import { useOfferForm } from '../lib/useOfferForm'
import { labels, options, MAX_PHOTOS } from '../lib/offerForm'
import { IconArrowRight, IconCamera, IconCheck, IconClose, IconInfo, IconMail, IconShield } from './Icons'
import './OfferForm.css'

const FIXED_DATE = 'Fixer Termin'

// Visuelle Schrittleiste; der Fortschritt steht als Text in der Überschrift (für Screenreader)
function Stepper({ steps, current }) {
  return (
    <ol className="stepper offer-form__stepper" style={{ '--steps': steps.length }} aria-hidden="true">
      {steps.map((item, index) => (
        <li key={item.key} className={index < current ? 'is-done' : index === current ? 'is-current' : undefined}>
          {item.label}
        </li>
      ))}
    </ol>
  )
}

function Field({ id, label, className = '', children }) {
  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  )
}

// Einfachauswahl als Kacheln (echte Radio-Buttons)
function RadioTiles({ name, items, value, onChange, className }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <label key={item} className="choice">
          <input type="radio" name={name} value={item} checked={value === item} onChange={onChange} />
          <span className="choice__box">{item}</span>
        </label>
      ))}
    </div>
  )
}

export default function OfferForm({ headingLevel = 'h3', className = '' }) {
  const Heading = headingLevel
  const uid = useId()
  const id = (name) => `${uid}${name}`
  const {
    form,
    photos,
    step,
    steps,
    isFirst,
    isLast,
    canAddPhoto,
    error,
    status,
    mailto,
    update,
    onChange,
    toggleService,
    addPhotos,
    removePhoto,
    back,
    onSubmit,
    containerRef,
    fieldsetRef,
    headingRef,
  } = useOfferForm()

  const firstServiceRef = useRef(null)
  const uploadRef = useRef(null)
  const successRef = useRef(null)
  const sending = status === 'sending'
  const current = steps[step]
  const phoneRequired = form.kontaktweg === 'Telefon'
  // Bleibt bis zum nächsten «Weiter» stehen: würde die Meldung beim Antippen einer Kachel
  // verschwinden, rutschten die Kacheln unter dem Finger nach oben.
  const showServiceError = isFirst && Boolean(error)

  // Nach dem Absenden: Fokus auf die Erfolgsmeldung und Formular in Sicht holen.
  // Die Seite wird dabei kürzer; liegt der Anfang unter der fixen Kopfzeile
  // (scroll-padding-top), wird nachgescrollt.
  useEffect(() => {
    if (status !== 'success') return
    successRef.current?.focus({ preventScroll: true })
    const top = containerRef.current?.getBoundingClientRect().top ?? 0
    const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
    if (top < offset) containerRef.current.scrollIntoView({ block: 'start' })
  }, [status, containerRef])

  const handleSubmit = (event) => {
    if (sending) {
      event.preventDefault()
      return
    }
    onSubmit(event)
    // Ohne Leistung meldet der Hook einen Fehler: Fokus auf die erste Kachel,
    // so wie die Browser-Validierung bei den übrigen Pflichtfeldern.
    if (isFirst && form.leistungen.length === 0) firstServiceRef.current?.focus()
  }

  const handleTermin = (event) => {
    onChange(event)
    // Datum gehört nur zu «Fixer Termin»; ausgeblendet nicht mitsenden
    if (event.target.value !== FIXED_DATE && form.datum) update('datum', '')
  }

  const handleRemovePhoto = (index) => {
    removePhoto(index)
    // Der Knopf verschwindet: Fokus auf den Upload, damit er nicht verloren geht
    requestAnimationFrame(() => uploadRef.current?.focus())
  }

  const panelClass = ['form-panel', 'offer-form', className].filter(Boolean).join(' ')

  if (status === 'success') {
    return (
      <div className={`${panelClass} offer-form--success`} ref={containerRef}>
        <Stepper steps={steps} current={steps.length} />
        <div className="form-status offer-form__success">
          <span className="offer-form__success-icon">
            <IconCheck size={22} />
          </span>
          <Heading
            ref={successRef}
            tabIndex={-1}
            className="offer-form__success-title"
            aria-describedby={id('success-text')}
          >
            {labels.successTitle(form.name)}
          </Heading>
          <p id={id('success-text')}>{labels.successText(form.kontaktweg)}</p>
        </div>
        <a href="/" className="link-arrow offer-form__home-link">
          {labels.successLink}
          <IconArrowRight />
        </a>
      </div>
    )
  }

  return (
    <div className={panelClass} ref={containerRef}>
      <form name="offerte" className="offer-form__form" aria-label="Offerte anfragen" onSubmit={handleSubmit}>
        <div className="offer-form__head">
          <Stepper steps={steps} current={step} />
          <Heading ref={headingRef} tabIndex={-1} className="offer-form__title">
            <span className="offer-form__progress">{labels.progress(step + 1, steps.length, current.label)}</span>
            <span className="visually-hidden">: </span>
            <span id={id('heading')}>{current.heading}</span>
          </Heading>
        </div>

        <fieldset ref={fieldsetRef} key={step} className="offer-form__step" aria-labelledby={id('heading')}>
          {step === 0 && (
            <>
              <fieldset
                className="offer-form__group"
                aria-describedby={showServiceError ? id('service-error') : undefined}
              >
                <legend className="form-legend">
                  Leistungen * <span className="offer-form__legend-note">(mehrere möglich)</span>
                </legend>
                {showServiceError && (
                  <p className="field__error offer-form__error" id={id('service-error')} role="alert">
                    <IconInfo size={18} />
                    {error}
                  </p>
                )}
                <div className="choice-grid offer-form__services">
                  {options.leistungen.map((item, index) => (
                    <label key={item} className="choice">
                      <input
                        ref={index === 0 ? firstServiceRef : undefined}
                        type="checkbox"
                        name="leistungen"
                        value={item}
                        checked={form.leistungen.includes(item)}
                        onChange={() => toggleService(item)}
                      />
                      <span className="choice__box">{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="offer-form__group">
                <legend className="form-legend">{labels.kundentyp}</legend>
                <RadioTiles
                  name="kundentyp"
                  items={options.kundentyp}
                  value={form.kundentyp}
                  onChange={onChange}
                  className="offer-form__inline offer-form__inline--fill"
                />
              </fieldset>
            </>
          )}

          {step === 1 && (
            <>
              <div className="form-row form-row--2 offer-form__row">
                <Field id={id('objekt')} label={labels.objekt}>
                  <select id={id('objekt')} className="select" name="objekt" value={form.objekt} onChange={onChange}>
                    {options.objekt.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id={id('groesse')} label={labels.groesse}>
                  <select id={id('groesse')} className="select" name="groesse" value={form.groesse} onChange={onChange}>
                    <option value="">{labels.choose}</option>
                    {options.groesse.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id={id('ort')} label={labels.ort} className="offer-form__field--half">
                <input
                  id={id('ort')}
                  className="input"
                  type="text"
                  name="ort"
                  required
                  autoComplete="postal-code"
                  placeholder={labels.ortPlaceholder}
                  value={form.ort}
                  onChange={onChange}
                />
              </Field>

              <fieldset className="offer-form__group">
                <legend className="form-legend">{labels.decken}</legend>
                <RadioTiles
                  name="decken"
                  items={options.decken}
                  value={form.decken}
                  onChange={onChange}
                  className="offer-form__inline"
                />
              </fieldset>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form-row form-row--2 offer-form__row">
                <Field id={id('termin')} label={labels.termin}>
                  <select id={id('termin')} className="select" name="termin" value={form.termin} onChange={handleTermin}>
                    <option value="">{labels.choose}</option>
                    {options.termin.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>
                {form.termin === FIXED_DATE && (
                  <Field id={id('datum')} label={labels.datum}>
                    <input
                      id={id('datum')}
                      className="input offer-form__date"
                      type="date"
                      name="datum"
                      value={form.datum}
                      onChange={onChange}
                    />
                  </Field>
                )}
              </div>

              <Field id={id('nachricht')} label={labels.nachricht}>
                <textarea
                  id={id('nachricht')}
                  className="textarea"
                  name="nachricht"
                  rows={5}
                  placeholder={labels.nachrichtPlaceholder}
                  value={form.nachricht}
                  onChange={onChange}
                />
              </Field>

              <div className="field offer-form__photos" role="group" aria-labelledby={id('fotos')}>
                <span className="field__label" id={id('fotos')}>
                  {labels.fotos}
                </span>
                {photos.length > 0 && (
                  <ul className="upload-previews offer-form__previews">
                    {photos.map((photo, index) => (
                      <li key={photo.url}>
                        <img src={photo.url} alt={`Foto ${index + 1}`} width="160" height="160" />
                        <button
                          type="button"
                          className="offer-form__photo-remove"
                          aria-label={`Foto ${index + 1} entfernen`}
                          onClick={() => handleRemovePhoto(index)}
                        >
                          <span className="offer-form__photo-remove-icon">
                            <IconClose size={16} strokeWidth={2.25} />
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {canAddPhoto ? (
                  <label className="upload offer-form__upload">
                    <input
                      ref={uploadRef}
                      type="file"
                      accept="image/*"
                      multiple
                      aria-describedby={id('fotos-hint')}
                      onChange={addPhotos}
                    />
                    <IconCamera />
                    <span className="upload__title">{labels.fotoAdd}</span>
                    <span className="offer-form__upload-meta">
                      {photos.length > 0
                        ? `Noch ${MAX_PHOTOS - photos.length} möglich`
                        : 'Bild auswählen oder hierher ziehen'}
                    </span>
                  </label>
                ) : (
                  <p className="offer-form__upload-full">Maximal {MAX_PHOTOS} Fotos erreicht.</p>
                )}
                <p className="field__hint" id={id('fotos-hint')}>
                  {labels.fotoHint}
                </p>
                <p className="visually-hidden" role="status">
                  {photos.length > 0 ? `${photos.length} von ${MAX_PHOTOS} Fotos hinzugefügt` : ''}
                </p>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <Field id={id('name')} label={labels.name}>
                <input
                  id={id('name')}
                  className="input"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                />
              </Field>

              <div className="form-row form-row--2 offer-form__row">
                <Field id={id('email')} label={labels.email}>
                  <input
                    id={id('email')}
                    className="input"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="off"
                    spellCheck={false}
                    value={form.email}
                    onChange={onChange}
                  />
                </Field>
                <Field id={id('telefon')} label={phoneRequired ? `${labels.telefon} *` : labels.telefon}>
                  <input
                    id={id('telefon')}
                    className="input"
                    type="tel"
                    name="telefon"
                    required={phoneRequired}
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.telefon}
                    onChange={onChange}
                  />
                </Field>
              </div>

              <fieldset className="offer-form__group">
                <legend className="form-legend">{labels.kontaktweg}</legend>
                <RadioTiles
                  name="kontaktweg"
                  items={options.kontaktweg}
                  value={form.kontaktweg}
                  onChange={onChange}
                  className="offer-form__inline"
                />
              </fieldset>

              <Field id={id('quelle')} label={labels.quelle}>
                <select id={id('quelle')} className="select" name="quelle" value={form.quelle} onChange={onChange}>
                  <option value="">{labels.choose}</option>
                  {options.quelle.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Honeypot gegen Spam (Netlify «bot-field»): für Menschen unsichtbar */}
              <p className="visually-hidden" aria-hidden="true">
                <label>
                  Dieses Feld bitte leer lassen
                  <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <p className="offer-form__privacy">
                <IconShield size={18} />
                <span>
                  {labels.privacy[0]}
                  <a href="/datenschutz">{labels.privacy[1]}</a>
                  {labels.privacy[2]}
                </span>
              </p>
            </>
          )}
        </fieldset>

        {!isFirst && error && (
          <p className="form-error offer-form__alert" role="alert">
            {error}
          </p>
        )}

        {status === 'error' && (
          <div className="offer-form__alert" role="alert">
            <p className="form-error">{labels.sendError}</p>
            <a href={mailto} className="link-arrow offer-form__mail-link">
              <IconMail />
              {labels.sendErrorLink}
            </a>
          </div>
        )}

        <div className="form-actions offer-form__actions">
          {!isFirst && (
            <button
              type="button"
              className="btn btn--secondary btn--lg offer-form__back"
              aria-disabled={sending || undefined}
              onClick={sending ? undefined : back}
            >
              <IconArrowRight className="offer-form__back-icon" />
              {labels.back}
            </button>
          )}
          <button
            type="submit"
            className="btn btn--primary btn--lg offer-form__next"
            aria-disabled={sending || undefined}
          >
            {sending ? labels.sending : isLast ? labels.submit : labels.next}
            {!sending && <IconArrowRight />}
          </button>
        </div>

        <p className="visually-hidden" role="status">
          {sending ? labels.sending : ''}
        </p>
      </form>
    </div>
  )
}
