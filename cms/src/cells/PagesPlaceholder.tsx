import React from 'react'

const PlaceholderCell = ({ rowData }: { rowData: any }) => {
  const src = `${process.env.NEXT_PUBLIC_CDN_URL}/cms/${rowData?.image.src}`
  if (!src) return null

  return (
    <img
      src={src}
      alt=""
      style={{
        width: 60,
        height: 60,
        borderRadius: 6,
        objectFit: 'cover',
      }}
    />
  )
}

export default PlaceholderCell
