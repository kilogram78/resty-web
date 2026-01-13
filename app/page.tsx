import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-16 px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to <span className="text-indigo-600">Resty</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-600">
            Your trusted platform for fast, reliable lodge and guest house bookings
          </p>
          
          {user ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-white font-medium transition-colors hover:bg-indigo-700"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/search"
                className="flex h-12 items-center justify-center rounded-lg border-2 border-indigo-600 px-8 text-indigo-600 font-medium transition-colors hover:bg-indigo-50"
              >
                Search Lodges
              </Link>
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-white font-medium transition-colors hover:bg-indigo-700"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="flex h-12 items-center justify-center rounded-lg border-2 border-indigo-600 px-8 text-indigo-600 font-medium transition-colors hover:bg-indigo-50"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Booking</h3>
            <p className="text-gray-600">
              Book your accommodation in minutes, not hours
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Availability</h3>
            <p className="text-gray-600">
              See available rooms instantly, no more calling around
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
            <p className="text-gray-600">
              Get confirmed bookings immediately after payment
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
