import React from 'react'
import PropTypes from 'prop-types'
import { NFTCollectionTemplate } from '../../templates/nft-collection'

const NFTCollectionPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <NFTCollectionTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

NFTCollectionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NFTCollectionPreview
