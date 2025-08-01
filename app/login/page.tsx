import LaunchUI from "@/components/logos/launch-ui";

import { LoginForm } from "@/components/login-form"
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="group flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <LaunchUI />
            <p className="group-hover:underline">Renovation Connect</p>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/img/login-img.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.6]"
        />
      </div>
    </div>
  )
}
