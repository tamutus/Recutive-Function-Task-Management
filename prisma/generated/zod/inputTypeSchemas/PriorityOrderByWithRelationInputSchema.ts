import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { PrioritiesToTasksOrderByRelationAggregateInputSchema } from './PrioritiesToTasksOrderByRelationAggregateInputSchema';
import { PrioritiesToProjectsOrderByRelationAggregateInputSchema } from './PrioritiesToProjectsOrderByRelationAggregateInputSchema';
import { PrioritiesToSkillsOrderByRelationAggregateInputSchema } from './PrioritiesToSkillsOrderByRelationAggregateInputSchema';
import { PrioritiesToSkillPathsOrderByRelationAggregateInputSchema } from './PrioritiesToSkillPathsOrderByRelationAggregateInputSchema';
import { PrioritiesToTagsOrderByRelationAggregateInputSchema } from './PrioritiesToTagsOrderByRelationAggregateInputSchema';
import { PrioritiesToPrivateTagsOrderByRelationAggregateInputSchema } from './PrioritiesToPrivateTagsOrderByRelationAggregateInputSchema';

export const PriorityOrderByWithRelationInputSchema: z.ZodType<Prisma.PriorityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  tasks: z.lazy(() => PrioritiesToTasksOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => PrioritiesToProjectsOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => PrioritiesToSkillsOrderByRelationAggregateInputSchema).optional(),
  skillPaths: z.lazy(() => PrioritiesToSkillPathsOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => PrioritiesToTagsOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrioritiesToPrivateTagsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PriorityOrderByWithRelationInputSchema;
