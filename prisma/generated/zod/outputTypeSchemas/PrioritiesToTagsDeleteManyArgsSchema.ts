import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToTagsWhereInputSchema'

export const PrioritiesToTagsDeleteManyArgsSchema: z.ZodType<Prisma.PrioritiesToTagsDeleteManyArgs> = z.object({
  where: PrioritiesToTagsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToTagsDeleteManyArgsSchema;
