import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInputSchema } from './PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInputSchema';
import { PrivateTagsToProjectTemplatesWhereInputSchema } from './PrivateTagsToProjectTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagsToProjectTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesWhereUniqueInput> = z.object({
  projectId_privateTagId: z.lazy(() => PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_privateTagId: z.lazy(() => PrivateTagsToProjectTemplatesProjectIdPrivateTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  privateTagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  privateTag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
}).strict());

export default PrivateTagsToProjectTemplatesWhereUniqueInputSchema;
