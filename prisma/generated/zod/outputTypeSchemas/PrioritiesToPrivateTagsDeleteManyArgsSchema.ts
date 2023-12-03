import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsWhereInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsWhereInputSchema'

export const PrioritiesToPrivateTagsDeleteManyArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsDeleteManyArgs> = z.object({
  where: PrioritiesToPrivateTagsWhereInputSchema.optional(),
}).strict()

export default PrioritiesToPrivateTagsDeleteManyArgsSchema;
