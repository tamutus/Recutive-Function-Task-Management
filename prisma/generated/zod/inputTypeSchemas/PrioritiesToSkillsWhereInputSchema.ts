import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PriorityRelationFilterSchema } from './PriorityRelationFilterSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const PrioritiesToSkillsWhereInputSchema: z.ZodType<Prisma.PrioritiesToSkillsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToSkillsWhereInputSchema),z.lazy(() => PrioritiesToSkillsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToSkillsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToSkillsWhereInputSchema),z.lazy(() => PrioritiesToSkillsWhereInputSchema).array() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => PriorityRelationFilterSchema),z.lazy(() => PriorityWhereInputSchema) ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
}).strict();

export default PrioritiesToSkillsWhereInputSchema;
