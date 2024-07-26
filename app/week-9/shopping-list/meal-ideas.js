'use client';

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  
  const fetchMeals = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      console.log('Fetched data:', data);
      return data.meals || [];  
    } 
      catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  useEffect(() => {
    const getMealIdeas = async () => {
      if (ingredient) { const mealIdeas = await fetchMeals(ingredient);
        setMeals(mealIdeas);
      }
    };

     getMealIdeas();
  },
    [ingredient]);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2>Meal Ideas</h2>

      {meals.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: '0' }}>

          {meals.map((meal) => (
            <li key={meal.idMeal} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}  />
              
              <p style={{ margin: '0' }}>{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found.</p>
      )}
    </div>
  );
};

export default MealIdeas;
