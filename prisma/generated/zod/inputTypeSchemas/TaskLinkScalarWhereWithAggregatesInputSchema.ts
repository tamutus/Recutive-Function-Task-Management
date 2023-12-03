import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumLinkTypeWithAggregatesFilterSchema } from './EnumLinkTypeWithAggregatesFilterSchema';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskLinkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TaskLinkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TaskLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskLinkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  linkType: z.union([ z.lazy(() => EnumLinkTypeWithAggregatesFilterSchema),z.lazy(() => LinkTypeSchema) ]).optional(),
}).strict();

export default TaskLinkScalarWhereWithAggregatesInputSchema;
