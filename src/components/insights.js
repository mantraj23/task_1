import React from 'react'
import "../components_css/insights.css"
import insightData from '../data/insightData';
import { List, ListItem, ListItemText, } from '@mui/material';

export default function Insights() {
  return (
    <div>
      <div className='headspo'>
        SPO Insights
      </div>
      <div className='insContent'>

        <div className='listhead'>
            2023 Placement Insights
        </div>

        <div className='listCon'>
      <List className="list">
      {insightData.map((item, index) => (
        <ListItem key={index} className="listItem">
          <ListItemText
            primary={
              <div className='listitemCon'>
                <div className="date">
                  {item.date}
                </div>
                <div className="heading">
                  {item.heading}
                </div>
              </div>
            }
          />
        </ListItem>
      ))}
    </List>
    </div>
      </div>
    </div>
  )
}
