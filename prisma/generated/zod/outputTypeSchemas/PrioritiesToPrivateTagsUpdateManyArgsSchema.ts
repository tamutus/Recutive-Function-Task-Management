import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsUpdateManyMutationInputSchema'
import { PrioritiesToPrivateTagsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsUncheckedUpdateManyInputSchema'
import { PrioritiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereInputSchema'

export const PrioritiesToPrivateTagsUpdateManyArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUpdateManyArgs> = z.object({
  data: z.union([ PrioritiesToPrivateTagsUpdateManyMutationInputSchema,PrioritiesToPrivateTagsUncheckedUpdateManyInputSchema ]),
  where: PrioritiesToPrivateTagsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToPrivateTagsUpdateManyArgsSchema;
