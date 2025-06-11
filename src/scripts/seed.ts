import connectDB from '../config/database';
import { seedDatabase } from '../data/initialData';

const seed = async () => {
  try {
    await connectDB();
    await seedDatabase();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seed(); 