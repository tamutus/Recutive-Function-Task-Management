import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInputSchema } from './SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInputSchema';
import { SkillsToTaskTemplatesWhereInputSchema } from './SkillsToTaskTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillsToTaskTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesWhereUniqueInput> = z.object({
  taskId_skillId: z.lazy(() => SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInputSchema)
})
.and(z.object({
  taskId_skillId: z.lazy(() => SkillsToTaskTemplatesTaskIdSkillIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToTaskTemplatesWhereInputSchema),z.lazy(() => SkillsToTaskTemplatesWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
}).strict());

export default SkillsToTaskTemplatesWhereUniqueInputSchema;
