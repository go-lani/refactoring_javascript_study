//? 컬렉션 파이프라인이 무엇인가?
//? https://martinfowler.com/articles/collection-pipeline/

export function acquireData(input) {
  let result;
  const lines = input.split('\n');
  result = lines
    .filter(line => line.trim() !== '')
    .filter(line => line.split(',')[1].trim() === 'India')
    .map(line => {
      const fields = line.split(', ');
      return { city: fields[0], phone: fields[2] };
    });
  return result;
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
// const result = acquireData(input);
// console.log(result);
