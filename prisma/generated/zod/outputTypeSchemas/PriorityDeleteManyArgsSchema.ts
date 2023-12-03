import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriorityWhereInputSchema } from '../inputTypeSchemas/PriorityWhereInputSchema'

export const PriorityDeleteManyArgsSchema: z.ZodType<Prisma.PriorityDeleteManyArgs> = z.object({
  where: PriorityWhereInputSchema.optional(),
}).strict()

export default PriorityDeleteManyArgsSchema;
