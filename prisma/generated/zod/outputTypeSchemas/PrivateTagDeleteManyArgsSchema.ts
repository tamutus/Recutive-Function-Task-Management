import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagWhereInputSchema } from '../inputTypeSchemas/PrivateTagWhereInputSchema'

export const PrivateTagDeleteManyArgsSchema: z.ZodType<Prisma.PrivateTagDeleteManyArgs> = z.object({
  where: PrivateTagWhereInputSchema.optional(),
}).strict()

export default PrivateTagDeleteManyArgsSchema;
