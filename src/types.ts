export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    cuisine: 'Indian',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
    prepTime: '20 mins',
    cookTime: '40 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '800g chicken thighs, cut into chunks',
      '2 cups tomato puree',
      '1 cup heavy cream',
      '2 tbsp butter',
      '2 tbsp garam masala',
      'Salt to taste'
    ],
    instructions: [
      'Marinate chicken with yogurt and spices for 2 hours',
      'Cook marinated chicken in butter until golden',
      'Add tomato puree and simmer for 20 minutes',
      'Stir in cream and cook for 10 more minutes',
      'Garnish with fresh coriander'
    ]
  },
  {
    id: '2',
    name: 'Biryani',
    cuisine: 'Indian',
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg',
    prepTime: '30 mins',
    cookTime: '1 hour',
    servings: 6,
    difficulty: 'Hard',
    ingredients: [
      'Basmati rice',
      'Chicken or lamb',
      'Yogurt',
      'Onions',
      'Biryani spices',
      'Saffron'
    ],
    instructions: [
      'Marinate meat in yogurt and spices',
      'Cook rice partially',
      'Layer meat and rice',
      'Steam until fully cooked',
      'Garnish with fried onions'
    ]
  },
  {
    id: '3',
    name: 'Kung Pao Chicken',
    cuisine: 'Chinese',
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '600g diced chicken',
      '1 cup peanuts',
      '2 bell peppers',
      '4 dried red chilies',
      'Soy sauce',
      'Rice wine'
    ],
    instructions: [
      'Stir-fry chicken until golden brown',
      'Add peanuts and toast lightly',
      'Add vegetables and dried chilies',
      'Pour in sauce mixture and stir well',
      'Cook until sauce thickens'
    ]
  },
  {
    id: '4',
    name: 'Dim Sum',
    cuisine: 'Chinese',
    image: 'https://images.pexels.com/photos/6941673/pexels-photo-6941673.jpeg',
    prepTime: '45 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      'Dumpling wrappers',
      'Ground pork',
      'Shrimp',
      'Chinese chives',
      'Ginger',
      'Sesame oil'
    ],
    instructions: [
      'Mix filling ingredients',
      'Wrap dumplings',
      'Steam for 10-12 minutes',
      'Serve with dipping sauce'
    ]
  },
  {
    id: '5',
    name: 'Pasta Carbonara',
    cuisine: 'Italian',
    image: 'https://images.pexels.com/photos/5949902/pexels-photo-5949902.jpeg',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '400g spaghetti',
      '200g guanciale',
      '4 large eggs',
      '100g Pecorino Romano',
      'Black pepper',
      'Salt'
    ],
    instructions: [
      'Cook pasta in salted water',
      'Fry guanciale until crispy',
      'Mix eggs, cheese, and pepper',
      'Combine hot pasta with egg mixture',
      'Add crispy guanciale and serve'
    ]
  },
  {
    id: '6',
    name: 'Ramen',
    cuisine: 'Japanese',
    image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
    prepTime: '1 hour',
    cookTime: '3 hours',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      'Ramen noodles',
      'Pork belly',
      'Soy sauce',
      'Mirin',
      'Eggs',
      'Nori'
    ],
    instructions: [
      'Prepare broth with bones and vegetables',
      'Cook chashu pork',
      'Boil eggs and marinate',
      'Cook noodles',
      'Assemble with toppings'
    ]
  },
  {
    id: '7',
    name: 'Kimchi Jjigae',
    cuisine: 'Korean',
    image: 'https://images.pexels.com/photos/5339079/pexels-photo-5339079.jpeg',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Kimchi',
      'Pork belly',
      'Tofu',
      'Green onions',
      'Gochugaru',
      'Garlic'
    ],
    instructions: [
      'Sauté pork and kimchi',
      'Add broth and simmer',
      'Add tofu and vegetables',
      'Season to taste',
      'Garnish with green onions'
    ]
  },
  {
    id: '8',
    name: 'Pad Thai',
    cuisine: 'Thai',
    image: 'https://images.pexels.com/photos/12365244/pexels-photo-12365244.jpeg',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 2,
    difficulty: 'Medium',
    ingredients: [
      'Rice noodles',
      'Shrimp',
      'Tofu',
      'Bean sprouts',
      'Tamarind paste',
      'Fish sauce'
    ],
    instructions: [
      'Soak noodles in warm water',
      'Stir-fry shrimp and tofu',
      'Add noodles and sauce',
      'Add eggs and bean sprouts',
      'Garnish with peanuts and lime'
    ]
  },
  {
    id: '9',
    name: 'Belgian Waffles',
    cuisine: 'Belgian',
    image: 'https://images.pexels.com/photos/221074/pexels-photo-221074.jpeg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'All-purpose flour',
      'Yeast',
      'Sugar',
      'Eggs',
      'Butter',
      'Pearl sugar'
    ],
    instructions: [
      'Mix dry ingredients',
      'Add wet ingredients and knead',
      'Let dough rise',
      'Cook in waffle iron',
      'Serve with toppings'
    ]
  },
  {
    id: '10',
    name: 'Poutine',
    cuisine: 'Canadian',
    image: 'https://images.pexels.com/photos/6941021/pexels-photo-6941021.jpeg',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'French fries',
      'Cheese curds',
      'Beef gravy',
      'Oil for frying',
      'Salt',
      'Black pepper'
    ],
    instructions: [
      'Cut and fry potatoes',
      'Prepare gravy',
      'Layer fries and cheese curds',
      'Pour hot gravy over top',
      'Serve immediately'
    ]
  },
  {
    id: '11',
    name: 'Coq au Vin',
    cuisine: 'French',
    image: 'https://images.pexels.com/photos/6941015/pexels-photo-6941015.jpeg',
    prepTime: '30 mins',
    cookTime: '2 hours',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      'Chicken pieces',
      'Red wine',
      'Bacon lardons',
      'Pearl onions',
      'Mushrooms',
      'Fresh herbs'
    ],
    instructions: [
      'Brown chicken pieces',
      'Cook bacon and vegetables',
      'Add wine and simmer',
      'Braise until tender',
      'Reduce sauce and serve'
    ]
  },
  {
    id: '12',
    name: 'Feijoada',
    cuisine: 'Brazilian',
    image: 'https://images.pexels.com/photos/5339073/pexels-photo-5339073.jpeg',
    prepTime: '1 hour',
    cookTime: '3 hours',
    servings: 8,
    difficulty: 'Hard',
    ingredients: [
      'Black beans',
      'Pork cuts',
      'Sausages',
      'Bay leaves',
      'Orange',
      'Farofa'
    ],
    instructions: [
      'Soak beans overnight',
      'Cook beans with meat and seasonings',
      'Simmer until tender',
      'Prepare side dishes',
      'Serve with rice and farofa'
    ]
  },
  {
    id: '13',
    name: 'Palak Paneer',
    cuisine: 'Indian',
    image: 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '500g spinach',
      '200g paneer',
      'Onions',
      'Tomatoes',
      'Ginger-garlic paste',
      'Indian spices'
    ],
    instructions: [
      'Blanch and puree spinach',
      'Saute onions and spices',
      'Add pureed spinach',
      'Cook paneer in the gravy',
      'Serve with naan'
    ]
  },
  {
    id: '14',
    name: 'Masala Dosa',
    cuisine: 'Indian',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    prepTime: '8 hours',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      'Rice',
      'Urad dal',
      'Potatoes',
      'Onions',
      'Mustard seeds',
      'Curry leaves'
    ],
    instructions: [
      'Ferment dosa batter',
      'Prepare potato filling',
      'Spread batter on hot griddle',
      'Add filling and fold',
      'Serve with chutneys'
    ]
  },
  {
    id: '15',
    name: 'Mapo Tofu',
    cuisine: 'Chinese',
    image: 'https://images.pexels.com/photos/6941982/pexels-photo-6941982.jpeg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Soft tofu',
      'Ground pork',
      'Doubanjiang',
      'Sichuan peppercorns',
      'Green onions',
      'Chili oil'
    ],
    instructions: [
      'Cook ground pork',
      'Add spices and sauce',
      'Gently add tofu',
      'Simmer until heated through',
      'Top with green onions'
    ]
  },
  {
    id: '16',
    name: 'Hot Pot',
    cuisine: 'Chinese',
    image: 'https://images.pexels.com/photos/5339068/pexels-photo-5339068.jpeg',
    prepTime: '30 mins',
    cookTime: '2 hours',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      'Various meats',
      'Seafood',
      'Vegetables',
      'Noodles',
      'Tofu',
      'Hot pot broth'
    ],
    instructions: [
      'Prepare broth base',
      'Slice ingredients',
      'Arrange on serving plates',
      'Cook ingredients in broth',
      'Dip in sauce before eating'
    ]
  },
  {
    id: '17',
    name: 'Risotto ai Funghi',
    cuisine: 'Italian',
    image: 'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Arborio rice',
      'Mushrooms',
      'White wine',
      'Parmesan cheese',
      'Onion',
      'Vegetable broth'
    ],
    instructions: [
      'Sauté mushrooms and onions',
      'Toast rice with wine',
      'Add broth gradually',
      'Stir until creamy',
      'Finish with parmesan'
    ]
  },
  {
    id: '18',
    name: 'Osso Buco',
    cuisine: 'Italian',
    image: 'https://images.pexels.com/photos/6941016/pexels-photo-6941016.jpeg',
    prepTime: '20 mins',
    cookTime: '2.5 hours',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      'Veal shanks',
      'White wine',
      'Vegetables',
      'Tomatoes',
      'Gremolata',
      'Broth'
    ],
    instructions: [
      'Brown veal shanks',
      'Sauté vegetables',
      'Add wine and reduce',
      'Braise until tender',
      'Top with gremolata'
    ]
  },
  {
    id: '19',
    name: 'Tempura',
    cuisine: 'Japanese',
    image: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Shrimp',
      'Assorted vegetables',
      'Tempura flour',
      'Ice water',
      'Dipping sauce',
      'Oil for frying'
    ],
    instructions: [
      'Prepare batter',
      'Coat ingredients',
      'Fry until crispy',
      'Drain on paper towels',
      'Serve with dipping sauce'
    ]
  },
  {
    id: '20',
    name: 'Okonomiyaki',
    cuisine: 'Japanese',
    image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 2,
    difficulty: 'Medium',
    ingredients: [
      'Cabbage',
      'Flour',
      'Eggs',
      'Pork belly',
      'Okonomiyaki sauce',
      'Bonito flakes'
    ],
    instructions: [
      'Mix batter ingredients',
      'Cook on griddle',
      'Flip when golden',
      'Top with sauce',
      'Add toppings and serve'
    ]
  }
];