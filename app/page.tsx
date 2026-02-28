import Profile from "@/components/avatar";
import MyGallery from "@/components/mygallery"
import MyProfileV2 from "@/components/myprofilev2";

// Tambahkan 'async' di sini agar bisa memanggil MyGallery yang sekarang bersifat async
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-zinc-50 dark:bg-black">
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">Avatar</h2>
        <Profile />
      </section>
      
      <hr className="w-full max-w-md border-zinc-300 mb-12"/>
      
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">Notable Scientists</h2>
        {/* Sekarang MyGallery aman dipanggil di sini */}
        <MyGallery />
      </section>
      
      <hr className="w-full max-w-md border-zinc-300 mb-12"/>

      <section className="w-full max-w-2xl mb-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">Professor</h2>
        <MyProfileV2 />
      </section>
    </main>
  );
}