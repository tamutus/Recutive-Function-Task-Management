import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TaskTemplateOrderByWithRelationInputSchema } from './TaskTemplateOrderByWithRelationInputSchema';
import { TaskLinkOrderByRelationAggregateInputSchema } from './TaskLinkOrderByRelationAggregateInputSchema';
import { ProjectsToTasksOrderByRelationAggregateInputSchema } from './ProjectsToTasksOrderByRelationAggregateInputSchema';
import { TaskWorkOrderByRelationAggregateInputSchema } from './TaskWorkOrderByRelationAggregateInputSchema';
import { SkillsToTasksOrderByRelationAggregateInputSchema } from './SkillsToTasksOrderByRelationAggregateInputSchema';
import { PrioritiesToTasksOrderByRelationAggregateInputSchema } from './PrioritiesToTasksOrderByRelationAggregateInputSchema';
import { TagsToTasksOrderByRelationAggregateInputSchema } from './TagsToTasksOrderByRelationAggregateInputSchema';
import { PrivateTagsToTasksOrderByRelationAggregateInputSchema } from './PrivateTagsToTasksOrderByRelationAggregateInputSchema';
import { EnergiesToTasksOrderByRelationAggregateInputSchema } from './EnergiesToTasksOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTasksOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTasksOrderByRelationAggregateInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const TaskOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  templateId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  public: z.lazy(() => SortOrderSchema).optional(),
  publicAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  startAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  startedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dueAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  template: z.lazy(() => TaskTemplateOrderByWithRelationInputSchema).optional(),
  precursors: z.lazy(() => TaskLinkOrderByRelationAggregateInputSchema).optional(),
  successors: z.lazy(() => TaskLinkOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTasksOrderByRelationAggregateInputSchema).optional(),
  work: z.lazy(() => TaskWorkOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => SkillsToTasksOrderByRelationAggregateInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTasksOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagsToTasksOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTasksOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTasksOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTasksOrderByRelationAggregateInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default TaskOrderByWithRelationInputSchema;
