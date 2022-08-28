import './index.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { suitList, rankList } from '@/utils/card'

export default function Card(props) {
  return (
    <div className={['card', props.suit].join(' ')} onClick={props.onClick}>
      <div className="suit">{props.suit}</div>
      <div className="rank">{props.rank}</div>
    </div>
  )
}

Card.propTypes = {
  suit: PropTypes.oneOf(suitList),
  rank: PropTypes.oneOf(rankList)
}