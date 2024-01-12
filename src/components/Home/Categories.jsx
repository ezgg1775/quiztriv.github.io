import { useState } from 'react';
import categories from '@/assets/categories.json';
import Image from 'next/image';

export default function Categories({ selectedCategoryColor }) {
	const [selectedCategory, setSelectedCategory] = useState(null);
  
	const handleClick = (category) => {
	  setSelectedCategory(category);
	};
  
	const closeDescription = () => {
	  setSelectedCategory(null);
	};
  
	return (
	  <section className='max-w-6xl bg-white px-8 pb-6 flex flex-col justify-center text-slate-900'>
		<h2 className='text-2xl mb-4 font-medium mt-4 lg:mt-0'>Categories</h2>
		<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-2 gap-3 md:gap-5'>
		  {categories.map((category) => (
			<li
			  key={category.id}
			  title={category.name}
			  className={`rounded outline-2 outline outline-offset-2 outline-slate-800 hover:outline-offset-4 outline-[${category.color}] hover:scale-[1.03] transition-transform max-w-xs p-5 flex flex-col gap-1 items-center justify-center shadow-sm cursor-pointer`}
			  style={{ backgroundColor: category.color, outlineColor: category.color }}
			  onClick={() => handleClick(category)}
			>
			  <Image className='drop-shadow-lg' src={`/categories-icons/${category.name.toLowerCase()}.svg`} alt='' width={30} height={30} />
			  <h3 className='text-lg mt-1 text-center text-white drop-shadow-md'>{category.name}</h3>
			</li>
		  ))}
		</ul>
		{selectedCategory && (
		  <div className='modal-overlay fixed inset-0' style={{ backgroundColor: selectedCategory.color }}></div>
		)}
  
		{selectedCategory && (
		  <div className='modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
			<div className='modal-content p-8 rounded-md shadow-md' style={{ backgroundColor: selectedCategory.color, borderColor: selectedCategoryColor }}>
			  <button
				onClick={closeDescription}
				className='exit-button absolute top-2 right-2 text-lg cursor-pointer'
				style={{ color: 'black' }}
			  >
				✕
			  </button>
			  <h2 className='text-2xl font-bold mb-4 text-black'>{selectedCategory.name}</h2>
			  <p className='mb-4 text-black'>{selectedCategory.description}</p>
			</div>
		  </div>
		)}
	  </section>
	);
  }