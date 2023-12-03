import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrioritiesToTagsUpdateManyMutationInputSchema'
import { PrioritiesToTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrioritiesToTagsUncheckedUpdateManyInputSchema'
import { PrioritiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereInputSchema'

export const PrioritiesToTagsUpdateManyArgsSchema: z.ZodType<Prisma.PrioritiesToTagsUpdateManyArgs> = z.object({
  data: z.union([ PrioritiesToTagsUpdateManyMutationInputSchema,PrioritiesToTagsUncheckedUpdateManyInputSchema ]),
  where: PrioritiesToTagsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToTagsUpdateManyArgsSchema;
