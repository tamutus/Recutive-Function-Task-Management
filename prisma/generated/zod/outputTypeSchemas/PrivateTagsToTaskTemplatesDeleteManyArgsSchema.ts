import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesWhereInputSchema'

export const PrivateTagsToTaskTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesDeleteManyArgs> = z.object({
  where: PrivateTagsToTaskTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToTaskTemplatesDeleteManyArgsSchema;
