import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToPrivateTagsSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsSelectSchema';
import { PrivateEnergiesToPrivateTagsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToPrivateTagsIncludeSchema';

export const PrivateEnergiesToPrivateTagsArgsSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToPrivateTagsSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToPrivateTagsIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsArgsSchema;
