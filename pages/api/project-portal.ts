import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/project-portal.json'

export const getData = async () => {
    const response = await data
    return await response
};
  
  export default async(req: NextApiRequest, res: NextApiResponse) => {
    try {
      const projectPortal = await getData();
      res.statusCode = 200;
      res.json(data);
    } catch (e) {
      res.statusCode = 500;
      res.json({ status: "error" });
    }
  };