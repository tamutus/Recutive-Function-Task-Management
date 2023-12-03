import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema } from './TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema';
import { TagsToTaskTemplatesWhereInputSchema } from './TagsToTaskTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const TagsToTaskTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesWhereUniqueInput> = z.object({
  taskId_tagId: z.lazy(() => TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema)
})
.and(z.object({
  taskId_tagId: z.lazy(() => TagsToTaskTemplatesTaskIdTagIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TagsToTaskTemplatesWhereInputSchema),z.lazy(() => TagsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsToTaskTemplatesWhereInputSchema),z.lazy(() => TagsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  tagger: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default TagsToTaskTemplatesWhereUniqueInputSchema;
