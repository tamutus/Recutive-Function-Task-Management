import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PrioritiesToTasksListRelationFilterSchema } from './PrioritiesToTasksListRelationFilterSchema';
import { PrioritiesToProjectsListRelationFilterSchema } from './PrioritiesToProjectsListRelationFilterSchema';
import { PrioritiesToSkillsListRelationFilterSchema } from './PrioritiesToSkillsListRelationFilterSchema';
import { PrioritiesToSkillPathsListRelationFilterSchema } from './PrioritiesToSkillPathsListRelationFilterSchema';
import { PrioritiesToTagsListRelationFilterSchema } from './PrioritiesToTagsListRelationFilterSchema';
import { PrioritiesToPrivateTagsListRelationFilterSchema } from './PrioritiesToPrivateTagsListRelationFilterSchema';

export const PriorityWhereUniqueInputSchema: z.ZodType<Prisma.PriorityWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => PriorityWhereInputSchema),z.lazy(() => PriorityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriorityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriorityWhereInputSchema),z.lazy(() => PriorityWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  tasks: z.lazy(() => PrioritiesToTasksListRelationFilterSchema).optional(),
  projects: z.lazy(() => PrioritiesToProjectsListRelationFilterSchema).optional(),
  skills: z.lazy(() => PrioritiesToSkillsListRelationFilterSchema).optional(),
  skillPaths: z.lazy(() => PrioritiesToSkillPathsListRelationFilterSchema).optional(),
  tags: z.lazy(() => PrioritiesToTagsListRelationFilterSchema).optional(),
  privateTags: z.lazy(() => PrioritiesToPrivateTagsListRelationFilterSchema).optional()
}).strict());

export default PriorityWhereUniqueInputSchema;
