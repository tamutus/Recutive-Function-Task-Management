import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { LinkTypeSchema } from './LinkTypeSchema';
import { NestedEnumLinkTypeWithAggregatesFilterSchema } from './NestedEnumLinkTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLinkTypeFilterSchema } from './NestedEnumLinkTypeFilterSchema';

export const EnumLinkTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLinkTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LinkTypeSchema).optional(),
  in: z.lazy(() => LinkTypeSchema).array().optional(),
  notIn: z.lazy(() => LinkTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => LinkTypeSchema),z.lazy(() => NestedEnumLinkTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLinkTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLinkTypeFilterSchema).optional()
}).strict();

export default EnumLinkTypeWithAggregatesFilterSchema;
