import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectsSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsSelectSchema';
import { PrivateEnergiesToProjectsIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectsIncludeSchema';

export const PrivateEnergiesToProjectsArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToProjectsSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToProjectsIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToProjectsArgsSchema;
