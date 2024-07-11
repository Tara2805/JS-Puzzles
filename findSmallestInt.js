// 8 kyu
// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        if (args.length === 0) {
            throw new Error('Array is empty');
          }
          
          let smallest = args[0];

          for (let i = 1; i < args.length; i++) {
            if (args[i] < smallest) {
              smallest = args[i];
            }
          }
          return smallest;
    }
  }
  const finder = new SmallestIntegerFinder();
  console.log(finder.findSmallestInt([34, 15, 88, 2]));