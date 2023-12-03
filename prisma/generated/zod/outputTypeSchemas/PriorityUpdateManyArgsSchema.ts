import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriorityUpdateManyMutationInputSchema } from '../inputTypeSchemas/PriorityUpdateManyMutationInputSchema'
import { PriorityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PriorityUncheckedUpdateManyInputSchema'
import { PriorityWhereInputSchema } from '../inputTypeSchemas/PriorityWhereInputSchema'

export const PriorityUpdateManyArgsSchema: z.ZodType<Prisma.PriorityUpdateManyArgs> = z.object({
  data: z.union([ PriorityUpdateManyMutationInputSchema,PriorityUncheckedUpdateManyInputSchema ]),
  where: PriorityWhereInputSchema.optional(),
}).strict()

export default PriorityUpdateManyArgsSchema;