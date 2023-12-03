import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumLinkTypeFilterSchema } from './EnumLinkTypeFilterSchema';
import { LinkTypeSchema } from './LinkTypeSchema';

export const TaskLinkScalarWhereInputSchema: z.ZodType<Prisma.TaskLinkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaskLinkScalarWhereInputSchema),z.lazy(() => TaskLinkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskLinkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskLinkScalarWhereInputSchema),z.lazy(() => TaskLinkScalarWhereInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  linkType: z.union([ z.lazy(() => EnumLinkTypeFilterSchema),z.lazy(() => LinkTypeSchema) ]).optional(),
}).strict();

export default TaskLinkScalarWhereInputSchema;
