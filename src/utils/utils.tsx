export function getImageUrl(person: { name?: string; imageId: any; }, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.png'
  );
}