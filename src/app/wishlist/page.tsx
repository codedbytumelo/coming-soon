// app/waitlist/page.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Check, Mail, User, ArrowRight, Clock, Gift, Star, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const benefits = [
    {
      icon: Star,
      title: 'Early Access',
      description: 'Be the first to access our premium components and templates before anyone else.'
    },
    {
      icon: Gift,
      title: 'Exclusive Discounts',
      description: 'Get special launch pricing and discounts only available to waitlist members.'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our private community of early adopters and influence our product roadmap.'
    },
    {
      icon: Zap,
      title: 'Priority Support',
      description: 'Receive priority customer support and direct access to our founding team.'
    },
  ]

  const faqs = [
    {
      question: 'What is the waitlist for?',
      answer: 'Our waitlist is for early access to our upcoming All Access plan, which includes all premium components, templates, and blocks. Waitlist members will get exclusive benefits and early access before the public launch.'
    },
    {
      question: 'When will I get access?',
      answer: 'We\'re currently in the final stages of development. Waitlist members will receive access approximately 2-4 weeks before the public launch. We\'ll keep you updated on our progress via email.'
    },
    {
      question: 'Is there a cost to join the waitlist?',
      answer: 'No, joining the waitlist is completely free and there\'s no obligation to purchase. You\'ll simply be among the first to know when we launch and receive exclusive offers.'
    },
    {
      question: 'What happens after I join?',
      answer: 'After joining, you\'ll receive a confirmation email. We\'ll send periodic updates about our progress, and you\'ll be the first to know when we launch. You can unsubscribe at any time.'
    },
    {
      question: 'Can I refer friends to join the waitlist?',
      answer: 'Absolutely! We encourage you to share the waitlist with friends and colleagues. The more people who join, the better our community will be at launch.'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                <Clock className="w-3 h-3 mr-1" />
                Coming Soon
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join the <span className="text-primary">Devlaunch</span> Waitlist
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be the first to access our premium components, templates, and tools. Get exclusive benefits and early access before anyone else.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#join-waitlist">
                    Join the Waitlist
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#benefits">
                    View Benefits
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="join-waitlist" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Join Our Exclusive Waitlist</h2>
                <p className="text-muted-foreground">
                  Secure your spot and get early access to our premium development resources
                </p>
              </div>
              
              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <CardTitle className="text-green-800">You're on the list!</CardTitle>
                    <CardDescription className="text-green-700">
                      Thank you for joining our waitlist. We've sent a confirmation to your email and will keep you updated on our progress.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild>
                      <Link href="/">
                        Return to Homepage
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Waitlist Registration</CardTitle>
                    <CardDescription>
                      Fill out the form below to join our waitlist. We'll keep you updated on our progress and send you exclusive offers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="John Doe"
                              className="pl-10"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              className="pl-10"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">What are you most excited about? (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us what you're looking forward to or any specific features you'd like to see..."
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By joining, you agree to our privacy policy and consent to receive updates about Devlaunch.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Join Our Waitlist?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get exclusive benefits and be part of our early community
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-2">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Everything you need to know about our waitlist
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Join the Waitlist?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Don't miss out on exclusive access to our premium development resources.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#join-waitlist">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default WaitlistPage