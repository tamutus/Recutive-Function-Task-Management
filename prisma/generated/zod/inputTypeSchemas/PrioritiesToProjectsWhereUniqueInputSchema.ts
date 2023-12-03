import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInputSchema } from './PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInputSchema';
import { PrioritiesToProjectsWhereInputSchema } from './PrioritiesToProjectsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { PriorityRelationFilterSchema } from './PriorityRelationFilterSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PrioritiesToProjectsWhereUniqueInputSchema: z.ZodType<Prisma.PrioritiesToProjectsWhereUniqueInput> = z.object({
  projectId_priorityId: z.lazy(() => PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_priorityId: z.lazy(() => PrioritiesToProjectsProjectIdPriorityIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrioritiesToProjectsWhereInputSchema),z.lazy(() => PrioritiesToProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToProjectsWhereInputSchema),z.lazy(() => PrioritiesToProjectsWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  priority: z.union([ z.lazy(() => PriorityRelationFilterSchema),z.lazy(() => PriorityWhereInputSchema) ]).optional(),
}).strict());

export default PrioritiesToProjectsWhereUniqueInputSchema;
