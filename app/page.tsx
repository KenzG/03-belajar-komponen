import { Gallery } from "@/components/gallery";
import Bio from "@/components/bio";
import TodoList from "@/components/todolist";
import Profile from "@/components/avatar";
import MyGallery from "@/components/mygallery"
import MyProfileV2 from "@/components/myprofilev2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-4">Avatar</h2>
        <Profile />
      </section>
      <hr className="w-full max-w-md border-zinc-300 mb-12"/>
      
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-4">Notable Scientists</h2>
        <MyGallery />
      </section>
      <hr className="w-full max-w-md border-zinc-300 mb-12"/>

      <section className="w-full max-w-2xl mb-12 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-center mb-4">Professor</h2>
        <MyProfileV2 />
      </section>
      <hr className="w-full max-w-md border-zinc-300 mb-12"/>
      
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-4">My Gallery</h2>
        <Gallery />
      </section>
       <hr className="w-full max-w-md border-zinc-300 mb-12" />

      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-hold text-center mb-6">My Bio</h2>
        <Bio />
        <br></br>
      </section>
      <hr className="w-full max-w-md border-zinc-300 mb-12"/>

      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">Todo List</h2>
        <TodoList />
      </section>
    </main>
  );
}
