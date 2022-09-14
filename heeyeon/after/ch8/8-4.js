export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>\n`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  result.push(`<p>location: ${person.photo.location}</p>\n`);

  return result.join('\n');
}

export function listRecentPhotos(photos) {
  const result = [];

  photos
    .filter((photo) => photo.date > recentDateCutoff())
    .forEach((photo) => {
      result.push('<div>\n');
      result.push(emitPhotoData(photo));
      result.push((`<p>위치: ${photo.location}</p>\n`));
      result.push('</div>\n');
    });
  return result.join('\n');
}

export function emitPhotoData(photo) {
  const result = [];

  result.push((`<p>title: ${photo.title}</p>\n`));
  result.push(`<p>date: ${photo.date.toDateString()}</p>\n`);

  return result.join('\n');
}

export function renderPhoto(photo) {
  const result = [];

  result.push('');

  return result.join('\n');
}

export function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
