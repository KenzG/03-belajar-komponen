export function getImageUrl(person: { name?: string, imageId: string }, size: number) {
  const sizeThumbnail = size < 90 ? 's' : 'b';

  return (
    'https://i.imgur.com/' +
    person.imageId +
    sizeThumbnail +
    '.png'
  );
}