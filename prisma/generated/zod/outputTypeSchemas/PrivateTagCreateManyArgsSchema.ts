import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagCreateManyInputSchema } from '../inputTypeSchemas/PrivateTagCreateManyInputSchema'

export const PrivateTagCreateManyArgsSchema: z.ZodType<Prisma.PrivateTagCreateManyArgs> = z.object({
  data: z.union([ PrivateTagCreateManyInputSchema,PrivateTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateTagCreateManyArgsSchema;
