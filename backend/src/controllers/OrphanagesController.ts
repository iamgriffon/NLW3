import { Request, Response } from 'express';
import Orphanage from '../models/Orphanage';
import { getRepository } from 'typeorm';
import OrphanagesView from '../views/orphanages_view';
import * as Yup from 'yup';

export default {

  index: async(request: Request, response: Response) => {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanagesList = await orphanagesRepository.find({
      relations: ['images']
    });
    return response.json(OrphanagesView.renderMany(orphanagesList));
  },

  show: async(request: Request, response: Response) => {
    const {id} = request.params
    const orphanagesRepository = getRepository(Orphanage);
    const findOrphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });
    return response.json(OrphanagesView.render(findOrphanage));
  },

  create: async (request: Request, response: Response) => {
    console.log(request.files);
    const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = request.body;
    const orphanagesRepository = getRepository(Orphanage);
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return {path: image.filename}
    })

    const data = {
      name, latitude, longitude, about, instructions, opening_hours, open_on_weekends, images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      }))
    });

    await schema.validate(data, {
      abortEarly: false,
    })

    const createdOrphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(createdOrphanage);
    return response.status(201).json(createdOrphanage);
  }
};