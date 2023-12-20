import React from 'react'

const Search = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
                <form className='flex flex-col gap-8'>
                    <div className="flex items-center gap-2">
                        <label className="whitespace-nowrap font-semibold">Search Term:</label>
                        <input type="text" className='border rounded-lg p-3  w-full' id="searchTerm" placeholder='search...' />
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <label className="font-semibold">Type:</label>
                        <div className="flex gap-2">
                            <input type="checkbox" id="all" className='w-5' />
                            <span>Rent & Sale</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="rent" className='w-5' />
                            <span>Rent </span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="sale" className='w-5' />
                            <span> Sale</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="offer" className='w-5' />
                            <span>offer</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <label className="font-semibold">Amenities:</label>
                        <div className="flex gap-2">
                            <input type="checkbox" id="Furnished" className='w-5' />
                            <span>Furnished</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="parking" className='w-5' />
                            <span>Parking </span>
                        </div>

                    </div>
                    <div className="flex items-center gap-2">
                        <label className="font-semibold">Sort</label>
                        <select id="sort_order" className='border rounded-lg p-3'>
                            <option value="">Price High to Low</option>
                            <option value=""> Low to High</option>
                            <option value=""> Latest</option>
                            <option value=""> oldest</option>
                        </select>
                    </div>
                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
                        Search
                    </button>
                </form>
            </div>
            <div className="">
                <h1>Listing Results</h1>
            </div>
        </div>
    )
}

export default Search