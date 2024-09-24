let cars = [];

function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  const result = [];

  for (let i=0; i<cars.length; i++) {
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }

  return result;
}
