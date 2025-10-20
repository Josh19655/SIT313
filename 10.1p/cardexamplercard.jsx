import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './cardexamplercard.css';


const CardExampleCard = (props) => {
    return (
        <div className='column'>
        <Card >
            <Image src={props.img} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.date}</span>
                </Card.Meta>
                <Card.Description>
                    {props.detail}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
              
                    <Icon name='user' />
                    22 Friends
                
            </Card.Content>
        </Card>
        </div>
    )
}

export default   CardExampleCard