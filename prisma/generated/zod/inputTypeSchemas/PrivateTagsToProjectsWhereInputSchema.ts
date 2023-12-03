import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const PrivateTagsToProjectsWhereInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToProjectsWhereInputSchema),z.lazy(() => PrivateTagsToProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectsWhereInputSchema),z.lazy(() => PrivateTagsToProjectsWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict();

export default PrivateTagsToProjectsWhereInputSchema;
