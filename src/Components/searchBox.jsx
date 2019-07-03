import React from 'react';

const SearchBox = ({val,onChange}) => {
    return (  
        <div className="col-10">
            <input
            placeholder="Search By Product Name .."
            type="text"
            name="query"
                  className="form-control my-3"
            value={val}
            onChange={e=> onChange(e.currentTarget.value)}
            />
        </div>
        
       
    );
}
 
export default SearchBox;