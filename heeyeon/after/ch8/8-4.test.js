import { listRecentPhotos, renderPerson } from './8-4';

describe("8-4.js", () => {
  const photos = [
    {
      title: 'title',
      location: 'anayang',
      date: new Date(),
    },
    {
      title: 'title',
      location: 'anayang',
      date: new Date(),
    }
  ];

  const person = {
    name: "heeyeon",
    photo: photos[0],
  };

  it("renderPerson passed", () => {
    const result = [
      '<p>heeyeon</p>',
      '<p>title: title</p>', 
      '<p>location: anayang</p>', 
      '<p>date: Mon Sep 12 2022</p>', 
    ].join('\n');

    expect(renderPerson(person)).toBe(result);
  });

  it("listRecentPhotos passed", () => {
    const result = [
      '<div>',
      '<p>title: title</p>', 
      '<p>location: anayang</p>', 
      '<p>date: Mon Sep 12 2022</p>', 
      '</div>',
      '<div>',
      '<p>title: title</p>', 
      '<p>location: anayang</p>', 
      '<p>date: Mon Sep 12 2022</p>', 
      '</div>'
  ].join('\n');

    expect(listRecentPhotos(photos)).toBe();
  })
});

