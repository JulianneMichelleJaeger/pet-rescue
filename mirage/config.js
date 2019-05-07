export default function() {
  this.namespace = '/api';

  let pets = [{
        type: 'pets',
        id: 'cinder',
        attributes: {
          name: 'Cinder',
          breed: 'Black Labrador Retriever',
          city: 'Baltimore',
          age: 'Young',
          gender: 'Male',
          image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44479924/1/?bust=1557017019&width=720',
          description: 'Cinder is a 2-year-old neutered male black lab. Cinder weighs 56 pounds and is up to date on shots. This dog is approved for homes with children 10 and up.'
        }
      }, {
        type: 'pets',
        id: 'nala',
        attributes: {
          name: 'Nala',
          breed: 'Pit Bull Terrier & Beagle Mix',
          city: 'Baltimore',
          age: 'Young',
          gender: 'Female',
          image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44547035/1/?bust=1556256372&width=720',
          description: 'Nala came to the shelter because her family lost their home. She just joined our rescue and we will update the post as we get to know her. She is very sweet and calm and seems to get along with everyone.'
        }
      }, {
        type: 'pets',
        id: 'ally',
        attributes: {
          name: 'Ally',
          breed: 'German Shepherd Dog',
          city: 'Baltimore',
          age: 'Adult',
          gender: 'Female',
          image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44259200/1/?bust=1556203167&width=720',
          description: 'She is absolutely the sweetest affectionate dog, literally just starving for attention that she didn\'t receive the first years of her life.'
        }
      }];
      
      this.get('/pets', function(db, request) {
        if(request.queryParams.breed !== undefined) {
          let filteredPets = pets.filter(function(i) {
            return i.attributes.breed.toLowerCase().indexOf(request.queryParams.breed.toLowerCase()) !== -1;
          });
          return { data: filteredPets };
        } else {
          return { data: pets };
        }
      });

      // Find and return the provided pet from our pet list above
      this.get('/pets/:id', function (db, request) {
        return { data: pets.find((pet) => request.params.id === pet.id) };
      });

}
