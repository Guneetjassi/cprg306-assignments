'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useUserAuth } from '../_utils/auth-context'; 
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = React.useState([]);
  const [selectedItemName, setSelectedItemName] = React.useState('');

  useEffect(() => {
    if (!user) {
      router.push('/week-8'); 
    }
  }, [user, router]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div style={{ display: 'flex', color: 'white' }}>
      <div style={{ width: '50%', padding: '20px' }}>
        <NewItem addItem={addItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ width: '50%', padding: '20px' }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default ShoppingListPage;
