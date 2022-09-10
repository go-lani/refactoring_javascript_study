export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(photo) {
  return ['<div>', emitPhotoData(photo), '</div>'].join(
    '\n'
  );
}

function emitPhotoData(photo) {
  const result = [
    `<p>title: ${photo.title}</p>`,
    `<p>location: ${photo.location}</p>`,
    `<p>date: ${photo.date.toDateString()}</p>`
  ];
  return result.join('\n');
}

function renderPhoto(photo) {
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

// console.log(renderPerson(person));
// console.log(photoDiv(person.photo));
