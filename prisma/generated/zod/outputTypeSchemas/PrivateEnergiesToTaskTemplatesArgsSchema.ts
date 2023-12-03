import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskTemplatesSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesSelectSchema';
import { PrivateEnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskTemplatesIncludeSchema';

export const PrivateEnergiesToTaskTemplatesArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesArgsSchema;
