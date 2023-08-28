// Code your solution in this file!
function distanceFromHqInBlocks(street) {
   const hq = 42;
   let blocks;
   if (street > hq) {
    blocks = street - hq;
   } else if (street < hq) {
    blocks = hq - street;
   } else {
    blocks = 0;
  }
  return blocks;
 }
  function distanceFromHqInFeet(street) {
    let blocks = distanceFromHqInBlocks(street);
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return ((Math.max(start, destination)-Math.min(start, destination))*264);
  }
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    switch (true) {
        case feetTravelled < 400:
            return 0;
        case feetTravelled <= 2000:
            return ((feetTravelled - 400) * .02);
        case feetTravelled >= 2000 && feetTravelled < 2500 :
            return 25;
        case feetTravelled >= 2500 :
            return 'cannot travel that far'
    }
  }