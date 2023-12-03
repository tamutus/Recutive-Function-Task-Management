import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectTemplateOrderByWithRelationInputSchema } from './ProjectTemplateOrderByWithRelationInputSchema';
import { PersonsToProjectsOrderByRelationAggregateInputSchema } from './PersonsToProjectsOrderByRelationAggregateInputSchema';
import { ProjectsToTasksOrderByRelationAggregateInputSchema } from './ProjectsToTasksOrderByRelationAggregateInputSchema';
import { PrioritiesToProjectsOrderByRelationAggregateInputSchema } from './PrioritiesToProjectsOrderByRelationAggregateInputSchema';
import { EnergiesToProjectsOrderByRelationAggregateInputSchema } from './EnergiesToProjectsOrderByRelationAggregateInputSchema';
import { ProjectsToTagsOrderByRelationAggregateInputSchema } from './ProjectsToTagsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToProjectsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToProjectsOrderByRelationAggregateInputSchema';
import { PrivateTagsToProjectsOrderByRelationAggregateInputSchema } from './PrivateTagsToProjectsOrderByRelationAggregateInputSchema';

export const ProjectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completionRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  templateId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  public: z.lazy(() => SortOrderSchema).optional(),
  publicAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  startAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  startedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dueAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  template: z.lazy(() => ProjectTemplateOrderByWithRelationInputSchema).optional(),
  volunteers: z.lazy(() => PersonsToProjectsOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => ProjectsToTasksOrderByRelationAggregateInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToProjectsOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectsOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ProjectOrderByWithRelationInputSchema;
