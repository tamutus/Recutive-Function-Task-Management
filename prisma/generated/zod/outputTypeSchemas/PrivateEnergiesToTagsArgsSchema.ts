import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTagsSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsSelectSchema';
import { PrivateEnergiesToTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTagsIncludeSchema';

export const PrivateEnergiesToTagsArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTagsDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToTagsSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToTagsIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToTagsArgsSchema;
