import React from 'react'

function productDescription() {
  return (
    <div className="font-[sans-serif]">
  <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="w-full lg:sticky top-0 sm:flex gap-2">
        <img src="https://readymadeui.com/images/product2.webp" alt="Product" className="w-4/5 rounded object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-gray-800">Adjective Attire | T-shirt</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          <p className="text-gray-800 text-xl font-bold">$12</p>
          {/* <p className="text-gray-400 text-xl"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p> */}
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">SM</button>
            <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">MD</button>
            <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">LG</button>
            <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">XL</button>
          </div>
          <button type="button" className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded">Add to cart</button>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800">About the item</h3>
          <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
            <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
            <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
            <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
            <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default productDescription