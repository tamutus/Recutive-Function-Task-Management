import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { PriorityOrderByRelationAggregateInputSchema } from './PriorityOrderByRelationAggregateInputSchema';
import { PersonsToProjectsOrderByRelationAggregateInputSchema } from './PersonsToProjectsOrderByRelationAggregateInputSchema';
import { TaskOrderByRelationAggregateInputSchema } from './TaskOrderByRelationAggregateInputSchema';
import { PersonsToSkillPathsOrderByRelationAggregateInputSchema } from './PersonsToSkillPathsOrderByRelationAggregateInputSchema';
import { PersonsToSkillsOrderByRelationAggregateInputSchema } from './PersonsToSkillsOrderByRelationAggregateInputSchema';
import { PrivateEnergyOrderByRelationAggregateInputSchema } from './PrivateEnergyOrderByRelationAggregateInputSchema';
import { PrivateTagOrderByRelationAggregateInputSchema } from './PrivateTagOrderByRelationAggregateInputSchema';
import { EnergiesToPersonsOrderByRelationAggregateInputSchema } from './EnergiesToPersonsOrderByRelationAggregateInputSchema';
import { PersonsToProjectTemplatesOrderByRelationAggregateInputSchema } from './PersonsToProjectTemplatesOrderByRelationAggregateInputSchema';
import { PersonsToTaskTemplatesOrderByRelationAggregateInputSchema } from './PersonsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PersonsToTagsOrderByRelationAggregateInputSchema } from './PersonsToTagsOrderByRelationAggregateInputSchema';
import { ProjectTemplatesToTagsOrderByRelationAggregateInputSchema } from './ProjectTemplatesToTagsOrderByRelationAggregateInputSchema';
import { TagsToTaskTemplatesOrderByRelationAggregateInputSchema } from './TagsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { SkillsToTagsOrderByRelationAggregateInputSchema } from './SkillsToTagsOrderByRelationAggregateInputSchema';
import { SkillPathsToTagsOrderByRelationAggregateInputSchema } from './SkillPathsToTagsOrderByRelationAggregateInputSchema';
import { EnergiesToTagsOrderByRelationAggregateInputSchema } from './EnergiesToTagsOrderByRelationAggregateInputSchema';

export const PersonOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  priorities: z.lazy(() => PriorityOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => PersonsToProjectsOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional(),
  skillPaths: z.lazy(() => PersonsToSkillPathsOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => PersonsToSkillsOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergyOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPersonsOrderByRelationAggregateInputSchema).optional(),
  editedProjects: z.lazy(() => PersonsToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  editedTasks: z.lazy(() => PersonsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  tagFollows: z.lazy(() => PersonsToTagsOrderByRelationAggregateInputSchema).optional(),
  projectTags: z.lazy(() => ProjectTemplatesToTagsOrderByRelationAggregateInputSchema).optional(),
  taskTags: z.lazy(() => TagsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  skillTags: z.lazy(() => SkillsToTagsOrderByRelationAggregateInputSchema).optional(),
  skillPathTags: z.lazy(() => SkillPathsToTagsOrderByRelationAggregateInputSchema).optional(),
  energyTags: z.lazy(() => EnergiesToTagsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PersonOrderByWithRelationInputSchema;
