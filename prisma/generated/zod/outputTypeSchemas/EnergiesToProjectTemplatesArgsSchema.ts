import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectTemplatesSelectSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesSelectSchema';
import { EnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectTemplatesIncludeSchema';

export const EnergiesToProjectTemplatesArgsSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToProjectTemplatesSelectSchema).optional(),
  include: z.lazy(() => EnergiesToProjectTemplatesIncludeSchema).optional(),
}).strict();

export default EnergiesToProjectTemplatesArgsSchema;
