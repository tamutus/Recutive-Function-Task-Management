import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsTagIdPriorityIdCompoundUniqueInputSchema } from './PrioritiesToTagsTagIdPriorityIdCompoundUniqueInputSchema';
import { PrioritiesToTagsWhereInputSchema } from './PrioritiesToTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { PriorityRelationFilterSchema } from './PriorityRelationFilterSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PrioritiesToTagsWhereUniqueInputSchema: z.ZodType<Prisma.PrioritiesToTagsWhereUniqueInput> = z.object({
  tagId_priorityId: z.lazy(() => PrioritiesToTagsTagIdPriorityIdCompoundUniqueInputSchema)
})
.and(z.object({
  tagId_priorityId: z.lazy(() => PrioritiesToTagsTagIdPriorityIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrioritiesToTagsWhereInputSchema),z.lazy(() => PrioritiesToTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToTagsWhereInputSchema),z.lazy(() => PrioritiesToTagsWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  priority: z.union([ z.lazy(() => PriorityRelationFilterSchema),z.lazy(() => PriorityWhereInputSchema) ]).optional(),
}).strict());

export default PrioritiesToTagsWhereUniqueInputSchema;
