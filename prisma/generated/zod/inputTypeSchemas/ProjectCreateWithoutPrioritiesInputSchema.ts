import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreatelinksInputSchema } from './ProjectCreatelinksInputSchema';
import { ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema } from './ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema';
import { PersonsToProjectsCreateNestedManyWithoutProjectInputSchema } from './PersonsToProjectsCreateNestedManyWithoutProjectInputSchema';
import { ProjectsToTasksCreateNestedManyWithoutProjectInputSchema } from './ProjectsToTasksCreateNestedManyWithoutProjectInputSchema';
import { EnergiesToProjectsCreateNestedManyWithoutProjectInputSchema } from './EnergiesToProjectsCreateNestedManyWithoutProjectInputSchema';
import { ProjectsToTagsCreateNestedManyWithoutProjectInputSchema } from './ProjectsToTagsCreateNestedManyWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateNestedManyWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateNestedManyWithoutProjectInputSchema';

export const ProjectCreateWithoutPrioritiesInputSchema: z.ZodType<Prisma.ProjectCreateWithoutPrioritiesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => ProjectCreatelinksInputSchema),z.string().array() ]).optional(),
  public: z.boolean().optional(),
  publicAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startAt: z.coerce.date().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  dueAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  template: z.lazy(() => ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema).optional(),
  volunteers: z.lazy(() => PersonsToProjectsCreateNestedManyWithoutProjectInputSchema).optional(),
  tasks: z.lazy(() => ProjectsToTasksCreateNestedManyWithoutProjectInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectsCreateNestedManyWithoutProjectInputSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsCreateNestedManyWithoutProjectInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export default ProjectCreateWithoutPrioritiesInputSchema;