import React from 'react';
import { topProductsData } from '../../../data/mockData';

const TopProducts = () => {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-900 mb-6">Top Products</h3>
      <div className="space-y-4">
        {topProductsData.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-sm font-medium text-gray-500">
                0{index + 1}
              </div>
              <div className="text-sm font-medium text-gray-900">
                {product.name}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-2 rounded-full ${product.color}`}
                  style={{ width: `${product.popularity}%` }}
                ></div>
              </div>
              <div className="text-sm font-medium text-gray-600 min-w-[3rem]">
                {product.sales}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopProducts;