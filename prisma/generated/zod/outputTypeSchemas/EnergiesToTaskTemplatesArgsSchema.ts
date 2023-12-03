import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskTemplatesSelectSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesSelectSchema';
import { EnergiesToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToTaskTemplatesIncludeSchema';

export const EnergiesToTaskTemplatesArgsSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => EnergiesToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default EnergiesToTaskTemplatesArgsSchema;
