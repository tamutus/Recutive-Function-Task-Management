import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema } from './TaskLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema';
import { TaskLinkWhereInputSchema } from './TaskLinkWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumLinkTypeFilterSchema } from './EnumLinkTypeFilterSchema';
import { LinkTypeSchema } from './LinkTypeSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TaskLinkWhereUniqueInputSchema: z.ZodType<Prisma.TaskLinkWhereUniqueInput> = z.object({
  precursorId_successorId: z.lazy(() => TaskLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema)
})
.and(z.object({
  precursorId_successorId: z.lazy(() => TaskLinkPrecursorIdSuccessorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TaskLinkWhereInputSchema),z.lazy(() => TaskLinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskLinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskLinkWhereInputSchema),z.lazy(() => TaskLinkWhereInputSchema).array() ]).optional(),
  precursorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  successorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  linkType: z.union([ z.lazy(() => EnumLinkTypeFilterSchema),z.lazy(() => LinkTypeSchema) ]).optional(),
  precursor: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
  successor: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict());

export default TaskLinkWhereUniqueInputSchema;
