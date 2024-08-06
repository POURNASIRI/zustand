
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from './components/ui/card';
import { PRODUCTS_DATA } from './lib/mockData';
import { useStore } from './store/store';
import { Button } from './components/ui/button';
import { ChangeQtyButtons } from './components/change-qty-buttons';

function App() {
  const addProduct = useStore((state) => state.addProduct);
  const cardProducts = useStore((state) => state.products);

  console.log(cardProducts)

  return (
    <main className='space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2'>
      <h1 className='text-2xl'>Products:</h1>
      <div className='space-y-2'>
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}</CardContent>
            <CardFooter>
              {cardProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product.id}/>
              ) : (
                <Button variant='default' onClick={() => addProduct(product)}>
                  Add to Cart
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;
