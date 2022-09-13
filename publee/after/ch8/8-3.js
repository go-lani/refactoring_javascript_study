export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(photoDiv(person.photo));
  return result.join('\n');
}

export function photoDiv(aPhoto) {
  return ['<div>', emitPhotoData(aPhoto), '</div>'].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>title: ${aPhoto.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}
