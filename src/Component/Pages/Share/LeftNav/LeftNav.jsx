import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsight from '../../../News/EditorsInsight/EditorsInsight';
import LeftSectionItems from './LeftSectionItems';

const LeftNav = () => {
    const [categories , setCategories] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='bg-light py-4 text-center mt-2'> 
            <h3>National News</h3>
            </div>
               <div className='py-4 ps-4 border '>
               {
                        categories.map(category => <p
                             key={category.id} >
                            <Link  to={`/category/${category.id}`} className='text-decoration-none active fs-4 text-secondary'>{category.name}</Link>
                             </p>)
                }
               </div>
               <div>
               <LeftSectionItems></LeftSectionItems>
               </div>
        </div>
    );
};

export default LeftNav;