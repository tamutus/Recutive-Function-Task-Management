import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { NestedEnumLinkTypeFilterSchema } from './NestedEnumLinkTypeFilterSchema';

export const EnumLinkTypeFilterSchema: z.ZodType<Prisma.EnumLinkTypeFilter> = z.object({
  equals: z.lazy(() => LinkTypeSchema).optional(),
  in: z.lazy(() => LinkTypeSchema).array().optional(),
  notIn: z.lazy(() => LinkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => NestedEnumLinkTypeFilterSchema) ]).optional(),
}).strict();

export default EnumLinkTypeFilterSchema;
