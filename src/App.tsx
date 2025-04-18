import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { Recipe, recipes } from './types';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');

  const cuisines = ['All', ...new Set(recipes.map(recipe => recipe.cuisine))];
  const filteredRecipes = selectedCuisine === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.cuisine === selectedCuisine);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <ChefHat size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Recipe Ideas</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {cuisines.map(cuisine => (
            <button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCuisine === cuisine 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              {cuisine}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={setSelectedRecipe}
            />
          ))}
        </div>
      </main>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;