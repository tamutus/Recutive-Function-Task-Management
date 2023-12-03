import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInputSchema } from './PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInputSchema';
import { PrioritiesToPrivateTagsWhereInputSchema } from './PrioritiesToPrivateTagsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { PriorityRelationFilterSchema } from './PriorityRelationFilterSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PrioritiesToPrivateTagsWhereUniqueInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsWhereUniqueInput> = z.object({
  tagId_priorityId: z.lazy(() => PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInputSchema)
})
.and(z.object({
  tagId_priorityId: z.lazy(() => PrioritiesToPrivateTagsTagIdPriorityIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
  priority: z.union([ z.lazy(() => PriorityRelationFilterSchema),z.lazy(() => PriorityWhereInputSchema) ]).optional(),
}).strict());

export default PrioritiesToPrivateTagsWhereUniqueInputSchema;
