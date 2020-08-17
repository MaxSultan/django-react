import React, { useState, useEffect,  } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import MovieForm from './MovieForm'
import { Button } from 'antd'
import Axios from 'axios'
import RatingForm from './RatingForm'

export default function Movie(props) {
    const [Editting, setEditting] = useState(false)
    const [AddingReview, setAddingReview] = useState(false)
    const { Movie, } = props.location.state
    const history = useHistory()

    useEffect(()=> {
        Axios.get()
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const deleteMovie = (id) => {
        Axios.delete(`http://localhost:8000/api/${id}/`)
        .then(res => {
            console.log(res)
            history.push('/')
        })
        .catch(err => console.log(err))
    }

    const movieCode = () => {
        return(
            <div>
             <h1><strong>{Movie.title}</strong></h1>  
             <br/> 
            Directed By:{Movie.director}
            <br/> 
            genre: {Movie.genre}
            <br/> 
            plot: {Movie.plot}
            <br/> 
            rated: {Movie.rated}
            <br/> 
            Overall rating:{Movie.rating_avg}
            <br/> 
            release date: {Movie.released_on}
            <br/> 
            year: {Movie.year}
            <br/> 
            <br/>
            <br/>
            <div style={{textAlign:'center', border:'.1em solid blue'}}>
            Ratings: 
            <tr>
                <th>Rating (out of 5)</th>
                <th>Comment</th>
            </tr>
            {Movie.ratings.map(rating => {
                return <tr><td>{rating.number}</td><td>{rating.comment}</td></tr>
            })}
            </div>
            <br/>
            <br/>
            <br/>
            <Button onClick={() => setAddingReview(!AddingReview)}>Add Review</Button>
            <Button><Link to=''>Home</Link></Button>
            <Button onClick={() => setEditting(!Editting)}>Edit</Button>
            <Button onClick={()=> deleteMovie(Movie.id)}>Delete</Button>
            {Editting && <MovieForm {...Movie} setEditting={setEditting}/>}
            {AddingReview && <RatingForm setAddingReview={setAddingReview} {...Movie}/>}
            </div>)
    }

        return Movie.id ?  movieCode() : <Redirect to='/'/>
}
