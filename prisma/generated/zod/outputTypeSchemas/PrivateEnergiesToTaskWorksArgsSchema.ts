import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToTaskWorksSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksSelectSchema';
import { PrivateEnergiesToTaskWorksIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToTaskWorksIncludeSchema';

export const PrivateEnergiesToTaskWorksArgsSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToTaskWorksSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToTaskWorksIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToTaskWorksArgsSchema;
