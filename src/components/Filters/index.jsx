import './Filters.css'
export default function Filters ( ) {
    return(
        <div className="FiltersContainer">
            <input type="text" placeholder='TASK' className="TaskFilter" />
            <span className='line1'></span>
            
            <input type="text" placeholder='index' className="TaskFilter"/>
            <span className='line2'></span>
            <span className='line3'></span>

            <input type="text" placeholder='caso de teste' className="TaskFilter"/>
        </div>
    )
}