import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Update.css'

const Update = () => {
  return (
    <div className="Updates">
      {
        UpdatesData.map((update) =>{
          return(
            <div className="update">
              <img src={update.img} alt="" />
              <div className="noti">
                <div style={{marginBOttom: '.5rem'}}>
                  <span className='name'>{update.name}</span>
                  <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Update