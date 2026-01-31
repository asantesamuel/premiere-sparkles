# Saloon Portfolio & Appointment Booking Website (Frontend)

This project is a frontend-focused web application built with Next.js for a modern saloon or barbershop.  
It showcases the saloon’s brand, services, and portfolio while allowing customers to book appointments through a third-party appointment booking API.

The application focuses on performance, user experience, and clean UI, while delegating booking logic, availability, and notifications to an external API service.

The project was bootstrapped with create-next-app.

---

## Project Overview

This application serves as the public-facing frontend of a saloon booking platform.  
It does not manage bookings locally, but instead:

- Collects booking details from users
- Validates input on the client side
- Sends booking requests to a third-party appointment booking API
- Displays booking success or failure feedback to users

This architecture ensures scalability, reduced backend complexity, and easy integration with external booking, calendar, and notification services.

---

## Key Features

### Saloon Portfolio and Branding
- Clean, modern landing page
- Services showcase (haircuts, styling, coloring, grooming, makeup, etc.)
- Image gallery for past works
- About section and stylist highlights
- Contact and location information

### Appointment Booking via Third-Party API
- Interactive appointment booking form
- Service selection
- Date and time selection based on API availability
- Secure submission of booking data to an external API
- Real-time booking feedback (success, pending, or error states)

### Frontend Performance and User Experience
- Built with Next.js App Router
- Optimized rendering and routing
- Client-side form validation
- Loading states and error handling
- Accessible and user-friendly UI

### Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Mobile-first layout for easy booking on the go

### Font and Asset Optimization
- Uses next/font to automatically optimize and load Geist
- Optimized images using the Next.js Image component

---

## Tech Stack

- Framework: Next.js (App Router)
- Language: JavaScript or TypeScript
- Styling: CSS Modules or Tailwind CSS
- Forms and Validation: React Hooks and client-side validation
- API Integration: Third-party appointment booking API (REST)
- Fonts: Geist via next/font
- Deployment: Vercel

---

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun

### Installation and Development

Install dependencies:

```bash
npm install
