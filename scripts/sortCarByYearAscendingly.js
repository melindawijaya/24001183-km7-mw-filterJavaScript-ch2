function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  console.log(result);

  // Tulis code-mu disini
  // for (let i = 0; i < result.length; i++) {
  //   for (let j = i + 1; j < result.length; j++) {
  //     if (result[i].year > result[j].year) {
  //       const temp = result[i];
  //       result[i] = result[j];
  //       result[j] = temp;
  //     }
  //   }
  // }

  for (let i = 0; i < result.length; i--) {
      for (let j = i + 1; j <=i; j++) {
        if (result[j-1].year > result[j].year) {
          const temp = result[j-1];
          result[j-1] = result[j];
          result[j] = temp;
        }
      }
  }

  // Kembalikan array hasil sorting secara ascending
  return console.log(result);
}
