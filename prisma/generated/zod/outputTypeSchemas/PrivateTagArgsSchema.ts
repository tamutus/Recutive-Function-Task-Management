import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagSelectSchema } from '../inputTypeSchemas/PrivateTagSelectSchema';
import { PrivateTagIncludeSchema } from '../inputTypeSchemas/PrivateTagIncludeSchema';

export const PrivateTagArgsSchema: z.ZodType<Prisma.PrivateTagDefaultArgs> = z.object({
  select: z.lazy(() => PrivateTagSelectSchema).optional(),
  include: z.lazy(() => PrivateTagIncludeSchema).optional(),
}).strict();

export default PrivateTagArgsSchema;
