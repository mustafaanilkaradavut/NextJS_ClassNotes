//? App Folder içerisindeki page.js "/" route olan home sayfasıdır.

//__ Next.js'de tüm componenter default olarak server componenttir. Client component kullanmak için "use client" direktifini kullanmamız gerekmektedir.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Hello from Home Page !</h1>
    </main>
  );
}
