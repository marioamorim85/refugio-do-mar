"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MessageCircle, Send, Phone, Check, AlertCircle, LogOut } from "lucide-react"
import { bookingSchema, type BookingFormData } from "@/lib/validations"
import { VacationConfetti, WaveRipple, PortugueseWaveLoader } from "@/components/CoastalEffects"
import { useLanguage } from "@/contexts/LanguageContext"

export default function BookingSection() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [celebrationMessage, setCelebrationMessage] = useState("")
  const [isFormVisible, setIsFormVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    control,
    watch,
    trigger
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkin: "",
      checkout: "",
      guests: "",
      message: ""
    }
  })

  // Watch form values for real-time validation feedback
  const watchedValues = watch()
  
  // Helper to check if field is valid and has value
  const isFieldValid = (fieldName: keyof BookingFormData) => {
    const hasValue = watchedValues[fieldName] && watchedValues[fieldName] !== ""
    const hasError = errors[fieldName]
    const isTouched = touchedFields[fieldName]
    return hasValue && !hasError && isTouched
  }

  // Helper to check if field has error and is touched
  const hasFieldError = (fieldName: keyof BookingFormData) => {
    return errors[fieldName] && touchedFields[fieldName]
  }

  // Auto-trigger validation on field changes
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name) {
        trigger(name as keyof BookingFormData)
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, trigger])

  // Track form visibility for mobile CTA
  useEffect(() => {
    const formElement = document.getElementById('booking-form')
    if (!formElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsFormVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    observer.observe(formElement)
    return () => observer.disconnect()
  }, [])

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar reserva')
      }
      
      console.log("Reserva enviada com sucesso:", result)
      
      setSubmitSuccess(true)
      setShowConfetti(true)
      setCelebrationMessage(t('booking.form.success'))
      reset()
      
      // Confetti celebration
      setTimeout(() => setShowConfetti(false), 3000)
      setTimeout(() => {
        setSubmitSuccess(false)
        setCelebrationMessage("")
      }, 8000)
    } catch (error) {
      console.error("Erro ao enviar reserva:", error)
      setCelebrationMessage(t('booking.form.error') || 'Erro ao enviar reserva. Tente novamente.')
      setSubmitSuccess(false)
      
      // Show error message for 5 seconds
      setTimeout(() => {
        setCelebrationMessage("")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-ocean-50 via-white to-sand-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
{t('booking.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-fix mb-6 font-playfair">
{t('booking.title')} <span style={{color: 'initial', WebkitTextFillColor: 'initial'}}>📅</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
{t('booking.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Send className="w-6 h-6" />
                  {t('booking.form.title')}
                </CardTitle>
                <p className="text-ocean-100 text-sm mt-2">{t('booking.form.subtitle')}</p>
              </CardHeader>
              <CardContent id="booking-form" className="p-6 md:p-10">
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl shadow-lg"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">🏖️</div>
                      <p className="text-green-800 font-bold text-lg mb-2">
                        {celebrationMessage}
                      </p>
                      <p className="text-green-700 text-sm">
                        {t('booking.form.success.note')}
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
{t('booking.form.name')} *
                      </label>
                      <div className="relative">
                        <Input
                          {...register("name", {
                            onBlur: () => trigger("name")
                          })}
                          placeholder={t('booking.form.name.placeholder')}
                          className={`pr-10 transition-all duration-200 ${
                            hasFieldError("name") 
                              ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200" 
                              : isFieldValid("name")
                              ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                              : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                          }`}
                        />
                        {/* Validation Icons */}
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {isFieldValid("name") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <Check className="w-5 h-5 text-green-500" />
                            </motion.div>
                          )}
                          {hasFieldError("name") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <AlertCircle className="w-5 h-5 text-red-500" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      {/* Error Message with Animation */}
                      <AnimatePresence>
                        {hasFieldError("name") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            {errors.name?.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {/* Success Message */}
                      <AnimatePresence>
                        {isFieldValid("name") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-green-600 text-sm mt-1 flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 flex-shrink-0" />
                            {t('booking.validation.name')}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
{t('booking.form.email')} *
                      </label>
                      <div className="relative">
                        <Input
                          {...register("email", {
                            onBlur: () => trigger("email")
                          })}
                          type="email"
                          placeholder={t('booking.form.email.placeholder')}
                          className={`pr-10 transition-all duration-200 ${
                            hasFieldError("email") 
                              ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200" 
                              : isFieldValid("email")
                              ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                              : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {isFieldValid("email") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <Check className="w-5 h-5 text-green-500" />
                            </motion.div>
                          )}
                          {hasFieldError("email") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <AlertCircle className="w-5 h-5 text-red-500" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {hasFieldError("email") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            {errors.email?.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {isFieldValid("email") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-green-600 text-sm mt-1 flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 flex-shrink-0" />
                            {t('booking.validation.email')}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
{t('booking.form.phone')} *
                    </label>
                    <div className="relative">
                      <Input
                        {...register("phone", {
                          onBlur: () => trigger("phone")
                        })}
                        type="tel"
                        placeholder={t('booking.form.phone.placeholder')}
                        className={`pr-10 transition-all duration-200 ${
                          hasFieldError("phone") 
                            ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200" 
                            : isFieldValid("phone")
                            ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                            : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isFieldValid("phone") && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-green-500" />
                          </motion.div>
                        )}
                        {hasFieldError("phone") && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                          >
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {hasFieldError("phone") && (
                        <motion.p
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.phone?.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isFieldValid("phone") && (
                        <motion.p
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-green-600 text-sm mt-1 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 flex-shrink-0" />
                          {t('booking.validation.phone')}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
{t('booking.form.checkin')} *
                      </label>
                      <div className="relative">
                        <Input
                          {...register("checkin", {
                            onChange: () => {
                              trigger("checkin")
                              // Also trigger checkout validation when checkin changes
                              if (watchedValues.checkout) {
                                trigger("checkout")
                              }
                            }
                          })}
                          type="date"
                          min={today}
                          className={`pr-10 transition-all duration-200 ${
                            hasFieldError("checkin") 
                              ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200" 
                              : isFieldValid("checkin")
                              ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                              : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {isFieldValid("checkin") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <Check className="w-5 h-5 text-green-500" />
                            </motion.div>
                          )}
                          {hasFieldError("checkin") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <AlertCircle className="w-5 h-5 text-red-500" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {hasFieldError("checkin") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            {errors.checkin?.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {isFieldValid("checkin") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-green-600 text-sm mt-1 flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 flex-shrink-0" />
                            {t('booking.validation.date')}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
{t('booking.form.checkout')} *
                      </label>
                      <div className="relative">
                        <Input
                          {...register("checkout", {
                            onChange: () => trigger("checkout")
                          })}
                          type="date"
                          min={watchedValues.checkin || today}
                          className={`pr-10 transition-all duration-200 ${
                            hasFieldError("checkout") 
                              ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200" 
                              : isFieldValid("checkout")
                              ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                              : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {isFieldValid("checkout") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <Check className="w-5 h-5 text-green-500" />
                            </motion.div>
                          )}
                          {hasFieldError("checkout") && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", duration: 0.3 }}
                            >
                              <AlertCircle className="w-5 h-5 text-red-500" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <AnimatePresence>
                        {hasFieldError("checkout") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            {errors.checkout?.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <AnimatePresence>
                        {isFieldValid("checkout") && (
                          <motion.p
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-green-600 text-sm mt-1 flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 flex-shrink-0" />
                            {t('booking.validation.date')}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
{t('booking.form.guests')} *
                    </label>
                    <div className="relative">
                      <select
                        {...register("guests", {
                          onChange: () => trigger("guests")
                        })}
                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
                          hasFieldError("guests") 
                            ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-200" 
                            : isFieldValid("guests")
                            ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                            : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                      >
                        <option value="">{t('booking.form.guests.select')}</option>
                        <option value="1">{t('booking.form.guests.1')}</option>
                        <option value="2">{t('booking.form.guests.2')}</option>
                        <option value="3">{t('booking.form.guests.3')}</option>
                        <option value="4">{t('booking.form.guests.4')}</option>
                      </select>
                      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        {isFieldValid("guests") && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-green-500" />
                          </motion.div>
                        )}
                        {hasFieldError("guests") && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                          >
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {hasFieldError("guests") && (
                        <motion.p
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-red-500 text-sm mt-1 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.guests?.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isFieldValid("guests") && (
                        <motion.p
                          initial={{ opacity: 0, y: -10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: -10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-green-600 text-sm mt-1 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 flex-shrink-0" />
                          {t('booking.validation.guests')}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-1" />
{t('booking.form.message')}
                      <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
{t('booking.form.message.hint')}
                      </span>
                    </label>
                    <div className="relative">
                      <Textarea
                        {...register("message")}
                        placeholder={t('booking.form.message.placeholder')}
                        rows={4}
                        className={`pr-10 transition-all duration-200 ${
                          watchedValues.message && watchedValues.message.length > 10
                            ? "border-green-500 bg-green-50 focus:border-green-500 focus:ring-green-200"
                            : "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-200"
                        }`}
                      />
                      {watchedValues.message && watchedValues.message.length > 10 && (
                        <div className="absolute top-3 right-3">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-green-500" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-500">
                        {watchedValues.message?.length || 0}/500 caracteres
                      </span>
                      {watchedValues.message && watchedValues.message.length > 10 && (
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-xs text-green-600 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" />
{t('booking.form.message.thanks')}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  <WaveRipple className="w-full rounded-xl">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-ocean-600 to-ocean-700 hover:from-ocean-700 hover:to-ocean-800 text-white py-4 md:py-6 text-lg md:text-xl font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 coastal-cursor"
                      disabled={isSubmitting}
                    >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
{t('booking.form.submitting')}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
{t('booking.form.submit')}
                      </div>
                    )}
                    </Button>
                  </WaveRipple>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg py-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="w-5 h-5" />
{t('booking.contact.title')}
                </CardTitle>
                <p className="text-green-100 text-xs mt-1">{t('booking.contact.subtitle')}</p>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded-r-lg mb-4">
                  <p className="text-green-800 font-medium text-sm">
{t('booking.contact.response')}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <a
                    href="https://wa.me/41765830782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
                      <Phone className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-green-800 text-sm">WhatsApp</div>
                      <div className="text-green-700 text-xs">+41 76 583 0782</div>
                    </div>
                  </a>

                  <a
                    href="mailto:refugionomar2025@gmail.com"
                    className="flex items-center gap-3 p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                      <Send className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-blue-800 text-sm">Email</div>
                      <div className="text-blue-600 text-xs">refugionomar2025@gmail.com</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden relative group hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500">
              {/* Coastal Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-sky-50/40 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="bg-gradient-to-r from-blue-500 via-sky-400 to-teal-300 text-white rounded-t-lg relative overflow-hidden py-4">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
                <CardTitle className="flex items-center gap-2 text-lg font-bold relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                  </motion.div>
{t('booking.info.title')}
                </CardTitle>
                <p className="text-blue-100 text-xs mt-1 relative z-10">{t('booking.info.subtitle')}</p>
              </CardHeader>
              <CardContent className="p-4 space-y-4 relative z-10">
                {/* Check-in */}
                <motion.div 
                  className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🏠
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-sm">{t('booking.info.checkin')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-sm">{t('booking.info.checkin.time')}</span>
                  </div>
                </motion.div>

                {/* Check-out */}
                <motion.div 
                  className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <motion.div
                        animate={{ 
                          rotate: [0, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <LogOut className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-sm">{t('booking.info.checkout')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-sm">{t('booking.info.checkout.time')}</span>
                  </div>
                </motion.div>

                {/* Capacidade */}
                <motion.div 
                  className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 hover:bg-white/80 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-sm">{t('booking.info.capacity')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-sm">{t('booking.info.capacity.guests')}</span>
                  </div>
                </motion.div>

                {/* Cancelamento */}
                <motion.div 
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 backdrop-blur-sm rounded-xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 group/item"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360] 
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                      >
                        ✅
                      </motion.div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-sm">{t('booking.info.cancellation')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-green-700 text-sm">{t('booking.info.cancellation.policy')}</span>
                  </div>
                </motion.div>

                {/* Premium Badge */}
                <motion.div 
                  className="mt-6 p-4 bg-gradient-to-r from-blue-50 via-sky-50 to-teal-50 rounded-xl border border-blue-200 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-center gap-2 text-blue-700 font-semibold">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🌊
                    </motion.div>
                    <span>{t('booking.info.premium')}</span>
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      ⭐
                    </motion.div>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">{t('booking.info.license')}</p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <VacationConfetti trigger={showConfetti} />
      <PortugueseWaveLoader isVisible={isSubmitting} />
    </section>
  )
}