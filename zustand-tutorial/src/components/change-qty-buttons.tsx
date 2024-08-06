import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

type Props = { productId: string };

export function ChangeQtyButtons({ productId }: Props) {
  const { getProductById, devQty,incQty } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      devQty: state.decQty,
      incQty:state.incQty
    }))
  );
  const product = getProductById(productId);
  return(
  <>
    {product && (
      <div className='flex gap-2 items-center'>
        <Button onClick={() => devQty(product?.id)} size={'icon'}>
          <Minus />
        </Button>
        <p>{product?.qty}</p>
        <Button onClick={() => incQty(product?.id)} size={'icon'}>
          <Plus />
        </Button>
      </div>
    )}
  </>
  )
}
