const CONTACT_EMAIL = import.meta.env.VITE_FORMSUBMIT_EMAIL || 'resistemarik@gmail.com'

export async function submitContactForm(form: HTMLFormElement): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(form),
  })

  const result: unknown = await response.json()
  const succeeded =
    typeof result === 'object' &&
    result !== null &&
    'success' in result &&
    (result.success === true || result.success === 'true')

  if (!response.ok || !succeeded) {
    throw new Error('FormSubmit did not accept the contact form.')
  }
}
