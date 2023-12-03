import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagListRelationFilterSchema: z.ZodType<Prisma.PrivateTagListRelationFilter> = z.object({
  every: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  some: z.lazy(() => PrivateTagWhereInputSchema).optional(),
  none: z.lazy(() => PrivateTagWhereInputSchema).optional()
}).strict();

export default PrivateTagListRelationFilterSchema;
