'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

// 1. READ: Mengambil semua data ilmuwan dari database Neon [cite: 37-38]
export async function fetchScientists() {
  try {
    const data = await sql`SELECT * FROM scientists ORDER BY name ASC`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

// 2. CREATE: Menambah ilmuwan baru ke database [cite: 31, 206-213]
export async function createScientist(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const image_url = formData.get('image_url') as string;
  const id = crypto.randomUUID(); // Membuat ID unik otomatis [cite: 206-210]

  try {
    await sql`
      INSERT INTO scientists (id, name, email, image_url)
      VALUES (${id}, ${name}, ${email}, ${image_url})
      ON CONFLICT (id) DO NOTHING
    `;
  } catch (error) {
    console.error('Database Error:', error);
  }

  // Refresh halaman agar data baru langsung muncul di layar [cite: 266-273]
  revalidatePath('/');
}

// 3. UPDATE: Memperbarui data yang sudah ada berdasarkan ID [cite: 31, 206-213]
export async function updateScientist(formData: FormData) {
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const image_url = formData.get('image_url') as string;

  try {
    await sql`
      UPDATE scientists 
      SET name = ${name}, image_url = ${image_url}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
  }

  revalidatePath('/');
}

// 4. DELETE: Menghapus data ilmuwan berdasarkan ID [cite: 31, 37-38]
export async function deleteScientist(id: string) {
  try {
    await sql`DELETE FROM scientists WHERE id = ${id}`;
  } catch (error) {
    console.error('Database Error:', error);
  }

  revalidatePath('/');
}