import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToProjectsWhereInputSchema'

export const PrivateTagsToProjectsDeleteManyArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsDeleteManyArgs> = z.object({
  where: PrivateTagsToProjectsWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToProjectsDeleteManyArgsSchema;
