import React, { useState } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function MovieForm(props) {
    const [Title, setTitle] = useState(props.title ? props.title : '')
    const [Director, setDirector] = useState(props.director ? props.director : '')
    const [Genre, setGenre] = useState(props.genre ? props.genre : '')
    const [Plot, setPlot] = useState(props.plot ? props.plot : '')
    const [Rated, setRated] = useState(props.rated ? props.rated : '')
    const [Released, setReleased] = useState(props.released_on ? props.released_on : '')
    const [Year, setYear] = useState(props.year ? props.year :'')

    const movie = {
        title: Title, 
        director: Director, 
        genre: Genre, 
        plot: Plot,
        rated: Rated,
        released_on: Released,
        year: Year, 
    }
    const history = useHistory()

    const addMovie = (movieObj) => {
        Axios.post('http://localhost:8000/api/', movieObj)
        .then(res => {
            props.setMovies([...props.Movies,res.data])
            props.setAdding(false)
        })
        .catch(err => console.log(err))
    }

    const updateMovie = (id, movieObj) => {
        Axios.put(`http://localhost:8000/api/${id}/`, movieObj)
        .then(res => {
            console.log(res)
            history.push('/')
        })
        .catch(err => console.log(err))
    } 

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not validate email!',
          number: '${label} is not a validate number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
 
      const handleSubmit = () => {
        console.log('submited')
        return  props.id ? updateMovie(props.id, movie) : addMovie(movie)
      }

    return (
        <Form {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
            <Form.Item
            label="Title"
            >
                <Input  
                name="Title"               
                value={Title}
                onChange={(e) => setTitle(e.target.value)}/>
            </Form.Item>
            <Form.Item
            label="Director"
            >
                <Input                                 
                name="Director"
                value={Director}
                onChange={(e) => setDirector(e.target.value)}/>
            </Form.Item>
            <Form.Item
            label="Genre"
            >
                <Input   
                name="Genre"              
                value={Genre}
                onChange={(e) => setGenre(e.target.value)}
                />
            </Form.Item>
            <Form.Item
            label="Rated"
            >
                <Input 
                name="Rated"
                value={Rated}
                onChange={(e) => setRated(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Release Date in YYYY-MM-DD"
            >
                <Input 
                name="Released"
                value={Released}
                onChange={(e) => setReleased(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                label="Year"
            >
                <InputNumber 
                name="Year"
                value={Year}
                onChange={(e)=> setYear(e)}
                rules={[
                        {
                            type: 'number',
                            min: 1900,
                            max: 2020,
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item  label="Plot" >
                <Input.TextArea 
                name="Plot"
                value={Plot} 
                onChange={(e) => setPlot(e.target.value)}
                />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="submit" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
