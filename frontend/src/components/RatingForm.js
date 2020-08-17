import React, { useState } from 'react'
import Form from 'antd/lib/form/Form'
import { Input, Button } from 'antd'
import Axios from 'axios'
import Movie from './Movie'

export default function RatingForm(props) {
    const [Number, setNumber] = useState('')
    const [Comment, setComment] = useState('')

    const movieWithReview = {
        title: props.title, 
        director: props.director, 
        genre: props.genre, 
        plot: props.plot,
        released_on: props.released_one,
        year: props.year, 
        ratings: [
            ...props.ratings, 
            {number: Number, comment: Comment}
        ]
    }

    const handleSubmit = () => {
        Axios.put(`http://localhost:8000/api/${props.id}/`, movieWithReview)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <>
        <h1>Add Review</h1>
        <Form onSubmit={handleSubmit}>
            <Input 
            placeholder='Rating (out of 5)'
            name="Number"               
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
            />
            <br/>
            <Input 
            placeholder='Comment'
            name="Comment"
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
            />
            <br/>
            <Button type='submit' htmlType="submit" onClick={() => handleSubmit()}>Save</Button>
        </Form>
    </>
    )
}
