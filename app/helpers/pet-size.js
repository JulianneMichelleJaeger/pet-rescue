import { helper } from '@ember/component/helper';

const largeDogBreeds = [
  'Black Labrador Retriever',
  'German Shepherd Dog',
  'Standard Poodle'
];

export function petSize([dogBreed]) {
  if (largeDogBreeds.includes(dogBreed)) {
    return 'Large';
  }
  return 'Medium';
}

export default helper(petSize);
