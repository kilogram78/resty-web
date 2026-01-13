import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome, {profile?.full_name || user.email}!
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> {user.email}</p>
            {profile?.full_name && (
              <p><span className="font-medium">Name:</span> {profile.full_name}</p>
            )}
            {profile?.phone_number && (
              <p><span className="font-medium">Phone:</span> {profile.phone_number}</p>
            )}
            <p><span className="font-medium">Role:</span> {profile?.role || 'customer'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
