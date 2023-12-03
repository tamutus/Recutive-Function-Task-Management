import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTasksSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksSelectSchema';
import { PrivateEnergiesToTasksIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTasksIncludeSchema';

export const PrivateEnergiesToTasksArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTasksDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToTasksSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToTasksIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToTasksArgsSchema;
