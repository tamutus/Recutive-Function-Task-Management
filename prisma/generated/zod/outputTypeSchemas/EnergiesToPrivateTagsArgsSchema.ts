import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPrivateTagsSelectSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsSelectSchema';
import { EnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToPrivateTagsIncludeSchema';

export const EnergiesToPrivateTagsArgsSchema: z.ZodType<Prisma.EnergiesToPrivateTagsDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToPrivateTagsSelectSchema).optional(),
  include: z.lazy(() => EnergiesToPrivateTagsIncludeSchema).optional(),
}).strict();

export default EnergiesToPrivateTagsArgsSchema;
