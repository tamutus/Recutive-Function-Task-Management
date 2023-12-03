import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTasksWhereInputSchema'

export const PrioritiesToTasksDeleteManyArgsSchema: z.ZodType<Prisma.PrioritiesToTasksDeleteManyArgs> = z.object({
  where: PrioritiesToTasksWhereInputSchema.optional(),
}).strict()

export default PrioritiesToTasksDeleteManyArgsSchema;
