import { Gallery } from "@/components/gallery";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-zinc-50 dark:bg-black">
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">My Gallery</h2>
        <Gallery />
      </section>
    </main>
  );
}