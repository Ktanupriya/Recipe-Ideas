import React from 'react';
import { X, Clock, Users } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{recipe.name}</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {recipe.cuisine}
            </span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-gray-600" />
              <span>Prep: {recipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-gray-600" />
              <span>Cook: {recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-gray-600" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instructions</h3>
            <ol className="list-decimal list-inside space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}