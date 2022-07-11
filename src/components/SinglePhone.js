import React from 'react'
import Card from './ui/Card'
import './SinglePhone.css'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { useGlobalContext } from '../store/context';


function SinglePhone(props) {

    const { brand_name, device_list } = props;
    const { editHandler, deleteHandler } = useGlobalContext()

    return (
        <div className='phone-container'>
            <h3>{brand_name}</h3>
            <div className="phone-body">
                {device_list.map(device => {
                    return (
                        <Card key={device.device_id} image={device.device_image}>
                            <Link to={'/'}>
                                {device.device_name}
                            </Link>
                            <div className="card-buttons">
                                {/* conditional rendering podaj ovde, imas onaj helper */}
                                <Button type='edit' handleClick={editHandler}> edit</Button>
                                <Button type='delete' handleClick={() => deleteHandler(device.device_id)}> delete</Button>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default SinglePhone