import React from 'react';

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Categories</h2>
      <ul>
        <li
          className={`cursor-pointer ${selectedCategory === 'All' ? 'font-bold' : ''}`}
          onClick={() => {
            setSelectedCategory('All');
            setSelectedSubCategory('');
          }}
        >
          All
        </li>
        {categories.map((category) => (
          <li key={category.name}>
            <span
              className={`cursor-pointer ${selectedCategory === category.name ? 'font-bold' : ''}`}
              onClick={() => {
                setSelectedCategory(category.name);
                setSelectedSubCategory('');
              }}
            >
              {category.name}
            </span>
            {selectedCategory === category.name && (
              <ul className="ml-4">
                {category.subCategories.map((subCategory) => (
                  <li
                    key={subCategory}
                    className={`cursor-pointer ${selectedSubCategory === subCategory ? 'font-bold' : ''}`}
                    onClick={() => setSelectedSubCategory(subCategory)}
                  >
                    {subCategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
