import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrivateTagUpdateManyMutationInputSchema'
import { PrivateTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrivateTagUncheckedUpdateManyInputSchema'
import { PrivateTagWhereInputSchema } from '../inputTypeSchemas/PrivateTagWhereInputSchema'

export const PrivateTagUpdateManyArgsSchema: z.ZodType<Prisma.PrivateTagUpdateManyArgs> = z.object({
  data: z.union([ PrivateTagUpdateManyMutationInputSchema,PrivateTagUncheckedUpdateManyInputSchema ]),
  where: PrivateTagWhereInputSchema.optional(),
}).strict()

export default PrivateTagUpdateManyArgsSchema;
