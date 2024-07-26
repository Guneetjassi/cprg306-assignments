'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from '../_utils/auth-context';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useEffect } from 'react';


const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/week-8');
    } else {
      // Load items from Firestore
      const loadItems = async () => {
        try {
          const fetchedItems = await getItems(user.uid);
          setItems(fetchedItems);
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      };

      loadItems();
    }
  }, [user, router]);

  const addItem = async (item) => {
    try {
      const itemId = await addFirestoreItem(user.uid, item);
      setItems([...items, { id: itemId, ...item }]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
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
