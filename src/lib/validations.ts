import { z } from "zod"

// Phone number regex for Portuguese formats
const phoneRegex = /^(\+351|00351|351)?\s?[29]\d{8}$|^(\+\d{1,3})?\s?\d{9,15}$/

export const bookingSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(50, "Nome muito longo"),
  email: z.string().email("Formato de email inválido").min(1, "Email é obrigatório"),
  phone: z.string().min(1, "Telemóvel é obrigatório").regex(phoneRegex, "Formato de telemóvel inválido (ex: +351912345678)"),
  checkin: z.string().min(1, "Data de check-in é obrigatória"),
  checkout: z.string().min(1, "Data de check-out é obrigatória"),
  guests: z.string().min(1, "Número de hóspedes é obrigatório"),
  message: z.string().optional()
}).refine((data) => {
  const checkinDate = new Date(data.checkin)
  const checkoutDate = new Date(data.checkout)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  return checkinDate >= today
}, {
  message: "Data de check-in deve ser hoje ou no futuro",
  path: ["checkin"]
}).refine((data) => {
  const checkinDate = new Date(data.checkin)
  const checkoutDate = new Date(data.checkout)
  
  return checkoutDate > checkinDate
}, {
  message: "Data de check-out deve ser após check-in",
  path: ["checkout"]
})

export type BookingFormData = z.infer<typeof bookingSchema>