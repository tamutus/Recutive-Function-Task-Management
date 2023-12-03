import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreatelinksInputSchema } from './ProjectCreatelinksInputSchema';
import { PersonsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema } from './PersonsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema';
import { PrioritiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema } from './PrioritiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema';
import { EnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema } from './EnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedCreateNestedManyWithoutProjectInputSchema } from './ProjectsToTagsUncheckedCreateNestedManyWithoutProjectInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema';

export const ProjectUncheckedCreateWithoutTasksInputSchema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutTasksInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => ProjectCreatelinksInputSchema),z.string().array() ]).optional(),
  templateId: z.number().int().optional().nullable(),
  public: z.boolean().optional(),
  publicAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startAt: z.coerce.date().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  dueAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  volunteers: z.lazy(() => PersonsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  tags: z.lazy(() => ProjectsToTagsUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema).optional()
}).strict();

export default ProjectUncheckedCreateWithoutTasksInputSchema;
