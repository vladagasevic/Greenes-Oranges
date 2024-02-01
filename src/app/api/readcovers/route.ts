import fs from 'fs'
import path from 'path'

export function GET(request: Request) {
  const dir = path.resolve('./public', 'covers');
  const filenames = fs.readdirSync(dir);

  const images = filenames.map(name => path.join('/', 'covers', name))

  return Response.json(images)
}
