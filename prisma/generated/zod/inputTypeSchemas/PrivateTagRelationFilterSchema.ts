import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagRelationFilterSchema: z.ZodType<Prisma.PrivateTagRelationFilter> = z.object({
  is: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  isNot: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagRelationFilterSchema;
