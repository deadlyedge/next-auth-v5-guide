import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    to: email,
    from: "onboarding@resend.dev",
    subject: "Verify your email",
    html: `<p>Click <a href="${confirmLink}">Verify your email</a> to confirm.</p>`,
  })
}