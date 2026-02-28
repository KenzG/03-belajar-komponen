import MyProfile from "./myprofile";
import { fetchScientists, createScientist, deleteScientist, updateScientist } from "@/utils/actions";

export default async function MyGallery() {
  const scientists = await fetchScientists();

  return (
    <div className="space-y-12">
      {/* 1. SECTION: REGISTER (Warna Neutral/Zinc agar lebih clean) [cite: 31, 206-213] */}
      <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-zinc-500 text-center">Register Data</h3>
        <form action={createScientist} className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input name="name" placeholder="Full Name" className="p-2 rounded-lg border dark:bg-zinc-800 text-sm focus:ring-2 focus:ring-zinc-500 outline-none" required />
          <input name="email" type="email" placeholder="Email Address" className="p-2 rounded-lg border dark:bg-zinc-800 text-sm focus:ring-2 focus:ring-zinc-500 outline-none" required />
          <input name="image_url" placeholder="Image ID" className="p-2 rounded-lg border dark:bg-zinc-800 text-sm focus:ring-2 focus:ring-zinc-500 outline-none" required />
          <button type="submit" className="md:col-span-3 bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-all active:scale-[0.98]">
            Push to Database
          </button>
        </form>
      </section>

      {/* 2. SECTION: DISPLAY (READ) [cite: 37-38] */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Verified Personnel</h3>
          <div className="h-[2px] flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {scientists.map((s: any) => (
            <MyProfile
              key={s.id}
              name={s.name}
              imageId={s.image_url}
              profession="Field Researcher"
              awardsCount={1}
              awardsList="Technical Excellence"
              discovery={`Internal Record: ${s.email}`}
            />
          ))}
        </div>
      </section>

      {/* 3. SECTION: MANAGE (Panel Kontrol dengan SVG Icon) [cite: 31, 37-38, 206-213] */}
      <section className="mt-20 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <details className="group">
          <summary className="list-none cursor-pointer flex items-center justify-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all">
            {/* SVG Icon Settings/Gear 2D yang Clean */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-90 transition-transform duration-300">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-widest">Administrative Tools</span>
          </summary>
          
          <div className="mt-8 grid grid-cols-1 gap-3">
            {scientists.map((s: any) => (
              <div key={s.id} className="flex flex-wrap items-center gap-4 p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                <div className="flex-1">
                  <p className="text-xs font-bold dark:text-zinc-300">{s.name}</p>
                </div>

                {/* UPDATE FORM [cite: 31, 206-213] */}
                <form action={updateScientist} className="flex gap-2 items-center">
                  <input type="hidden" name="id" value={s.id} />
                  <input name="name" defaultValue={s.name} className="text-[10px] p-1.5 rounded border dark:bg-zinc-800 w-28" />
                  <input name="image_url" defaultValue={s.image_url} className="text-[10px] p-1.5 rounded border dark:bg-zinc-800 w-16" />
                  <button type="submit" className="text-[10px] font-bold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-3 py-1.5 rounded hover:opacity-80 transition-opacity">
                    UPDATE
                  </button>
                </form>

                {/* DELETE FORM [cite: 31, 37-38] */}
                <form action={async () => {
                  'use server';
                  await deleteScientist(s.id);
                }}>
                  <button className="text-[10px] font-bold text-zinc-400 hover:text-red-500 transition-colors uppercase px-2">
                    Delete
                  </button>
                </form>
              </div>
            ))}
          </div>
        </details>
      </section>
    </div>
  );
}