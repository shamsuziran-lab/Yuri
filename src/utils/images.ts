/**
 * Image helper. All images are licensed placeholder photography (Unsplash)
 * used for initial development. Replace `src` values with genuine business
 * photographs before launch.
 */
export const img = (id: string, w = 1200, h?: number) => {
  const size = h ? `w=${w}&h=${h}&fit=crop` : `w=${w}`;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&${size}&q=80`;
};

// Selected placeholder photo IDs (verified reachable).
export const PHOTOS = {
  hero: 'photo-1565557623262-b51c2513a641', // Malaysian noodle/food spread
  rotiJalaPlate: 'photo-1563379091339-03b21ab4a4f8', // pasta plate close-up
  curry: 'photo-1585032226651-759b368d7246', // curry dish
  rice: 'photo-1512058564366-18510be2db19', // rice bowl
  pancake: 'photo-1567620905732-2d1ec7ab7445', // stacked pancakes
  dessert: 'photo-1551024601-bec78aea704b', // dessert plate
  brunch: 'photo-1484723091739-30a097e8f929', // breakfast plate
  toast: 'photo-1509440159596-0249088772ff', // toast/bread
  salad: 'photo-1512621776951-a57141f2eefd', // fresh salad bowl
  meal: 'photo-1546069901-ba9599a7e63c', // healthy bowl
  plate: 'photo-1476224203421-9ac39bcb3327', // plated dish
  foodSpread: 'photo-1414235077428-338989a2e8c0', // restaurant spread
  table: 'photo-1556910103-1c02745aae4d', // dining table
  cooking: 'photo-1556911220-bff31c812dba', // kitchen/cooking
  ingredients: 'photo-1540189549336-e6e99c3679fe', // fresh ingredients
  dessert2: 'photo-1565958011703-44f9829ba187', // dessert
  cake: 'photo-1578985545062-69928b1d9587', // cake/dessert
  drink: 'photo-1541544741938-0af808871cc0', // drink
  fruit: 'photo-1490645935967-10de6ba17061', // fruit/yoghurt bowl
  flatbread: 'photo-1565299624946-b28f40a0ae38', // flatbread/pizza
  bread: 'photo-1504674900247-0877df9cc836', // bread loaves
  meal2: 'photo-1529692236671-f1f6cf9683ba', // meal
  bowl: 'photo-1563805042-7684c019e1cb', // bowl
  kitchen2: 'photo-1551782450-a2132b4ba21d', // kitchen prep
  party: 'photo-1530103862676-de8c9debad1d', // event/celebration
  family: 'photo-1517457373958-b7bdd4587205', // gathering
} as const;
