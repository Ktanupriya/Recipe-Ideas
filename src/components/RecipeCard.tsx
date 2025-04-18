import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(recipe)}
    >
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{recipe.name}</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
            {recipe.cuisine}
          </span>
        </div>
        <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat size={16} />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}