import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center py-12 flex-col sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="90"
          width="90"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
        >
          Sign in to your Ping account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
