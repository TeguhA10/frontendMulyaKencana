import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');

  return new Response(fileContents, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
