// import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Check } from 'lucide-react'

function Final() {
  const products = [
    {
      id: 1,
      name: 'Nike Air Force 1 07 LV8',
      href: '#',
      price: '₹47,199',
      originalPrice: '₹48,900',
      discount: '5% Off',
      color: 'Orange',
      size: '8 UK',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    },
    {
      id: 2,
      name: 'Nike Blazer Low 77 SE',
      href: '#',
      price: '₹1,549',
      originalPrice: '₹2,499',
      discount: '38% off',
      color: 'White',
      leadTime: '3-4 weeks',
      size: '8 UK',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
    },
    {
      id: 3,
      name: 'Nike Air Max 90',
      href: '#',
      price: '₹2219 ',
      originalPrice: '₹999',
      discount: '78% off',
      color: 'Black',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    },
  ]
  
  return (
    <div className="w-full flex flex-col items-center justify-center md:w-1/3">
      
        <div className="w-full border text-gray-400 flex justify-center items-center">
          <p className='px-3 text-gray-400 text-3xl'>#25487 </p>
        <h1 className='text-gray-800 font-semibold'>Your order Successfull</h1>
        </div>
        <p className="mt-2 w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-white border">
         <Check/>
        </p>
        
        <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex items-center gap-4">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="h-16 w-16 rounded object-contain"
              />
              <div>
                <h3 className="text-sm text-gray-900">{product.name}</h3>
                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dd className="inline font-bold">{product.price}</dd>
                  </div>
                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">{product.color}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  )
}

export default Final