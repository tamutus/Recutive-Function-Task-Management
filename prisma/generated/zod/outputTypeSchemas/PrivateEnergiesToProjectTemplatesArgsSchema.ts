import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergiesToProjectTemplatesSelectSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesSelectSchema';
import { PrivateEnergiesToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateEnergiesToProjectTemplatesIncludeSchema';

export const PrivateEnergiesToProjectTemplatesArgsSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergiesToProjectTemplatesSelectSchema).optional(),
  include: z.lazy(() => PrivateEnergiesToProjectTemplatesIncludeSchema).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesArgsSchema;
