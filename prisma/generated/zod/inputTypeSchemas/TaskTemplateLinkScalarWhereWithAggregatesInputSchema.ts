import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumLinkTypeWithAggregatesFilterSchema } from './EnumLinkTypeWithAggregatesFilterSchema';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskTemplateLinkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TaskTemplateLinkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TaskTemplateLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskTemplateLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskTemplateLinkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskTemplateLinkScalarWhereWithAggregatesInputSchema),z.lazy(() => TaskTemplateLinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  linkType: z.union([ z.lazy(() => EnumLinkTypeWithAggregatesFilterSchema),z.lazy(() => LinkTypeSchema) ]).optional(),
}).strict();

export default TaskTemplateLinkScalarWhereWithAggregatesInputSchema;
