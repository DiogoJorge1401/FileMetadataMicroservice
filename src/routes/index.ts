import { Router } from 'express';
import multer from 'multer';

const upload = multer({ dest: "uploads/" });
const routes = Router();

routes.post('/fileanalyse', upload.single('upfile'), (req, res) => {
  const file = req.file;
  
  res.json({
    name: file?.originalname,
    type: file?.mimetype,
    size: file?.size
  })
})

export { routes };