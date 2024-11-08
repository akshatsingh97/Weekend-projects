import React, {useState, useEffect} from 'react'
import Reports from './Reports';
import './Report-tile.css';

const Readapi = () => {
    const [listOfBlog, setListOfBlog] = useState([]);
    const [filteredBlog, setFilteredBlog] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchAPI();
    },[]);

    const fetchAPI = async () => {
        const data = await fetch("https://api.spaceflightnewsapi.net/v4/reports/");
        const value = await data.json();

        setListOfBlog(value?.results);
        setFilteredBlog(value?.results);
    }

    console.log(listOfBlog)

  return (
    <div>
        <div className='search'>
            <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            <button onClick={() => {
                const filteredBlog = 
                listOfBlog.filter((blog) => blog.title.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredBlog(filteredBlog);
            }}>Search</button>
        </div>
        <div className='api-block'>
        {filteredBlog.map((news) =>
            <Reports key={news.id} data={news}/>
        )
        }
        </div>
    </div>
  )
}

export default Readapi