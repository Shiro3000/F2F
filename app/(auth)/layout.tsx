import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              <Image 
                src={'/icons/F2F_login.svg'}
                alt='Auth Image'
                width={1024}
                height={1024}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
      </main>
    );
  }
  