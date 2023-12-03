import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesWhereInputSchema'

export const PrivateTagsToProjectTemplatesDeleteManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesDeleteManyArgs> = z.object({
  where: PrivateTagsToProjectTemplatesWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToProjectTemplatesDeleteManyArgsSchema;
