import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsWhereInputSchema'

export const PrioritiesToProjectsDeleteManyArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsDeleteManyArgs> = z.object({
  where: PrioritiesToProjectsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToProjectsDeleteManyArgsSchema;
