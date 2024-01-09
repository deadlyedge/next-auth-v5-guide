import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    to: email,
    from: "no-reply@mail.zick.me",
    subject: "Two factor authentication CODE",
    html: `<p>Your two factor authentication code is: ${token}</p>`,
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    to: email,
    from: "no-reply@mail.zick.me",
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">Reset your password</a> to reset.</p>`,
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    to: email,
    from: "no-reply@mail.zick.me",
    subject: "Verify your email",
    html: `<p>Click <a href="${confirmLink}">Verify your email</a> to confirm.</p>`,
  })
}
