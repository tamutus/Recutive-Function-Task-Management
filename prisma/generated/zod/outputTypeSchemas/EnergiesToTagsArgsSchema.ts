import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTagsSelectSchema } from '../inputTypeSchemas/EnergiesToTagsSelectSchema';
import { EnergiesToTagsIncludeSchema } from '../inputTypeSchemas/EnergiesToTagsIncludeSchema';

export const EnergiesToTagsArgsSchema: z.ZodType<Prisma.EnergiesToTagsDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToTagsSelectSchema).optional(),
  include: z.lazy(() => EnergiesToTagsIncludeSchema).optional(),
}).strict();

export default EnergiesToTagsArgsSchema;
