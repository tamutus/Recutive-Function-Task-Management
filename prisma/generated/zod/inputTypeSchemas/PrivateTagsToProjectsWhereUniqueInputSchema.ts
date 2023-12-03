import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInputSchema } from './PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInputSchema';
import { PrivateTagsToProjectsWhereInputSchema } from './PrivateTagsToProjectsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const PrivateTagsToProjectsWhereUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsWhereUniqueInput> = z.object({
  tagId_projectId: z.lazy(() => PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInputSchema)
})
.and(z.object({
  tagId_projectId: z.lazy(() => PrivateTagsToProjectsTagIdProjectIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateTagsToProjectsWhereInputSchema),z.lazy(() => PrivateTagsToProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectsWhereInputSchema),z.lazy(() => PrivateTagsToProjectsWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export default PrivateTagsToProjectsWhereUniqueInputSchema;
