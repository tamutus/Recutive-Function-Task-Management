import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';

export const NestedEnumLinkTypeFilterSchema: z.ZodType<Prisma.NestedEnumLinkTypeFilter> = z.object({
  equals: z.lazy(() => LinkTypeSchema).optional(),
  in: z.lazy(() => LinkTypeSchema).array().optional(),
  notIn: z.lazy(() => LinkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => NestedEnumLinkTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLinkTypeFilterSchema;
