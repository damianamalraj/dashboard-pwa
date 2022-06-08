import React, {useState, useEffect} from 'react'

const Search = (props) => {
    const [searchText, setSearchText ] = useState("")

    useEffect(() => {
        props.onSearch(searchText)

    }, [searchText])

    const handleChange = (event) => {
        setSearchText(event.target.value)

    }

  return (
    <div style={{textAlign:"center"}}>
      <input onChange={handleChange} type="text" value={searchText}/>
    </div>
  )
}

export default Search
