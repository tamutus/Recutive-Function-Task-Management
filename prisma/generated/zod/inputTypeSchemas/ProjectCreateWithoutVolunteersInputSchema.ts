import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreatelinksInputSchema } from './ProjectCreatelinksInputSchema';
import { ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema } from './ProjectTemplateCreateNestedOneWithoutImplementationsInputSchema';
import { ProjectsToTasksCreateNestedManyWithoutProjectInputSchema } from './ProjectsToTasksCreateNestedManyWithoutProjectInputSchema';
import { PrioritiesToProjectsCreateNestedManyWithoutProjectInputSchema } from './PrioritiesToProjectsCreateNestedManyWithoutProjectInputSchema';
import { EnergiesToProjectsCreateNestedManyWithoutProjectInputSchema } from './EnergiesToProjectsCreateNestedManyWithoutProjectInputSchema';
import { ProjectsToTagsCreateNestedManyWithoutProjectInputSchema } from './ProjectsToTagsCreateNestedManyWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateNestedManyWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateNestedManyWithoutProjectInputSchema';

export const ProjectCreateWithoutVolunteersInputSchema: z.ZodType<Prisma.ProjectCreateWithoutVolunteersInput> = z.object({
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
  tasks: z.lazy(() => ProjectsToTasksCreateNestedManyWithoutProjectInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToProjectsCreateNestedManyWithoutProjectInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectsCreateNestedManyWithoutProjectInputSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsCreateNestedManyWithoutProjectInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsCreateNestedManyWithoutProjectInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export default ProjectCreateWithoutVolunteersInputSchema;