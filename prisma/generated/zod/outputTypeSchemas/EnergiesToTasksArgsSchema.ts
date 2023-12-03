import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTasksSelectSchema } from '../inputTypeSchemas/EnergiesToTasksSelectSchema';
import { EnergiesToTasksIncludeSchema } from '../inputTypeSchemas/EnergiesToTasksIncludeSchema';

export const EnergiesToTasksArgsSchema: z.ZodType<Prisma.EnergiesToTasksDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToTasksSelectSchema).optional(),
  include: z.lazy(() => EnergiesToTasksIncludeSchema).optional(),
}).strict();

export default EnergiesToTasksArgsSchema;
