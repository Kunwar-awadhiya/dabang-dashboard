import React from "react";
import { topProductsData } from "../../../data/mockData";

const TopProducts = () => {
  return (
    <>
      <h3 className="text-lg font-bold text-gray-900 mb-6">Top Products</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-500 uppercase border-b">
            <tr>
              <th scope="col" className="py-3 px-2">#</th>
              <th scope="col" className="py-3 px-2">Name</th>
              <th scope="col" className="py-3 px-2">Popularity</th>
              <th scope="col" className="py-3 px-2">Sales</th>
            </tr>
          </thead>
          <tbody>
            {topProductsData.map((product, index) => (
              <tr key={index} className="border-b last:border-0">
                <td className="py-4 px-2 font-semibold text-gray-700">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="py-4 px-2">{product.name}</td>
                <td className="py-4 px-2 w-1/2">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${product.color}`}
                      style={{ width: `${product.popularity}%` }}
                    ></div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-full border"
                    style={{
                      borderColor: product.color.replace("bg-", "border-"),
                      color: product.color.replace("bg-", "text-"),
                    }}
                  >
                    {product.sales}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopProducts;
