import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { List, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import MovieForm from './MovieForm';

const MoviesList = () => {
    const [Movies, setMovies] = useState([])
    const [Msg, setMsg] = useState('')
    const [Adding, setAdding] = useState(false)

    useEffect(()=> {
        Axios.get('http://localhost:8000/api/')
        .then(res => {
            console.log(res)
            setMovies(res.data)
        })
        .catch(err => setMsg(err))
    },[])

    return(
        <>
        <h1>Movies:</h1>
        <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={Movies}
        renderItem={item => (
          <List.Item>
            <Card title={<>
            <Link to={{
                pathname:'/details',
                state:{
                    Movie: item,
                }
                }} >{item.title}
            </Link> 
            <p>{item.rating_avg}/5</p>
            </>
            }>{item.plot}</Card> 
          </List.Item>
        )}
      />
      <Button onClick={() => setAdding(!Adding)}>Add Movie</Button>
      {Adding && <MovieForm setAdding={setAdding} Movies={Movies} setMovies={setMovies}/>}
      </>
    )
}

export default MoviesList
