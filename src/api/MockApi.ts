// src/api/mockApi.ts
import { MetalData } from '../types';

const MOCK_PRICES: Record<string, number> = {
  Gold: 75.43,
  Silver: 0.89,
  Platinum: 31.20,
  Palladium: 33.50,
};

export const fetchMetalData = (metalName: string): Promise<MetalData> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay between 1 to 3 seconds
    const delay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      // 10% chance to fail to demonstrate error handling
      if (Math.random() < 0.1) {
        reject(new Error(`Failed to fetch live data for ${metalName}`));
      } else {
        const basePrice = MOCK_PRICES[metalName];
        const variance = basePrice * 0.02; // 2% fluctuation
        
        resolve({
          id: metalName.toLowerCase(),
          name: metalName,
          karat: metalName === 'Gold' ? '24K' : 'Pure',
          currentPrice: (basePrice + (Math.random() * variance - variance / 2)).toFixed(2),
          previousClose: basePrice.toFixed(2),
          openPrice: (basePrice + (Math.random() * (variance / 2))).toFixed(2),
          timestamp: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        });
      }
    }, delay);
  });
};