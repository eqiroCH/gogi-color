// Zustand und Ablauf des mehrstufigen Offerte-Formulars. Die Darstellung liegt in
// components/OfferForm.jsx; dieser Hook liefert alles, was sie braucht.
//
// Vertrag für die Darstellung:
// - <form name="offerte" onSubmit={onSubmit} noValidate={false}> umschliesst alles
// - pro Schritt ein <fieldset ref={fieldsetRef} key={step}> mit den Feldern dieses Schritts
//   (Pflichtfelder mit `required`; die Browser-Validierung prüft nur das aktuelle Fieldset)
// - die Schrittüberschrift bekommt ref={headingRef} und tabIndex="-1" (Fokus beim Schrittwechsel)
// - der äussere Container bekommt ref={containerRef} (wird beim Schrittwechsel in Sicht gescrollt)
// - im letzten Schritt ein verstecktes Honeypot-Feld <input name="bot-field" tabIndex="-1" autoComplete="off">
// - Submit-Button: type="submit" (geht weiter bzw. sendet im letzten Schritt), Zurück-Button: onClick={back}
import { useEffect, useRef, useState } from 'react'
import { emptyForm, presets, steps, MAX_PHOTOS, MAX_UPLOAD_BYTES, resizeImage, mailtoLink, submitOffer } from './offerForm'

export function useOfferForm() {
  const [form, setForm] = useState(emptyForm)
  const [photos, setPhotos] = useState([])
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const containerRef = useRef(null)
  const fieldsetRef = useRef(null)
  const headingRef = useRef(null)
  const stepChanged = useRef(false)

  // Vorauswahl über ?leistung=<slug>
  useEffect(() => {
    const preset = presets[new URLSearchParams(window.location.search).get('leistung')]
    if (preset) setForm((prev) => ({ ...prev, ...preset }))
  }, [])

  // Beim Schrittwechsel: Fokus auf die Überschrift, Formular in Sicht holen
  useEffect(() => {
    if (!stepChanged.current) return
    headingRef.current?.focus({ preventScroll: true })
    const top = containerRef.current?.getBoundingClientRect().top ?? 0
    if (top < 0) containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  // Vorschau-URLs der Fotos beim Verlassen freigeben
  const photosRef = useRef(photos)
  useEffect(() => {
    photosRef.current = photos
  }, [photos])
  useEffect(() => () => photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url)), [])

  const update = (name, value) => setForm((prev) => ({ ...prev, [name]: value }))
  const onChange = (event) => update(event.target.name, event.target.value)
  const toggleService = (value) =>
    setForm((prev) => ({
      ...prev,
      leistungen: prev.leistungen.includes(value)
        ? prev.leistungen.filter((s) => s !== value)
        : [...prev.leistungen, value],
    }))

  // onChange eines <input type="file" accept="image/*" multiple>
  const addPhotos = async (event) => {
    const files = [...event.target.files].slice(0, MAX_PHOTOS - photos.length)
    event.target.value = ''
    const resized = await Promise.all(files.map(resizeImage))
    setPhotos((prev) => [...prev, ...resized.map((file) => ({ file, url: URL.createObjectURL(file) }))])
  }

  const removePhoto = (index) => {
    URL.revokeObjectURL(photos[index].url)
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  const validateStep = () => {
    if (step === 0 && form.leistungen.length === 0) {
      setError('Bitte wählen Sie mindestens eine Leistung.')
      return false
    }
    for (const element of fieldsetRef.current?.elements ?? []) {
      if (!element.checkValidity()) {
        element.reportValidity()
        return false
      }
    }
    setError('')
    return true
  }

  const goTo = (next) => {
    stepChanged.current = true
    setStep(next)
  }

  const back = () => {
    setError('')
    goTo(Math.max(0, step - 1))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (!validateStep()) return
    if (step < steps.length - 1) {
      goTo(step + 1)
      return
    }
    if (event.target.elements['bot-field']?.value) {
      setStatus('success')
      return
    }
    if (photos.reduce((sum, photo) => sum + photo.file.size, 0) > MAX_UPLOAD_BYTES) {
      setError('Die Fotos sind zusammen zu gross. Bitte entfernen Sie ein Foto.')
      return
    }
    setStatus('sending')
    try {
      await submitOffer(form, photos)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return {
    form,
    photos,
    step,
    steps,
    isFirst: step === 0,
    isLast: step === steps.length - 1,
    canAddPhoto: photos.length < MAX_PHOTOS,
    error,
    status,
    mailto: mailtoLink(form),
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
  }
}
