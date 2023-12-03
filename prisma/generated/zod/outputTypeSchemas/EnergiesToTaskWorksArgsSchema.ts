import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToTaskWorksSelectSchema } from '../inputTypeSchemas/EnergiesToTaskWorksSelectSchema';
import { EnergiesToTaskWorksIncludeSchema } from '../inputTypeSchemas/EnergiesToTaskWorksIncludeSchema';

export const EnergiesToTaskWorksArgsSchema: z.ZodType<Prisma.EnergiesToTaskWorksDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToTaskWorksSelectSchema).optional(),
  include: z.lazy(() => EnergiesToTaskWorksIncludeSchema).optional(),
}).strict();

export default EnergiesToTaskWorksArgsSchema;
