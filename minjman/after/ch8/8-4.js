export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  result.push(`<p>location: ${person.photo.location}</p>`);
  return result.join('\n');
}

export function listRecentPhotos(photos) {
  const result = [];
  photos
    .filter(photo => photo.date > recentDateCutoff())
    .forEach(photo => {
      result.push('<div>');
      result.push(emitPhotoData(photo));
      result.push(`<p>위치: ${photo.location}</p>`);
      result.push('</div>');
    });
  return result.join('\n');
}

function emitPhotoData(photo) {
  const result = [
    `<p>title: ${photo.title}</p>`,
    `<p>date: ${photo.date.toDateString()}</p>`,
  ];
  return result.join('\n');
}

function renderPhoto(photo) {
  return '';
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}

const photos = [
  {
    title: '제목1',
    location: '서울',
    date: new Date(),
  },
  {
    title: '제목1',
    location: '경기',
    date: new Date().setDate(new Date().getDate() - 8),
  },
];

const person = {
  name: 'Kim',
  photo: photos[0],
};

// console.log(renderPerson(person));
// console.log(listRecentPhotos(photos));
