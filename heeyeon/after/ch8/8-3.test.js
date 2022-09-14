import { photoDiv, renderPerson } from './8-3';


describe("8-3.js", () => {
  const person = {
    name: "heeyeon",
    photo: {
      title: 'title',
      location: 'anayang',
      date: new Date(),
    },
  }

  const photo = {
    title: 'title',
    location: 'anayang',
    date: new Date(),
  };

  it("photoDiv passed", () => {
    const result = [
      '<div>',
      '<p>title: title</p>', 
      '<p>location: anayang</p>', 
      '<p>date: Mon Sep 12 2022</p>', 
      '</div>'
  ].join('\n');

    expect(photoDiv(photo)).toBe(result);
  })

  it("renderPerson passed", () => {
    const result = [
      '<p>heeyeon</p>',
      '<p>title: title</p>', 
      '<p>location: anayang</p>', 
      '<p>date: Mon Sep 12 2022</p>', 
    ].join('\n');

    expect(renderPerson(person)).toBe(result);
  })
});

