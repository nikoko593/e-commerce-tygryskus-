import AxiosInstance from '@/lib/AxiosInstance';
import { convertToCurrency } from '@/lib/utils';
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';



const List = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await AxiosInstance.get('/api/product/list');
      setData(response.data['products']);
    } catch (error) {
      console.error(error);
    } finally{
      setIsLoading(false);
    }
  }


  useEffect(() => {
    getProducts();    
  }, [])

  return (
    <div className='flex flex-col space-y-6'>
      <h1 className='text-3xl'>Product List</h1>
      {
        isLoading ? "" : 
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              data.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img className='w-20 h-20 object-cover' src={product.image[0]}/>
                  </TableCell>
                  <TableCell>{product._id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell className="text-right">{convertToCurrency(product.price, "code")}</TableCell>
                  <TableCell className="text-right">
                    <Button onClick={() => navigate(`/list/${product._id}`)}>View </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      } 
    </div>
  )
}

export default List
