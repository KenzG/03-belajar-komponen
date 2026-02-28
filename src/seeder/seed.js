const { db } = require('@vercel/postgres');
const { scientists } = require('./data.js');

async function seedScientists(client) {
  try {
    // Membuat tabel jika belum ada
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS scientists (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        image_url VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "scientists" table`);

    // Memasukkan data
    const insertedScientists = await Promise.all(
      scientists.map(
        (s) => client.sql`
        INSERT INTO scientists (id, name, email, image_url)
        VALUES (${s.id}, ${s.name}, ${s.email}, ${s.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );
    console.log(`Seeded ${insertedScientists.length} scientists`);
  } catch (error) {
    console.error('Error seeding scientists:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedScientists(client);
  await client.end();
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err);
});