import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema } from './PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema';
import { PrivateTagsToTaskTemplatesWhereInputSchema } from './PrivateTagsToTaskTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';

export const PrivateTagsToTaskTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesWhereUniqueInput> = z.object({
  taskId_tagId: z.lazy(() => PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  taskId_tagId: z.lazy(() => PrivateTagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
}).strict());

export default PrivateTagsToTaskTemplatesWhereUniqueInputSchema;
