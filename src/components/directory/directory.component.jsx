import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item.component';
import './directory.style.scss'

const Directory = ({categories}) =>{
    return(
        <div className='directory-container' >
        {
          categories.map((categories)=>(
            <CategoryItem key={categories.id} category={categories}/>
          ))
        }
      </div> 
    )
}

Directory.propTypes ={
    categories : PropTypes
}



export default Directory