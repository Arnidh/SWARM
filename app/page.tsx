import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <LoginForm />
      </div>
    </div>
  )
}

