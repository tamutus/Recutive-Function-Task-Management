import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToProjectsSelectSchema } from '../inputTypeSchemas/EnergiesToProjectsSelectSchema';
import { EnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/EnergiesToProjectsIncludeSchema';

export const EnergiesToProjectsArgsSchema: z.ZodType<Prisma.EnergiesToProjectsDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToProjectsSelectSchema).optional(),
  include: z.lazy(() => EnergiesToProjectsIncludeSchema).optional(),
}).strict();

export default EnergiesToProjectsArgsSchema;
