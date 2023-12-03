import type { Prisma } from '@prisma/client';
import { z } from 'zod';
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

export const PriorityWhereInputSchema: z.ZodType<Prisma.PriorityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PriorityWhereInputSchema),z.lazy(() => PriorityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriorityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriorityWhereInputSchema),z.lazy(() => PriorityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
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
}).strict();

export default PriorityWhereInputSchema;
