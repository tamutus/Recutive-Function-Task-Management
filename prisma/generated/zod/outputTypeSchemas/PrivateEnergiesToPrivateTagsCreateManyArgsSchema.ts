import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsCreateManyInputSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsCreateManyInputSchema'

export const PrivateEnergiesToPrivateTagsCreateManyArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsCreateManyArgs> = z.object({
  data: z.union([ PrivateEnergiesToPrivateTagsCreateManyInputSchema,PrivateEnergiesToPrivateTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateEnergiesToPrivateTagsCreateManyArgsSchema;
