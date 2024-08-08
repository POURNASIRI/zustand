import { CircleX, ShoppingCart, Trash } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ChangeQtyButtons } from './change-qty-buttons';

export function Cart() {
  const { reset, products, removeProduct, total } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total
    }))
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='secondary' size='icon'>
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='overflow-y-scroll space-y-2 w-96'>
        <div className='flex gap-2 text-lg items-center'>
          <h1 className='text-xl'>Cart:</h1>
          <Button onClick={reset} variant={'destructive'} size={'icon'}>
            <CircleX />
          </Button>
        </div>
        <div className='space-y-2'>
          {products.map((product) => (
            <Card className='flex flex-col' key={product.id}>
              <CardHeader className='flex flex-row item-center gap-2'>
                <CardTitle>{product.title}</CardTitle>
                <Button
                  onClick={() => removeProduct(product.id)}
                  variant={'destructive'}
                  size={'icon'}
                >
                  <Trash />
                </Button>
              </CardHeader>
              <CardContent>
                {product.price}
              </CardContent>
              <CardFooter>
                <ChangeQtyButtons productId={product.id}/>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p>Total: {total}$</p>
      </PopoverContent>
    </Popover>
  );
}
