export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(p) {
  return ['<div>', `<p>title: ${p.title}</p>`, emitPhotoData(p), '</div>'].join(
    '\n'
  );
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}

const person = {
  name: 'Kim',
  photo: {
    title: '제목',
    location: '서울',
    date: new Date()
  }
}

console.log(renderPerson(person));
