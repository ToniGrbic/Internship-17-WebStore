import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.wishListItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.store.deleteMany({});

  const store = await prisma.store.upsert({
    where: { name: 'WebStore1' },
    update: {},
    create: {
      name: 'WebStore1',
    },
  });

  const product1 = await prisma.product.upsert({
    where: { title: 'Fjallraven - Foldsack No. 1 Backpack' },
    update: {},
    create: {
      title: 'Fjallraven - Foldsack No. 1 Backpack',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      price: 109.95,
      category: "men's clothing",
      rating: 4.5,
      ratingCount: 10,
      storeId: 1,
    },
  });

  const product2 = await prisma.product.upsert({
    where: { title: 'Mens Casual Premium Slim Fit T-Shirts' },
    update: {},
    create: {
      title:
        "Mens Casual Premium Slim Fit T-Shirts",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png',
      rating: 4.0,
      ratingCount: 15,
      storeId: 1,
    },
  });

  const product3 = await prisma.product.upsert({
    where: { title: 'WD 2TB Elements Portable External Hard Drive' },
    update: {},
    create: {
      title: 'WD 2TB Elements Portable External Hard Drive',
      price: 64,
      description:
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png',
      rating: 4.2,
      ratingCount: 20,
      storeId: 1,
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: 'tgrbic@gmail.com' },
    update: {},
    create: {
      email: 'tgrbic@gmail.com',
      name: 'Toni',
      password: '1234',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'matematic@gmail.com' },
    update: {},
    create: {
      email: 'matematic@gmail.com',
      name: 'Mate',
      password: '123456',
    },
  });

  const order1 = await prisma.order.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: 1,
      productId: 1,
      quantity: 2,
    },
  });

  const order2 = await prisma.order.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: 1,
      productId: 2,
      quantity: 4,
    },
  });

  const wishlist1 = await prisma.wishListItem.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: 1,
      productId: 1,
    },
  });

  const wishlist2 = await prisma.wishListItem.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: 1,
      productId: 2,
    },
  });

  const wishlist3 = await prisma.wishListItem.upsert({
    where: { id: 3 },
    update: {},
    create: {
      userId: 2,
      productId: 2,
    },
  });

  console.log({
    user1,
    user2,
    product1,
    product2,
    product3,
    order1,
    order2,
    wishlist1,
    wishlist2,
    wishlist3,
  });
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
