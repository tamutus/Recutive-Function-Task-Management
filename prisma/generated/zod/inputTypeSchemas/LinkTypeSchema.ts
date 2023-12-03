import { z } from 'zod';

export const LinkTypeSchema = z.enum(['BLOCKS','SUPPORTS','ENERGIZES','AUGMENTS']);

export type LinkTypeType = `${z.infer<typeof LinkTypeSchema>}`

export default LinkTypeSchema;
