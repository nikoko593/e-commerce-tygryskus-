import { Button } from '@/components/ui/button'
import AxiosInstance from '@/lib/AxiosInstance'
import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id }= useParams()

  const [product, setProduct] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  const getProduct = async () => {
    setIsLoading(true)
    try {
      const response = await AxiosInstance.post('/api/product/single', { productId: id })
      setProduct(response.data.product)
      
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    getProduct()
  }, [])

 if (isLoading) return <div>Loading...</div>

 if (product === null) return <div>Product not found</div>

 return (
  <div className='flex flex-col'>
    <span className='text-xl'>
      Product {id}
    </span>

    <div className='flex flex-row space-x-3'>
      <Button onClick={() => console.log(product)}>Edit product</Button>
      <Button variant="destructive" onClick={() => console.log(product)}>Delete product</Button>
    </div>
  </div>
)


}

export default Product
