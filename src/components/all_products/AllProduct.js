import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios'

const AllProduct = () => {
    // https://dummyjson.com/products/categories

    const [allCategory, setAllCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');

    // ALL CATEGORIES
    useEffect(() => {
        const getAllProductsCategory = async () => {
            try {
                const res = await axios('https://dummyjson.com/products/categories')
                setAllCategory(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getAllProductsCategory();
    }, [])

    // PARTICULAR CATEGORY
    const getParticularCategory = async () => {
        try {
            const res = await axios(`https://dummyjson.com/products/category/${selectCategory}`)
            setProducts(res.data.products);
        } catch (error) {
            console.log(error)
        }
    }

    // FILTER CATEGORY
    const filterProducts = (item) => {
        setSelectCategory(item)
    }

    // ALL PRODUCTS
    const getAllProducts = async () => {
        try {
            const res = await axios('https://dummyjson.com/products')
            setProducts(res.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (selectCategory === "0" || selectCategory === "") {
            getAllProducts();
        }
        else {
            getParticularCategory()
        }
    }, [selectCategory])

    return (
        <Layout>
            <div className='relative' >
                <div>
                    <img src='assets/login.png' alt='login' className='object-cover w-full object-center h-[200px]' />
                </div>
                <div className='w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
                <h2 className='absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>All Products</h2>
            </div>

            {/* PRODUCTS CATEGORY SECTION */}
            <div className='flex flex-wrap gap-3 justify-center items-center'>
                <div>Filter Products :</div>
                <select onChange={(e) => filterProducts(e.target.value)}>
                    <option value="0" >Show All</option>
                    {allCategory.filter(filterItem => !["lighting", "motorcycle", "automotive", "furniture"].includes(filterItem))
                        .map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                </select>
            </div>

            {/* PRODUCTS SECTION */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className='flex gap-4 flex-wrap justify-center items-center'>
                        {products.map((item, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/3 p-4 w-full border-2">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title: {item.title}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Rating: {item.rating}</h2>
                                    <p className="mt-1">Price: {item.price}₹</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AllProduct